---
title: "Grep Cheatsheet - Notes from Linuxize"
date: 2021-01-09T15:48:24+05:30
tags: ["grep"]
posttype: "Linux"
hidden: true
---

## References
- Manual [Link](https://www.gnu.org/software/grep/manual/grep.html)
- Derived from [Linuxize](https://linuxize.com/post/regular-expressions-in-grep/)

## (GNU) Grep supports 3 forms of regex
1. Basic - This is default
2. Extended - `-E` or `--extended-regexp`
3. Perl-campatible - `-P` or `--perl-regexp`

## Basic vs Extended
- meta chars `?,+,{,|,(,)` have to prepended with `\` in basic but not in extented.
- There are some more minor subtle diff - [here](https://www.gnu.org/software/grep/manual/html_node/Basic-vs-Extended.html)

Ex Basic: `grep 'b\?right'` Extended: `grep -E 'b?right'`
This will match both `brignt` and `right`

## Cheatsheet

### Stright match
`grep string file`

### Anchors
|Metachar|Meaning|Example|Result|
|---|---|---|---|
| `^` | First | `^linux` | will match `linux` but not `alinux`|
| `$` | Last | `linux$` | will match `linux` but not `linux mint` |

### Objects
|Pattern|Meaning|
|---|---|
| `.` | Any single char |
| `[ab]` | Either a or b |
| `[abc]` | Either a or b or c |
| `[^l]` | Single char other than l |
| `[^abc]` | Single char that is niether a nor b nor c |
| `[A-Z]` | Capital chars from A to Z |
| `[a-m]` | small chars from a to m |
| `[0-5]` | single number from 0 to 5 |
| `[:alnum:]` | Alphanumeric Chars same as `[0-9A-Za-z]` |
| `[:alpha:]` | Alphabetic Chars |
| `[:blank:]` | Space and Tab |
| `[:digit:]` | Digits `[0-9]` |
| `[:space:]` | Space char |
| `[:lower:]` | Lower char |
| `[:upper:]` | Upper char |

Complete list can be found here [Grep Manual](https://www.gnu.org/software/grep/manual/grep.html#Character-Classes-and-Bracket-Expressions)

### Repeaters
|Metachat | Meaning |
|---|---|
| `*` | Match the preceding item zero or more times |
| `?` | Match the preceding item zero or one times |
| `+` | Match the preceding item one or more times |
| `{n}` | Match the preceding item exactly n times |
| `{n,}` | Match the preceding item at least n times |
| `{,n}` | Match the preceding item at most n times |
| `{n,m}` | Match the preceding item from n to m times |

### OR(|) operator
| Format | Meaning |
| --- | --- |
| `<expr1>\|<expr2>` | Either `<expr1>` or `<expr2>` |

Note: This needs to be preceded with `\` in Basic regex
Example:
Basic: `grep dogs\?\|cats\?` - This will match dog. dogs, cat and cats
Extended: `grep -E dogs?|cats?`

### Grouping
| Format | Meaning |
| --- | --- |
| `(<regexp>)` | `<regexp>` when enclosed with `()` are considered as single item, useful with **Repeaters** |

Example:
`grep -E 'John(athan)?$'` - Will both `John` and `Johnathan`
