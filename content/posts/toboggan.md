---

title: "Toboggan -- slides everywhere"
date: 2026-05-29T00:00:00Z
draft: false
description: "Modern, multi-platform slides system written in Rust."
tags: [toboggan, slides, rust]
---

Toboggan is a modern, multi-platform slides system built in Rust. Write your slides in Markdown, run a lightweight WebSocket server, and control the presentation from any device.

---

## Background and origin

Toboggan comes from the presentation [Access Granted 01.4 - FCSC Challenge Retex : Shrimp-Say !](https://www.youtube.com/watch?v=E_SVWmd5-aA) by BitK. BitK (https://bi.tk) and Kevin Mizu (https://mizu.re) worked together on FCSC challenges. In the Q&A, [around 00:16:10](https://youtu.be/E_SVWmd5-aA?t=970), BitK explains that his slides were homemade and names the tool "Toboggan".

<div style="max-width:100%;margin:16px 0;text-align:center;">
	<iframe width="560" height="315" src="https://www.youtube.com/embed/E_SVWmd5-aA?start=970" title="Access Granted 01.4 - FCSC Challenge Retex : Shrimp-Say !" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;max-width:720px;height:405px;border:0;">
	</iframe>
</div>

The project repository is at https://github.com/Tednoob17/toboggan (author: Tednoob17). It's an educational side project rather than a polished commercial product. Builds can be memory intensive.

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

```bash
# Slide 1

- point 1

# Slide 2
```

2. Start the Toboggan server:

```bash
toboggan serve slides.md
```

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

Toboggan is open to contributions. If you'd like to help:

- Open issues and pull requests on the [GitHub repository](https://github.com/Tednoob17/toboggan).
- Create slide templates or alternative client implementations (web, TUI, desktop, mobile).
- Improve documentation or test coverage.
- Help optimize build times and reduce memory usage.

The project is actively maintained and welcomes collaborators.

