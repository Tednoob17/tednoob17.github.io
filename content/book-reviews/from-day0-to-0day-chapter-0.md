+++
title = 'From Day 0 to 0day Chapter 0'
date = '2025-07-15T00:37:02+01:00'
draft = false
author = 'Tedsig42'
tags = ['book-review']
+++


![alt](/images/stc/fd0t0d.png)

This is my summary and review of the book **[From Day Zero to Zero Day](https://nostarch.com/zero-day)** by Eugene "[Spaceraccoon](https://x.com/spaceraccoonsec)" Lim, a security researcher and white-hat hacker.

**He learned rapidly because his first training was in how to learn.** - `Frank Herbert, Dune`.

With the number of discovered and exploited zero days constantly growing, vulnerability research, or the process of analyzing systems
for new vulnerabilities, has assumed a critical role in cybersecurity.

Most write-ups on zero-day findings describe what the vulnerability is, but not how it was discovered.
The methodologies for finding particular vulnerabilities can vary greatly.
You’ll learn about the basics of reporting vulnerabilities, what vulnerability research is (and isn’t), and its three main disciplines: **code review, reverse engineering, and fuzzing**.
## What Is a Vulnerability?

Weakness in an information system, system security procedures,
internal controls, or implementation that could be exploited or
triggered by a threat source.  
Source : [NIST](https://csrc.nist.gov/glossary/term/vulnerability)

First, a vulnerability must be a flaw in the design or implementation of
a system. This means that if exploited, the vulnerability causes the system to act in an insecure manner that wasn’t intended by the developers.

The Common Vulnerability Scoring System (**CVSS**) industry standard uses the **Confidentiality**, **Integrity**, and **Availability** a (**CIA**) triad to evaluate the impact of vulnerabilities:


- **Confidentiality** :An attacker can access data they’re not authorized to access.
- **Integrity** : An attacker can modify data they’re not authorized to modify.
- **Availability** : An attacker can disrupt access to the system itself.

These components describe how a successfully exploited vulnerability
can impact a system and provide a useful lens to characterize a vulnerability.  
For example, a **vulnerability** that allows an attacker to write arbitrary files
in a system affects the integrity of the system but doesn’t necessarily impact confidentiality.  
While this won’t be at the top of your mind when looking for vulnerabilities, it’s helpful when communicating your findings to others, such as when you’re writing a vulnerability disclosure report.

## Common Vulnerabilities and Exposures Records

A Common Vulnerabilities and Exposures (`CVE`) identifier, such as `CVE-2020-19909` or `CVE-2020-21469`, is a unique reference assigned to a publicly disclosed vulnerability.

The **MITRE** Corporation manages the system that
publishes these identifiers, which have gradually become a global standard for referencing known vulnerabilities.   
However, although many consider a CVE Record to be an “**official**” vulnerability, this isn’t the case; it’s nice to get a CVE assigned for a vulnerability you discovered, but not all vulnerabilities have **CVEs**, nor are all **CVEs** actual **vulnerabilities**.

The **CVE Program** has grown organically into a de facto industry **reference**, rather than being established as a formal **international standard**.   
It’s actually a federated system of **CVE** Numbering Authorities (CNAs) that can assign CVE identifiers to vulnerabilities that fall within their **scope**.   
For example, a **vendor** **CNA** has the authority to assign **CVE IDs** to **vulnerabilities** affecting their own **products**, allowing them to control the **CVE** publication process.   
While there are common **CVE** assignment rules and a central **CVE** request form that goes to the root **CNA** (**MITRE**), the assignment of **CVE IDs** is still fairly decentralized and left to the discretion of **CNAs**, which can lead to erroneous **CVEs** being published.

### Incorrect Reporting of Vulnerabilities
The frequent conflation of bugs and vulnerabilities is a common cause of erroneous reporting.   
For example, the curl and Postgres projects have both rejected vulnerability disclosures that could be considered bugs but weren’t vulnerabilities.

- `CVE-2020-19909` vulnerability record for curl:
Integer overflow vulnerability in `tool_operate.c` in `curl 7.65.2` via a large value as the retry delay. This exploit scenario doesn’t cross a security boundary during normal usage of curl by a local user either, since they’d already be able to control `--retry-delay directly` .
This is not especially plausible because the overflow only happens if the user was trying to specify that curl should wait weeks (or
longer) before trying to recover from a transient error.  
Source: [Daniel haxx](https://daniel.haxx.se/blog/2023/08/26/cve-2020-19909-is-everything-that-is-wrong-with-cves/)

- `CVE-2020-21469` the disputed vulnerability record for Postgres, which states:
An issue was discovered in **PostgreSQL** `12.2` allows attackers to cause a denial of service via repeatedly sending `SIGHUP` signals. In order to exploit this vulnerability, the attacker needs to already have access to an account with elevated privileges, such as:
	- A `PostgreSQL` superuser (`postgres`) .
	- A user that was granted permission to execute `pg_reload_conf` by a `Postsgres` superuser
	- A privileged operating system user .  
Source: [Postgres](https://www.postgresql.org/about/news/cve-2020-21469-is-not-a-security-vulnerability-2701)

## What Is Zero-Day Vulnerability Research?

**Zero-day vulnerability research** is the systematic process of analyzing software and hardware targets to discover security vulnerabilities.  
This covers most technology, from desktop applications to IoT devices to operating system kernels.  
**Vulnerability research** focuses on **individual components**, such as a particular driver in an operating system or a network service in an IoT device.  
By **isolating particular components** we can generalize techniques that are applicable across components, such as **reverse engineering shared libraries or fuzzing network protocols.**


### Vulnerability Research vs. Penetration Testing .  

**Vulnerability research** and **penetration testing** share common techniques and tools, but they differ in their goals.

**Penetration testing** aims to find and exploit vulnerabilities in a particular system, whether it’s a web application or a network. These vulnerabilities aren’t necessarily new.

**Vulnerability research** aims to **discover vulnerabilities** in **software or hardware targets**.   If you discover a new vulnerability in a router, all networks that use this router are theoretically at risk. It not limited to one enterprise but all enterprise using it.

If you **discover** a buffer overflow that overwrites return address pointers on the stack in a program, a simple proof of concept (**PoC**) that triggers this is sufficient for vulnerability research.

Developing a full blown **exploit** that executes arbitrary shellcode falls under exploit development the process of creating tools or code that exploits vulnerabilities—and is a necessary step in a penetration test.

Another major feature of **vulnerability research** is the use of static and
dynamic analysis, including reverse engineering, to analyze a target.  
**Penetration tests** often attempt to assess the real-world security posture of a target and may be confined to **black-box** (with no knowledge of the internal implementation of the target) techniques on external attack surfaces, such as testing the **requests** made to a web application.  
**Vulnerability research**, on the other hand, focuses on **white-box** (with knowledge of the internals, such as source code) and **gray-box** (with only partial knowledge of the internals) analysis, finding **weaknesses** through an "inside out" perspective by using code review and reverse engineering techniques.  
Thus, **vulnerability research** is more effective at discovering deeper **vulnerabilities**.


### Disciplines and Techniques
As mentione earlier, vulnerability research comprises three main disciplines: **code review**, **reverse engineering**, and **fuzzing**.

**Code Review** : is the process of analyzing the source code of a system to identify vulnerabilities.
Code review often appears easier than reverse engineering or fuzzing,
but the difficulty of discovering a vulnerability doesn’t correlate with its criticality, it begins with the fundamental skill of manual source-to-sink tracing before diving into automated code analysis tools.

**Reverse Engineering** :  
Reverse engineering involves taking apart software, such as **binary executable**
files compiled from **source code**, to reveal and analyze its inner workings.  
Although this may appear more daunting than analyzing **human-readable**
code, it’s an exciting opportunity because many targets rely on **security by obscurity** to hide blatant **weaknesses**.  
While code review is similar to reading a complicated map to find your way from point `A` to point `B`, reverse engineering is like exploring a dark tunnel that may reveal unexpected treasures at the next turn.  
Reverse engineering doesn’t focus only on **lower-level** assembly code, as
we can compile **binaries** into intermediate languages like **Java bytecode** or
even include **embedded interpreters** for scripting languages like **JavaScript**.

**Fuzzing** :  
Finally, **fuzzing** provides a highly automated means of finding **vulnerabilities** by hammering a target with various **invalid or unexpected** inputs.  
You’ll learn to optimize your fuzzing by writing **fuzzing** harnesses that
fuzz interesting or neglected parts of a target. Writing an optimal **fuzzing**
harness draws on many **code review** and **reverse engineering** concepts.  
Modern coverage-guided **fuzzing** uses more advanced and effective means of **enumerating** a target.

## Selecting a Vulnerability Research Target

Practicing target selection greatly increases your chances of finding a vulnerability.
As you’ll see, picking a good target for research can be challenging
because a target isn’t guaranteed to be vulnerable.

We can use a rule of three similar to the **CIA** triad to choose a target:
**familiarity**, **availability**, and **impact**.

**Familiarity** :
Familiarity is how much is known about the target.    
You should pick a target
that’s written in a **programming language or framework** you’re **comfortable** with.  
You don’t need to be an **expert** in exploiting language-specific **vulnerabilities** so long as you can follow the code.   
In some cases, the target may have been researched before or is well documented.  
**Conference talks, whitepapers, and vulnerability** **write-ups** provide valuable information that can speed up your **familiarization** process.  
While you may want to avoid a **hardened** target that has been thoroughly
**researched** before by others, I’ve found that popular **targets** are constantly
changing and adding new **features**.  
Don’t give up on them before even trying! Consider the platform the code targets as well, as this factor affects the
**types of vulnerabilities** you can **exploit** and your ability to discover them.
Is it a **web application** or a native **shared library** ?   
Does it call **Windows APIs** ? Will it run on the **client or server** ? Also consider whether the **target** uses
well-known **protocols** and standards; having documentation allows you to
recognize common **functions** and routines that are part of these standards
and save time in identifying them.


**Availability** :  
Unlike in the **CIA** triad, **availability** in the context of **vulnerability research** means how easy it is to **access and analyze** the target.  
Is it on **SourceForge** (you’d be surprised how many older projects live there) or GitHub ? Also consider how difficult it’ll be to set up a testing environment for
your **target**.  
Test potential **vulnerabilities** while reviewing the code to validate your assumptions about how it works.  
One final consideration is the accessibility of the project owners.  
If you find a **vulnerability**, someone should be **available** to acknowledge and **patch the bug** (like a  security@apache.org email of **Apache Software Foundation**) .   
Keep in mind that some project owners might **not welcome** or be able to **respond to vulnerability** reports.  


**Impact** :  
The **Impact** is the importance of the target.   
While **farming  vulnerabilities** in a
dead, decades-old project might be **educational**, it’s not impactful if no one
uses it.    
At the same time, dead projects could be far more important than
they appear; for example, a dead project could be the only known parsing
**library** for a legacy **file format** some major software uses to **maintain** backward compatibility.  
There are plenty of metrics to gauge a project’s impact, such as **GitHub stars** ⭐  or **forks**, **download counts**, and usage in other **projects**.

### Where to Explore Projects
With these considerations in mind, picking a suitable target from the millions of available codebases can be challenging.  
I recommend exploring **GitHub projects** by topic at https://github.com/topics , then filtering by **programming language** and sorting by **stars**, **forks**, or **last update** time.  
Additionally, you can explore up-and-coming projects that may not have experienced much scrutiny by other vulnerability researchers on GitHub’s Trending page :  https://github.com/trending .  
Another option is to browse project directories like the Apache Software Foundation’s (https://projects.apache.org).  
The directory allows sorting by name, committee, category, programming language, and **number of committers**.  
However, avoid focusing on finding bugs in “in the attic” (end-of-life) projects, as you’re unlikely to get a response to **security reports** about these.
