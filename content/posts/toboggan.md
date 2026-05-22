---

title: "Toboggan — slides everywhere"
date: 2026-05-29T00:00:00Z
draft: true
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

## Limitations and roadmap

Toboggan favors lightweight workflows over WYSIWYG editing—if you need a heavy GUI editor (Keynote/PowerPoint style), this is not the goal. For developers and users who prefer source-first workflows (Markdown/TOML), Toboggan fits well.

Possible improvements: additional CSS themes, live annotation support, streaming integrations, or a native desktop app for easier distribution.

## Contributing

If you'd like to contribute:

- Open issues and PRs in the repository.
- Help create slide templates or alternative client implementations.

---

Write your short description at the top if you want me to rephrase it or integrate it into the introduction; I can also generate thumbnail images or a homepage excerpt.
