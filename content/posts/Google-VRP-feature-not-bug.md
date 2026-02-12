 
+++
title = 'Google VRP: To Be a Comment, or Not to Be ?'
date = '2026-02-12T00:00:00+01:00'
draft = false
tags = ['Google', 'zx', 'RCE']
+++

## The Hook (The "What")
Can a single invisible character bypass a security sandbox? 
I discovered a vulnerability in `google/zx` where a Carriage Return (`\r`) 
allows arbitrary code execution in Markdown files—right under the nose of code reviewers.


## What is zx ?
In the world of DevOps, we often struggle with **Bash** (which is powerful but messy) and **Node.js** (which is clean but wordy).   
**zx** is a tool created by **Google** that marries the two.  

It allows you to write scripts in **JavaScript**, but with the ease of a shell. 
You can write commands like `await $`ls` `  directly inside your code.

### The Markdown Script Feature

The most magical part of zx and where our tragedy begins is its ability to execute **Markdown** files (.md).

- The Intent: A developer writes documentation and includes code blocks (**three backtick**).
- The Mechanism: When you run `zx script.md`, **zx** parses the file. It treats the text  as comments and the code blocks as executable commands.
- The Sandbox: To keep things safe, **zx** is supposed to "silence" any text that isn't inside a formal **code block** by wrapping it in **JavaScript** comments (`//`).


## The problem

The `transformMarkdown` function in `src/md.ts` is responsible for parsing Markdown files and converting them into executable JavaScript scripts.   
It iterates through the file content by splitting it using the regex `/\r?\n/` (matching **LF** or **CRLF**). However, this regex does not match a standalone **Carriage Return** (`\r`) character.  

In JavaScript, a single-line comment started with `//` is terminated by any Line Terminator sequence, which includes **LF** (`\n`), **CR**   
(`\r`), **LS** (`\u2028`), and **PS**  (`\u2029`).  

If a **Markdown file** contains a line with an embedded **CR** character (e.g., `Safe Text\rMaliciousCode`), `transformMarkdown` treats   
the entire sequence as a single line of text (non-code block). It then prefixes the line with `//` to comment it out. The resulting JavaScript
code becomes `// Safe Text\rMaliciousCode`.

When **Node.js** executes this transformed code, the comment `// Safe Text` is terminated by the `\r`, and the subsequent 
`MaliciousCode` is executed as valid JavaScript. This allows an attacker to hide arbitrary code execution within the text sections of a Markdown file, which a user might inspect and believe to be safe documentation or comments. 

This is particularly dangerous as some text editors or viewers may render **CR** simply as a newline or hide it entirely, masking the malicious code.

## POC
