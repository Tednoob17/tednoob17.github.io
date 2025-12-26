+++
title = 'From Day0 to 0day Chapter 3'
date = 2025-09-10T23:28:38+02:00
draft = true
tags = ['book-review']
+++


![alt](/images/stc/chap3.jpeg)

# AUTOMATED VARIANT ANALYSIS

## Introduction
Now that we know what is **source and sink analysis**, we will learn how to automate code analysis (Know that automated the process can depends until your code base).

We shall used two popular open source static code analysis  tools **CodeQL and Semgrep**.


## Abstract Syntax Trees

Modern static code analysis tools for better and deeply comprehension of code base need to understanding of multiple aspect of the code / programming language used like difference between **function and a variable**, **usage of statement**, **class inheritance for object-oriented languages**, **the exact placement of parenthesis or semicolons** and so on.

**AST** is a data-structure. It’s a tree that models the syntax of a programming language. 

**AST** serve to represent a syntactic structure of a proram, it's used in a many anothers things, by example a **compilers** use **AST** like **Clang for C/C++**, **Babel for Javascript**, **ast built-in module for Python**.

In talking about `ast` module we can use it to watch what it seem like

```python3
#!/usr/bin/python3

import ast
# Python source code to convert to AST
code = """
name = 'World'
print('Hello,' + name)
"""

tree = ast.parse(code)
print(ast.dump(tree, indent=4))
```

```bash
sig@42:~$ python3 ast_ex1.py
Module(
    body=[
        Assign(
            targets=[
                Name(id='name', ctx=Store())],
            value=Constant(value='World')),
        Expr(
            value=Call(
                func=Name(id='print', ctx=Load()),
                args=[
                    BinOp(
                        left=Constant(value='Hello,'),
                        op=Add(),
                        right=Name(id='name', ctx=Load()))],
                keywords=[]))],
    type_ignores=[])

```

This **tree** consists of **nodes**, where each **node** is a **data object** that represents a syntactic construct in the language. The output is **organized** in a **tree structure**, with `Module` as the **root node** branching off into **child nodes** like `Assign`, `Expr`, and `Call`. 

- Exemple of pratical usage 
Suppose here that `print` is a **sink function**, and you search to know if the last line **call** `print`.

```python3

def old_greet(name):
    print('Hello, ' + name) //1

yell = print

yell('HELLO, WORLD') //2
```

Firstly searching this pattern in code can be conduct to use a regex like this : `/print\([^)]*\)/g` or `/print\(([^)]*)\)/g`  (**PCRE** (**Perl Compatible Regular Expressions**)).
The first regex capture all `print` **function call** and her content, the second do same things but capture all argument send to function even if it's another **function**. 

```md
Ex : print(calcul(5))
# Recursive regex (not supported in Javascript)
```

The problem with this approch is a false positive like (`//1`) and a false negative (`//2`)

(`//1`) - The `old_greet` function call `print` but this function is never used in code.

(`//2`) - `yell` use `print` but it **never catch** because of reassigment .

So it's difficult to use this approach because a regex who can catch all possible edges caseswould be incredibly complex. With **AST**
