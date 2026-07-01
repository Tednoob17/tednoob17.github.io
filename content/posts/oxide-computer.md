---
title: "Oxide and Friends: Things Worth Recovering"
date: 2026-06-20T00:00:00Z
draft: false
description: "On Oxide Computer, a dying tradition of engineering, and a podcast that documents it."
tags: [oxide, bryan cantrill, blog, podcast, review]
lang: en
---

In September 1993, [Bryan Cantrill](https://en.wikipedia.org/wiki/Bryan_Cantrill) was a freshman at Brown University. He wrote a two-player Tetris game on a floppy disk and called it BattleTris. 
Late-night tournaments in the dorms. Rivalries between graduating classes. Then the terminals got replaced, the disk got lost, the game disappeared.

Thirty-three years later, a fan mailed him the disk, digitized.

He and [Adam Leventhal](https://en.wikipedia.org/wiki/Adam_Leventhal_(programmer)) used Claude to compile the C code on modern 64-bit Linux. Claude found a bug dormant for two decades -- `sizeof(int)` vs. `sizeof(unsigned long)`, identical under 32-bit, lethal under 64. Stack overflow, dormant since 1993. They fixed it. They played until 1 AM. His wife won her first game.

Everyone wrote the AI angle. What I keep thinking about is something smaller: someone kept the disk. Someone thought it was worth keeping.

---

I found the podcast because I lost data on an external drive. Not a lot -- just enough to send me searching for how *ZFS* actually works. I ended up watching an episode where Bryan and Adam sat down with [Jeff Bonwick](https://en.wikipedia.org/wiki/Jeff_Bonwick), the guy who wrote ZFS. Three hours later I hadn't fixed the drive. I still haven't.

![alt](/images/stc/oxide-and-friends.jpeg)

What I didn't expect was how much of it I simply didn't know existed.

[Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems)  was gone before I got into tech. [SPARC](https://fr.wikipedia.org/wiki/Architecture_SPARC) was a footnote in a Wikipedia article I'd skimmed once. SGI I'd vaguely heard of. DEC -- Digital Equipment Corporation, at one point the second largest computer company in the world -- I'd never heard of at all. There's an episode where Tom Lyon does [a requiem for SPARC](https://youtu.be/79NNXn5Kr90), the processor architecture Sun built. It's not just a history lesson. It's the first time I actually understood what kind of thing gets lost when the industry standardizes on one answer. Not just a chip. A whole approach to what a computer could be.

Nobody tells you the field has this much past. You start, you learn git, you deploy on AWS, you get comfortable with Docker and Kubernetes, and somewhere in there you're supposed to absorb forty years of context that nobody taught you. Bryan's generation has it. Adam's generation has it. It's in their heads, and they're using it every time they make a decision, and if nobody writes it down or talks about it, it just goes away.

The podcast is partly just them talking. But it ends up being something closer to an oral history.

There's an episode on the *[Silicon Cowboys](https://youtu.be/faY7kWHQuNE)* -- Compaq reverse-engineering the IBM PC BIOS in a Houston hotel room in 1982. There's one on *[NeXT and Objective-C](https://youtu.be/2H9XQBdLB0Y)*, the years Jobs spent building something almost nobody used, that became the DNA of every Apple product today. There's a deep dive on the *[Barracuda 7200.11](https://youtu.be/qisoAIx8EE8)*, a consumer hard drive that bricked itself silently because of broken firmware. Not sabotage -- just a team that didn't have enough process around what happens when firmware fails. They spend a full hour on that. A hard drive from 2008.

And it goes way outside the tech industry too. [Theranos](https://en.wikipedia.org/wiki/Theranos) -- not the [Elizabeth Holmes](https://en.wikipedia.org/wiki/Elizabeth_Holmes) trial everyone's already seen, but the actual chemistry. Why the blood tests were physically impossible, what minimum sample volume means in practice, why someone who actually understood the biology would have known immediately. BlackBerry's collapse explained by people who watched it happen in real time and can tell you exactly at which meeting the company decided to protect its enterprise clients instead of chasing consumers, and why that was the last decision they made that mattered. The 2024 CrowdStrike outage -- 8.5 million Windows machines, same bad kernel driver, same blue screen, same morning -- and what it tells you about the architecture decisions that made that possible at that scale.

It's a lot. I listened for a long time before I felt like I had real context for any of it.

---

There's a book I'll never buy called *Dreaming in Code*.

Scott Rosenberg embedded himself with Chandler -- a personal information manager, funded by the Open Source Applications Foundation, founded by Mitch Kapor of **Lotus 1-2-3**. The project drifted for years. Nothing shipped. In 2007 Bryan wrote a review of the book, and there's a question in it that I've turned over probably more than anything else I've read about software:

> Did Rosenberg pick a doomed project because he was convinced at the outset that developing software was impossible, and he wanted to be sure to write about a project that wouldn't hang the jury? Or did his views of the impossibility of developing software come about as a result of his being trapped on such a reeking vessel ?

He compares Chandler to the *Mobro 4000* -- a garbage barge that wandered the American coast for months in 1987 because no state would accept its cargo. Rosenberg got on a garbage barge and decided the whole ocean smelled the same.

Joel Spolsky wrote something similar around the same time, less poetic but more specific: the specs used adjectives instead of descriptions, the "No Silos" concept asked users to abandon mental models they'd had for twenty years, and volunteer open source doesn't work on projects with no existing users. Three different failure modes, none of them mysterious. All of them avoidable.

---

Bryan started at Sun in the mid-90s because Sun was one of the last places building hardware and software as a single thing, and he wanted to work on a real kernel in a real computer company. After DTrace, he and Mike Shapiro went to Sun's CTO [Greg Papadopoulos](https://en.wikipedia.org/wiki/Greg_Papadopoulos) with an idea for a NAS appliance -- hardware *and* software, built together from the start. *Papadopoulos* jumped out of his chair.

They called it **Fishworks**. It's an acronym Mike Shapiro invented -- **Fully Integrated Software and Hardware** -- but also a Simpsons reference. In "The War of the Simpsons," Homer buys a boat that immediately sinks. Building hardware when you're a software company. Didn't stop them.

The flagship product answered "what am I serving and to whom ?" through a **DTrace** analytics interface. A veteran sysadmin described it as "the one GUI that I actually want to use." That line -- from someone who hates GUIs -- tells you everything about what it means to solve a problem completely instead of partially.

Sun is gone. `blogs.sun.com`, where engineers were actively encouraged to write publicly about their work -- not just allowed, encouraged -- is gone. The writing that existed there, the kind that explains what was actually built and why and what broke, doesn't exist anywhere else.



In May 2025, Bryan wrote an obituary for USENIX ATC, the conference where he'd presented DTrace in 2004. He first went in 1994 as a student. Researchers, engineers, students, everyone in the same room, talking about real problems. The New York Times covered DTrace when it appeared there. Cancelled in 2025. His argument: open source made academic publication obsolete for spreading technique, conferences became paper-count factories, industry left.

I don't fully agree -- Rust conferences still feel like the old thing, mostly. But I understand what he's mourning.

---

[Oxide Computer](https://oxide.computer) is what [Bryan Cantrill](https://bcantrill.dtrace.org/about) and [Steve Tuck](https://x.com/sdtuck), [Jessie Frazelle](https://blog.jessfraz.com/) and about sixty engineers built in response to all of that.

The product is a rack-scale computer -- *server*, *firmware*, *hypervisor*, *control plane* -- as one integrated thing. Not software you license to run on someone else's hardware. The actual machine. For companies that want cloud infrastructure inside their own datacenter, air-gapped, without handing their data to a provider. The Sun DNA is obvious: they dig into BMCs and root-of-trust chips that most cloud vendors don't talk about. They treat firmware like software because it is.  

![alt](/images/stc/oxide-site.png)

Same salary scale from intern to CTO. No individual negotiation. No annual performance review. Demo Friday every week -- engineers show what they built, even if it's small. [Cliff Biffle](https://cliffle.com/), who wrote their [Hubris microkernel](https://hubris.oxide.computer/), said the culture rewards "openness, curiosity, and communication" and discourages "defensiveness, empire-building, and gatekeeping." They wrote it down. You write things down when you know they're fragile.

The hiring process Bryan documented at Joyent -- code sample, writing sample, analysis, then eight written questions about what you've built, what you regret, who shaped you, before any in-person interview -- starts its debriefs with the "Do not hire" positions. Doubts first. One is enough to stop the process, especially on values. He calls tech quizzes "spelling bees for adults." I think he's right. The whole thing is designed on the assumption that you can't fake who you are in writing the same way you can on a whiteboard.

---

At every new episodes i looking at all  YouTube thumbnails from the podcast.

The visual language is somewhere between a 90s Usenet thread and a Simpsons 
episode. Dead tech mourned as memes — a tombstone for a discontinued Intel
memory product, a Theranos diagram used as a cautionary prop. In-jokes that assume you already know the context: a bingo card with the company name on it, a recurring bit with a cartoon guy at a counter talking to a robot that apparently never got an explanation. Hardware that looks like it's mid-debug at 2am rather than staged for a photo shoot. And then completely unrelated imagery —
Renaissance paintings, parrots, Dalí, things on fire — that seem chosen beca
use someone thought they were funny that week.    

The thumbnail has often nothing to do with the episode. It's just what they felt like that week.

---

I still haven't fixed the drive.

I tried reading a software architecture book last month. Thirty pages. I kept thinking: where are the war stories, where did it break, where did someone stay up until 3 AM because they got something wrong? The book was technically correct. It was also completely bloodless.

The podcast did something to my calibration that I didn't notice until it was done. Bryan writes about Euclid's GCD algorithm still running fine after 2300 years -- software, done right, doesn't rot the way physical things do. The implication being that most software isn't done right, and most people in the industry know it, and almost nobody says it in public.

These people say it. That's not nothing.

Start with ["On Dreaming in Code"](https://bcantrill.dtrace.org/2007/11/11/ondreaming-in-code/) on the blog. Then ["A portentous reunion."](https://bcantrill.dtrace.org/2026/05/25/a-portentous-reunion/) If neither of those catches you, you're probably fine. If they do -- six months from now you'll know the difference between a BMC and a hardware root of trust, and you'll think that's a normal thing to know.
