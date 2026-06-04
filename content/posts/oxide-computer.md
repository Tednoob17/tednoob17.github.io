---
title: "What I Learned from the Oxide Podcast and Bryan Cantrill's Blog"
date: 2026-06-20T00:00:00Z
draft: true
description: "Personal notes on the Oxide and Friends podcast and Bryan Cantrill's blog."
tags: [oxide, bryan cantrill, blog, podcast, review]
lang: en
---

# What I Learned from the Oxide Podcast and Bryan Cantrill's Blog


Let me start with something stupid. Two years ago, I lost some data on an external drive. Nothing unrecoverable, but enough to send me on a Google hunt like "how ZFS works." I stumbled on an episode of *Oxide and Friends* where Bryan Cantrill and Adam Leventhal were talking about the history of ZFS with Jeff Bonwick — the guy who wrote it.

Three hours later, I was still there. I hadn't fixed my disk problem.

I haven't stopped listening since. And eventually I ended up on Bryan's blog, *The Observation Deck*, hosted at an address that reeks of the old world: `bcantrill.dtrace.org`. The blog has been around since 2004. 22 years of posts. I read most of them.

This article is just my notes. What I remembered, what made me laugh, what made me think. It's not a thesis, it's the mess of a guy who listened to too many hours of podcast and wanted to put words on it.

## How I fell into this

*Oxide and Friends* started from a Twitter Space in April 2021. Twitter Spaces had just launched, Bryan and Adam figured "let's try it." No format, no planning, no producer.

Six years later, 180 episodes. They talk for an hour or two with guests, no script, no prepared questions. Topics are announced on Twitter but the conversation always goes somewhere unexpected.

