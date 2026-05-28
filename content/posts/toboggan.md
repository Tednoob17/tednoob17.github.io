---

title: "Toboggan — slides everywhere"
date: 2026-05-29T00:00:00Z
draft: false
description: "Modern, multi-platform slides system written in Rust."
tags: [toboggan, slides, rust]
---

Replace the short description below with your own line if you prefer a more personal phrasing.

Short description: Toboggan is a modern, multi-platform slides system built in Rust.

---

## Why Toboggan

I prefer presentations that are easy to write and flexible to present. Toboggan was created to meet that need: write your slides in Markdown (or TOML if you prefer structured files), start a small WebSocket server, and control the presentation from any device. Rust provides a fast, portable foundation—useful when you want a reliable tool without heavy dependencies.

## What it is (brief)

Toboggan offers:

- Authoring: write slides in Markdown or TOML.
- Distribution: a lightweight server that serves slides and accepts clients over WebSocket.
- Presentation: connect from a browser, terminal client, desktop app, or mobile device and control progress in real time.

The flow is intentionally simple: author → server → client(s). That makes remote demos, collaborative workshops and multi-screen setups easy.

## Design principles

- Minimalism: few layers between the source file and final rendering.
- Interoperability: many client types (web, TUI, native) can communicate via WebSocket.
- Performance and safety: Rust enables a compact, fast binary with a reduced attack surface.

## Quick example

1. Create `slides.md`:

	# Slide 1

	- point 1

	# Slide 2

2. Start the Toboggan server:

	toboggan serve slides.md

3. Open a browser at `http://localhost:PORT` or connect a third-party client.

Navigation commands (next/previous) are sent over WebSocket, so you can control the presentation from a second device.

## Use cases

- Conferences and meetups: synchronize multiple screens or show a presenter view separately.
- Classes and workshops: let participants connect to follow or control the presentation.
- Quick demos: share a local link for code reviews or technical walkthroughs.

## Background and origin

The origin of Toboggan is practical and a bit serendipitous. It was mentioned during the presentation "Access Granted 01.4 - FCSC Challenge Retex : Shrimp-Say !" by BitK (video: https://www.youtube.com/watch?v=E_SVWmd5-aA). BitK (https://bi.tk) and Kevin Mizu (https://mizu.re) worked on FCSC challenges together. During the Q&A (see around 00:16:10), BitK explained that his slides were home‑made and named the tool "Toboggan".

<div style="max-width:100%;margin:16px 0;text-align:center;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/E_SVWmd5-aA" title="Access Granted 01.4 - FCSC Challenge Retex : Shrimp-Say !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;max-width:720px;height:405px;border:0;">
	</iframe>
</div>

After searching, the project repository was found at https://github.com/ilaborie/toboggan (author: Igor Laborie, @ilaborie). The repository appears to be an educational side project for generating slides rather than a fully polished commercial product. Building the project can be resource intensive — some builds may require a large amount of RAM (I experienced builds that used more than 12 GB).

If you want to learn more about the wider context, search for FCSC (the challenge series mentioned in the talk) and watch the video linked above for the original demonstration.

## Limitations and roadmap

Toboggan favors lightweight workflows over WYSIWYG editing—if you need a heavy GUI editor (Keynote/PowerPoint style), this is not the goal. For developers and users who prefer source-first workflows (Markdown/TOML), Toboggan fits well.

Possible improvements: additional CSS themes, live annotation support, streaming integrations, or a native desktop app for easier distribution.

## Contributing

If you'd like to contribute:

- Open issues and PRs in the repository.
- Help create slide templates or alternative client implementations.

---

Write your short description at the top if you want me to rephrase it or integrate it into the introduction; I can also generate thumbnail images or a homepage excerpt.
