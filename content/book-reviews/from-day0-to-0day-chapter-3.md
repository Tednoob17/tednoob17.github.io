+++
title = 'From Day 0 to 0day Chapter 3'
date = '2025-09-10T23:28:38+02:00'
draft = true
tags = ['book-review']
+++


![alt](/images/stc/chap3.jpeg)

# AUTOMATED VARIANT ANALYSIS

## Introduction
Now that we know what **source and sink analysis** is, we will learn how to automate code analysis (Note that automating the process can depend on your codebase).  
We shall use two popular open source static code analysis  tools **CodeQL and Semgrep**.  

## Abstract Syntax Trees

Modern static code analysis tools for better and deep comprehension of code base need to understand multiple aspects of the code / programming language used like difference between **function and a variable**, **usage of statement**, **class inheritance for object-oriented languages**, **the exact placement of parenthesis or semicolons** and so on.
**AST** is a data-structure. It’s a tree that models the syntax of a programming language.   

**ASTs** serve to represent the syntactic structure of a program. They're used in many things; for example, compilers use ASTs (like Clang for C/C++), Babel for JavaScript, and the built-in `ast` module for Python.
Speaking of the `ast` module, we can use it to see what an AST looks like.

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

Here we will explain a differences between abstractions and querying methods with **CodeQL and Semgrep**

### **CodeQL**

**CodeQL** is focused on query relational database,  it's means that it needs to build a database
of code before performing any queries. The code treatments depend on if it's a compiled or non-compiled 
languages.  
It used a **programming language's build system** like **make** for `C/C++` and for **non-compiled** languages
like `Python` it uses extractors to parse the code and after store it in database.   

A **CodeQL** query languages it similar to database query language like **SQL**.  

Example of COdeQl query to found all `print` function calls.  

```python3
import python // because a code base containing a "print" is in python (cf a previous code)

from Call call, Name name
where call.getFunc() = name and name.getId() = "print"
select call, "call to 'print'."
```

- `Call` and `Name` **classes** share the same name as a **types** in `ast` **Python** module.
It's because **CodeQL** `Python` extractor uses `ast` as well as it own extended `semmle.python.ast`
class to parse python codebases.
By example,  **CodeQL Go** extractor also uses the `Go` standard library `go/ast` package.
Thus for each language **CodeQL** a extraction approch is customized  allowing to **build a comprehensive databases**
of data and **control flow relationships**.

It possible with **CodeQL** to create a global **taint tracking queries** to find **source-to-sink**, you 
can also reuse a components .

#### Multifile Taint Tracking Example

For this example Consider a `Node.js` web **API server** built on the `Express framework` that consists of two files, `index.js` and `utils.js`.  
This web API has a single `/ping` endpoint that causes the **server** to `ping` any **IP address** in the ip query parameter.

Just with the previous description sentences it sure that a developper has inadvertently introduced a remote code
execution via command injection vulnerability.

