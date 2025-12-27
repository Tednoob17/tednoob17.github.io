+++
title = 'From Day0 to 0day Chapter 3'
date = 2025-09-10T23:28:38+02:00
draft = false
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
In talking about `ast` module we can use it to watch what it seem like.  

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
tedsig@42:~$ python3 ast_ex1.py
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

So it's difficult to use this approach because a regex who can catch all possible edges cases would be incredibly complex. With **AST** you can just identity all the **call nodes**
 in function of their **parents nodes**.  

 **Example 2:** Create a  file `sample_code.py` containing a previous code who will translated in **AST**  

```bash
tedsig@42:~$ cat ast_ex2.py 

import ast
import os

cur_dir = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(cur_dir, 'sample_code.py')) as f:
    tree = ast.parse(f.read())
    print(ast.dump(tree, indent=4))
```

After execution

```python3
tedsig@42:~$ python3 ast_ex2.py
Module(
    body=[
        FunctionDef(
            name='old_greet',
            args=arguments(
                posonlyargs=[],
                args=[
                    arg(arg='name')],
                kwonlyargs=[],
                kw_defaults=[],
                defaults=[]),
            body=[
                Expr(
                    value=Call(
                        func=Name(id='print', ctx=Load()),
                        args=[
                            BinOp(
                                left=Constant(value='Hello, '),
                                op=Add(),
                                right=Name(id='name', ctx=Load()))],
                        keywords=[]))],
            decorator_list=[]),
        Assign(
            targets=[
                Name(id='yell', ctx=Store())],
            value=Name(id='print', ctx=Load())),
        Expr(
            value=Call(
                func=Name(id='yell', ctx=Load()),
                args=[
                    Constant(value='HELLO, WORLD')],
                keywords=[]))],
    type_ignores=[])
```

Knowing what each node does, we can just follow a essentials **node** like `Expr`, `Assign`
ignoring a `FunctionDef` and **node** who is like it, only if a **defined function** is **not called** after.

And when you follow a variables affected by `Assign` you'll see a correct path to identify  
 a `Call` **node** where a `func` attribute value is a `print` function.

```ast
Expr(
    value=Call(
        func=Name(id='print', ctx=Load()),
```

We have another way to representing the code **Control Flow Graph** (CFG) that model
a potential paths through a program during execution, it concrned with the order of execution
program (such as `if-else` statements and **loops**). This allow to determines which parts of code can actually be reached during execution ( **reachability analysis** ).  

Another type of representation is a **Data Flow Graph** (DFG), it focus on the **propagation and transformation**
of data (including **variables and expressions**).  



## Static Code Analysis Tools


