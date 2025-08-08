+++
title = 'From Day 0 to 0day Chapter 2'
description = 'Description of my first blog'
date = 2025-08-06T00:22:36+13:00
author = 'Tedsig42'
draft = true
+++


![alt](/images/stc/chap2.jpeg)
## MAPPING CODE TO ATTACK SURFACE

Once we know where we are, then the world becomes as narrow as a map.  
When we don’t know, the world feels unlimited.
`Liu Cixin, The Dark Forest`

## Introduction
**Attack surface** (the potential entry points to exploit a vulnerability) going often with the growing
of **complexity** of software.  
The **vulnerabilities** to be introduced, as developers’ capacity to **properly secure** these feature is
limited and mistakes are **inevitable** when dealing with millions of lines of code.  
Minor issues can be **chained** together into far more serious **vulnerabilities**.  

For example :
- Microsoft Excel handles not only Excel workbook file format (`.xls`, `.xlsx`, `.xlsm`, `.xls`) but also Symbolic Link (`.slk`), dBase (`.dbf`), Data Interchange
Format (`.dif` ), and more.
And these are just **file input vectors**; you also have
to worry about **[inter-process](https://www.geeksforgeeks.org/operating-systems/inter-process-communication-ipc/)** communication and other network vectors (Inter-Process Communication or IPC is a mechanism that allows processes to **communicate**. It helps processes **synchronize their activities**, **share information**, and **avoid conflicts** while accessing **shared resources**.).    
For example, another process may control Excel via **[Component Object Model](https://learn.microsoft.com/en-us/windows/win32/com/component-object-model--com--portal)**
(COM) interfaces  (These objects can be within a single process, in other **processes**, even on **remote computers**.), or it may fetch data from the **internet** via external data
connections.   
These are all potential **sources for exploitable vulnerabilities** .

## The Internet
In the past, native and web applications lived in separate worlds:  
- Native **applications** were **compiled** into machine **code binaries** that ran on specific devices and platforms.
- Web applications were mostly written in **web development languages** .
They had vastly different attack surfaces and exploit vectors

### Web Client Vulnerabilities
**Client-side vulnerabilities** are especially for software running on **native devices**, such as **desktop or mobile applications**  

### Attack Vectors


### Identification and Classification