Before using **CodeQL** we need to use **CodeQL CLI first.** on [codeql-bundle](https://github.com/github/codeql-action/releases)
After extraction in 

```bash
tedsig@42~:$ tar -xzvf codeql-bundle-linux64.tar.gz
tedsig@42~:$ echo "export PATH=\$PATH:$(pwd)/codeql" >> ~/.zshrc
tedsig@42~:$ source ~/.zshrc
tedsig@42~:$ codeql version
tedsig@42~:$ mkdir -p ~/codeql-workspace/project
```

```md
~/codeql-workspace/project
├── index.js
└── utils.js
```


- *index.js*

```js
const express = require("express");
const { ping } = require("./utils.js"); //1

const app = express();

app.get("/ping", (req, res) => {
    const ip = req.query.ip; //2
    res.send(`Result: \n${ping(ip)}`);
})

app.listen(3000);
```

-> `//2` : A `req.query.ip` is user-controlled data.

-> `//1` : The `utils.js` is imported in *index.js* with `ping` function.

- *utils.js*

```js

const { execSync } = require("child_process");

	exports.ping = (ip) => {
		try {
 			return execSync(`ping -c 5 ${ip}`); //1
		} catch (error) {
			return error.message;
	}
};

```

-> `//1` Here a `ping` passes `ip` value to `execSync` function which executes a **shell command**
using it like first argument , but any attacker can combine a another command like this `;whoami`

**CodeQL** provides convenient classes for common **sources and sinks**, including
remote user input and command execution functions.

- *RemoteCommandInjection.ql*

```CodeQL
/**
 * @id remote-command-injection
 * @name Remote Command Injection
 * @description Passing user-controlled remote data to a command injection.
 * @kind path-problem
 * @severity error
 */

import javascript


module RemoteCommandInjectionConfig implements DataFlow::ConfigSig {
	predicate isSource(DataFlow::Node source) {
 		source instanceof RemoteFlowSource //1
    }

    predicate isSink(DataFlow::Node sink) {
        sink = any(SystemCommandExecution sys).getACommandArgument() //2
    }
}

module RemoteCommandInjectionFlow =
	TaintTracking::Global<RemoteCommandInjectionConfig>;


import RemoteCommandInjectionFlow::PathGraph

from RemoteCommandInjectionFlow::PathNode source,
	RemoteCommandInjectionFlow::PathNode sink
where RemoteCommandInjectionFlow::flowPath(source, sink)
select sink.getNode(), source, sink,
	"taint from $@ to $@.", source.getNode(), "source", sink, "sink"
```

- `//1` : `RemoteFlowSource` is a **sources** of taint tracking configuration.
- `//2` : `SystemCommandExecution` is a **sink** as a command argument instance.



```
tedsig@42~:$ export CODEQL_ALLOW_INSTALLATION_ANYWHERE=true #To use when your installation folder is on the root, downloads or desktop directory.
tedsig@42~:$ mkdir -p ~/codeql-workspace/queries
tedsig@42~:$ cd ~/codeql-workspace
tedsig@42~/codeql-workspace:$ codeql database create ~/codeql-workspace/my-db --language=javascript-typescript --overwrite
```

- *qlpack.yml*

```yml
name: my-queries
version: 1.0.0
dependencies:
  codeql/javascript-all: "*"
```

- Here is how my codeql folder workspace is organized

```md
~/codeql-workspace/
├── my-db/              <-- A created database
|── project				<-- A project folder
├── queries/            <-- Create this folder
│   ├── qlpack.yml         <-- Metadata & dependencies
│   └── RemoteCommandInjection.ql
└── results.csv          <-- The final output will appear here

```

With this we can track the flow of attacker-controllable data to a vulnerable function.
The query written check if we have a flow path from **sources to sinks**. It output the result in a structure
that **CodeQL** can parse.

- **SARIF** (Static Analysis Results Interchange Format) **output**.

```bash
tedsig@42~/codeql-workspace:$ codeql database analyze my-db queries/RemoteCommandInjection.ql \
   --format=sarif-latest --output=results.sarif
Running queries.
[1/1] No need to rerun /home/kenshin/codeql-workspace/queries/RemoteCommandInjection.ql.
Shutting down query evaluator.
Interpreting results.


tedsig@42~/codeql-workspace:$ cat results.sarif|jq .
```
- *Output*

```codeQL
"results" : [ {
--snip--
	"codeFlows" : [ {
		"threadFlows" : [ {
			"locations" : [ {
				"location" : {
					"physicalLocation" : {
						"artifactLocation" : {
							"uri" : "index.js",
							"uriBaseId" : "%SRCROOT%",
							"index" : 1
						 },
						 "region" : {
							"startLine" : 7,
							"startColumn" : 16,
							"endColumn" : 28
						  }
						 },
						 "message" : {
							 "text" : "req.query.ip" //1
						  }
				 }
			 },
			 --snip--
			 {
				"location" : {
					"physicalLocation" : {
						"artifactLocation" : {
							"uri" : "index.js",
							"uriBaseId" : "%SRCROOT%",
							"index" : 1
						},
						"region" : {
							"startLine" : 8,
							"startColumn" : 32,
							"endColumn" : 34
						 }
				     },
				  "message" : {
  					 "text" : "ip" //2
				   }
				}
			},
			--snip--
			{
				"location" : {
					"physicalLocation" : {
						"artifactLocation" : {
							"uri" : "utils.js",
							"uriBaseId" : "%SRCROOT%",
							"index" : 0
						 },
						 "region" : {
						 	"startLine" : 5,
							"startColumn" : 21,
							"endColumn" : 38
						  }
					},

					"message" : {
 						"text" : "`ping -c 5 ${ip}`" //3
					}
				}
			} ]
		} ]
	} ]
```

**CodeQL** accurately tracks the **tainted data** from the `req.query.ip` request query parameter value (`//1`)
to the **ip variable** (`//2`) and finally to the template string passed to `execSync` in `utils.js` (`//3`)

- **CSV Output**

```bash
tedsig@42~/codeql-workspace:$ codeql database analyze ~/codeql-workspace/my-db queries/RemoteCommandInjection.ql \
	--format=csv --output=./final_results.csv

```
For using **CodeQL** effectively, we need to essentially learn a new programming language and familiarize yourself with the **CodeQL** standard libraries.


### **Semgrep**

Semantic grep aka **Semgrep** is another popular code analysis tool that uses a **pattern-oriented**
rule syntax, in contrast to **CodeQL**’s **query-oriented** syntax.

This following rule file (`express-injection.yml`) that identifies the same command injection vulnerability as the 
`RemoteCommandInjection.ql` **CodeQL**

```yml

rules:
  - id: express-injection
	mode: taint //1
	pattern-sources:
	   - pattern: req.query.$PARAMETER //2
	pattern-sinks:
	  - pattern: execSync(...) //3
	message: Passing user-controlled Express query parameter to a command injection.
	languages:
	  - javascript
	severity: ERROR
	metadata:
		interfile: true
```


- (`//1`) : **Semgrep** support a `mode` field features including **taint, join, extract**
- (`//2`) : A another feature commonly used is **metavariables** who is like a shell environment variables,
it prefixed with dollar sign (**$**), only in uppercase letter and can contains underscore (**_**)

Ex : 

```yml
patterns:
   - pattern: var $VARIABLE_NAME = "..."
   - metavariable-regex:
		metavariable: $VARIABLE_NAME
		regex: SECRET_.*
```

- (`//3`) : A sequence like this (`...`) match that between the brackets we can have one or more items.