The guests are people who *built* the stuff they talk about. Not evangelists. One week it's Cliff Biffle, the guy who wrote the Hubris microkernel. The week before, Dave Pacheco working on rack updates. And outsiders too — storage veterans rehashing NAS wars from the 2000s. Oxide's YouTube channel (https://www.youtube.com/@oxidecomputercompany) has shorter series like FAQ Friday that are worth a look.

## When they trusted engineers

The thing that struck me the most was discovering what the industry looked like before I got into it.

Bryan started his career at Sun Microsystems in the mid-90s. Not because it was a good career move — because he wanted to work on an OS kernel at a real *computer company*, where hardware and software were designed by the same shop. At the time, that was already an iconoclastic idea.

Sun had this incredible blogging policy. In 2004, they launched `blogs.sun.com` with an explicit message to employees: you're not just *allowed* to blog, you're *encouraged* to. The message was "We trust you." The result: a mountain of technical content written by the engineers themselves — DTrace, ZFS, Solaris — that doesn't exist anywhere else.

Today, most technical articles online are written by marketers or people trying to sell you something. On this podcast, you hear engineers say "here's what worked, here's what broke, here's what we'd do differently."

No bullshit. It's rare.

## Don't buy "Dreaming in Code"

I read "On Dreaming in Code" (2007) and laughed out loud like an idiot.

Scott Rosenberg's book follows the development of Chandler. Chandler was supposed to be a personal information manager. The Open Source Applications Foundation (OSAF) ran the project, founded by Mitch Kapor — the creator of Lotus 1-2-3. I write this and realize it already sounds shaky. The project drifted for years without shipping.

Bryan asks a question that stuck with me:

> "Did Rosenberg pick a doomed project because he was convinced at the outset that developing software was impossible, and he wanted to be sure to write about a project that wouldn't hang the jury? Or did his views of the impossibility of developing software come about as a result of his being trapped on such a reeking vessel?"

He compares Chandler to the *Mobro 4000* — the New York garbage barge that wandered for months because no state would take its cargo. Chandler was software's *Mobro 4000*: Rosenberg boarded a garbage barge and came out thinking the whole world smelled the same.

He accuses Rosenberg of being "hoodwinked by every long-known crank in software." He cites the "Crank Holy Trinity" — Minsky, Kurzweil, Joy — to whom Rosenberg gives a platform they don't deserve. For Bryan, the book is a "Tour de Crank": a parade of characters that computer science had carefully locked in the basement, and that Rosenberg let loose.

But Bryan has this line:

> "Long after the Lighthouse at Alexandria crumbled, Euclid's greatest common divisor algorithm is showing no signs of wearing out."

His thing is that software can reach a kind of durability nothing else has. Write it well and it lasts decades. Rosenberg sees a swamp; Bryan sees pyramids. OK, that sounds pompous, but the idea holds.

I still haven't read *Dreaming in Code*. Maybe I should, to make up my own mind. But for now Bryan's argument is enough.

## BattleTris

The May 25, 2026 post, "A portentous reunion", is my favorite. Possibly the best thing he's written. (The podcast covered it too — see https://youtu.be/fmFt4-jjEc0 for that discussion.)

Setup: Bryan goes to his 30th college reunion at Brown University. Everyone is anxious about AI. And then he pulls out BattleTris.

BattleTris is a two-player Tetris-like game he coded in 1993 on a floppy disk, during his Brown days. It had become legendary on campus. Late-night games in the dorm, improvised tournaments, rivalries between graduating classes. Then the terminals were replaced, the floppies lost, the game forgotten.

Bryan thought the code was lost forever. A fan found a floppy, digitized it, sent it to him.

He and Adam used Claude (an LLM) to compile the C code on modern 64-bit Linux. Claude found a 22-year-old bug: `sizeof(int)` vs `sizeof(unsigned long)`, which were equivalent under 32-bit but not 64-bit. Cascading stack overflow, dormant for two decades.

The first game in 20 years was played. It crashed immediately. They fixed the bug, relaunched, and played until 1 AM. Bryan's wife (Brigid, his then-girlfriend) won her first game, and Adam texted: "You know what this means, right? It means that she's the one — you need to marry that girl."

And then he drops this:

> "This profoundly human, joyful moment was indisputably brought to us by the very thing that we are worried is going to strip us of our humanity."

The people freaking out about AI stealing humanity — they spent a night playing a 30-year-old game resurrected by that exact tech. It's absurd. Or poetic, I don't know.

## Systems Software in the Large

September 2025, "Systems Software in the Large." His most technical post, and the one that made me think.

Bryan has this distinction. **Systems software** provides abstractions to other programs, with an expectation of perfection. **Programming in the large** is software made of many modules, teams, years. The intersection — *systems software in the large* — he calls "the most grueling of projects." I think he's right.

The article revolves around a Dave Pacheco presentation on the Oxide rack update system. The problem: how do you update a distributed system without downtime, staying operational in a state *between* old and new? (It's on YouTube if you're interested: https://youtu.be/rrgp4WXnA5Y.)

And there's the *air gap* on top. Oxide customers can't use the cloud to cheat. No remote access, no hidden runbooks. It has to work on its own.

What I took from this: real problems aren't the sorting algorithm they ask in interviews. They're twisted things you only understand by coding them. No magic recipe, just painstaking work.

## Fishworks

"Fishworks: Now it can be told" (2008). I've re-read it many times.

In 2006, after DTrace, Bryan and Mike Shapiro were looking for what to do next. They went to see Greg Papadopoulos, Sun's CTO, with the idea of a NAS appliance — hardware *and* software, designed together. Papadopoulos jumped out of his chair: "Let's do it!"

The name "Fishworks" is a silly acronym Mike Shapiro came up with: FISH = "Fully Integrated Software and Hardware". But it's really a Simpsons gag — in "The War of the Simpsons", Homer buys a crappy boat that sinks. The joke is that building hardware when you're a software company is a bit like Homer buying a boat. Didn't seem to stop them.

The flagship product, a DTrace-based analytics interface, answered concrete questions like "what am I serving and to whom?" I read that a command-line veteran called it "the one GUI that I actually want to use." That kills me. The guy who hates GUIs — and he likes *that one*.

## Hiring without the red-black trees

"Assessing software engineering candidates" (2018) covers Joyent's process, documented in joyent/rfd 151. It's so far from what companies do today I had to read it twice.

The candidate sends three things: code, writing, analysis. Then they answer eight written questions — pride, regrets, struggles, mentors. In-person interviews come after.

Two rules stuck with me. The debrief starts with "Do not hire" positions — each member gives reservations *before* positives. So doubts don't get buried under groupthink. And one "Do not hire" is enough, especially on values or integrity. Doesn't matter if the guy's brilliant.

Bryan hates tech quizzes. Calls them "spelling bees" for adults. Agreed.

## Oxide's culture

"Engineering a culture" (March 2024). The title says it: they designed their culture deliberately, like you'd design a system.

Intern to CTO, same salary scale. No individual negotiation, no annual review. "Demo Friday" every week — engineers show what they built, no matter how small. (Found a YouTube example: https://youtu.be/hdqcrj5TBvE.)

Cliff Biffle said something that made me smile:

> "Our culture rewards openness, curiosity, and communication, and discourages defensiveness, empire-building, and gatekeeping."

If only that were the norm. But it isn't, which is why they wrote it down.

## USENIX ATC is dead

"RIP USENIX ATC" (May 2025). Bryan writes an obituary for the conference where he presented DTrace in 2004.

He first went in 1994 as a student. He says it was a mix of researchers, engineers, students — everyone talking about real problems. The New York Times covered DTrace when he presented it there.

Cancelled in 2025. Bryan says open source made academic publications useless for spreading tech, conferences became paper mills, industry left.

I don't fully agree. Rust conferences kept some of that spirit. But his general point isn't wrong: the research-industry mix barely exists anymore. And that sucks.

## The books

**The Soul of a New Machine** by Tracy Kidder. The most cited book on the podcast. The story of the Data General Eclipse in the 1970s — a team bonded around an impossible mission. Bryan re-read it in 2019 after recommending it to Jess Frazelle, and it showed him things he hadn't seen the first time.

**The Mythical Man-Month** by Fred Brooks. Everyone cites it, not many have read it. They've read it and it shows.

**Writing for Developers** by Sarna and Dunlop (2025). Bryan wrote the foreword. If you blog, go for it.

**Dreaming in Code** by Scott Rosenberg. Already said it but I'll say it again: I'm not buying. Not after Bryan's demolition.

## What it gave me, honestly

I still haven't fixed my external drive. I plugged it in the other day, it's making a weird noise. Maybe I'll re-listen to the ZFS episode. Maybe not.

I tried reading a software architecture book last month. Made it 30 pages. I thought "where are the jokes, man?" The podcast made me unable to read serious tech without humor next to it. Not sure that's progress.

What I've come to believe after all this is that engineering is just stories. Stories about things that broke, nights debugging, guys jumping out of chairs yelling "let's do it!" The rest — the specs, the papers, the diagrams — it's the same thing, but dried up, dehydrated, without the life.

Anyway. If you're starting, read "On Dreaming in Code" on the blog. Then "A portentous reunion." If you don't like it, whatever. If you do, you've been warned: in six months you'll know the difference between a BMC and a hardware root of trust, and you'll think that's normal.


