---
title: "TMUX - My configurations"
date: 2021-01-11T13:08:43+05:30
tags: ["tmux"]
posttype: "Linux"
hidden: true
---
## What is TMUX?

TMUX is a short form for Terminal MUtipleXer. It allows you to switch simply divide up your terminal real estate into tiny pseudo-terminals running it own independent shells.

![TMUX Screenshot](tmux-ss-1.webp)

Features:

1.  **Terminal Sessions** - When you open/run tmux, a tmux session gets created. Each pane you create in the tmux screen gets added to this session. You can leave this session and return to it later, with its state preserved and all the shells (programs) running in that tmux continuing in the background. This is useful for switching seamlessly between projects, as I have one session per project.

2.  **Using TMUX on remote machines** - Since TMUX is a shell program, you can use it when SSH'd into a remote machine, allowing you to "multiplex" (open a bunch of shells) from a single SSH connection. If your SSH connection drops, you can SSH back and simply `attach` back to the session you were using before without worrying about your remote apps being stopped.


3.  **Terminal app independent** - As TMUX is a terminal multiplexer that runs as a shell app, you can use it in any terminal emulator and utilize its keybinds. This is especially useful if you use multiple terminal emulators for work and personal use.

4.  **Session sharing** - Sharing TMUX sessions to collaborate with a colleague in real time - You can share your tmux session with a colleague like sharing the terminal emulator screen. All they have to do is SSH into your machine and connect to your session.

5.  **Configurable** - You can also preconfigure sessions, windows, panes, and apps on the pane to your liking without needing to set it up every time.


## Install and Using TMUX

On Ubuntu/Debian distros, run `sudo apt install tmux` and confirm if prompted.

To run/start a tmux session, run `tmux`.

Check [this link](https://www.redhat.com/sysadmin/introduction-tmux-linux) as a guide for using tmux.

## My changes and additions to TMUX config

[Cheatsheet for Tmux](https://tmuxcheatsheet.com/)

While default keybinds work for most, I have configured them to work in tandem with my Vim configuration, making it easier to memorize. Additionally, I've themed them according to my liking.

![TMUX Screenshot](https://github.com/mnjm/github-media-repo/blob/main/dotfiles/tmux.jpg?raw=true)

You can find my tmux configuration file [here](https://github.com/mnjm/dotfiles/blob/main/.config/tmux/tmux.conf).

Some keybind changes:
- `<CTRL-a>` - TMUX prefix
- `<CTRL-a>c` - Clock mode
- `<CTRL-a>|` - Horizontal split window
- `<CTRL-a>-` - Vertical split window
- `<CTRL-a>t` - Creates new window
- `<ALT><Left>` - Go to Left window
- `<ALT><Right>` - Go to Right window
- `<CTRL><Left>`  `<CTRL><Right>` `<CTRL><Up>` and `<CTRL><Down>` - Move between panes (Check [here](https://github.com/christoomey/vim-tmux-navigator))
- `<CTRL-a>s` - Custom FZF based session selector
- `<CTRL-a>S` - Inbuilt session selector
- Copy mode `y` (yank) - Copy to clipboard
- Copy mode mouse selection - Copy to selection clipboard
- `<CTRL-a>C` - reload config
- `F12` - Toggle keybinds - For nested tmux usecase.

You can sideload config file using `tmux -f <config file> ....`

### Custom Session Create / Select using FZF
I find the built-in session selector rather limiting in terms of functionality. Therefore, I've wrote my own session selector based on Fzf. It enables easy switching between TMUX sessions within a few keystrokes and can also spin up a new session if one is not found.

{{< codeimport url="https://raw.githubusercontent.com/mnjm/dotfiles/dda98c9178d59f49c8b26fcd39227f6691b1b50d/.local/bin/tmuxn" type="bash" >}}

To use it, save it somewhere accessible to tmux with exec permissions and bind it to a key (with prefix) using
```bash
bind <key> display-popup -h 90% -w 90% -E '<script location>'
```
## Resources

- [TMUX github](https://github.com/tmux/tmux)
- [Man page](https://www.man7.org/linux/man-pages/man1/tmux.1.html)
- [Guide](https://www.redhat.com/sysadmin/introduction-tmux-linux)
- [My config](https://github.com/mnjm/dotfiles/blob/main/.config/tmux/tmux.conf)
- [Cheatsheet](https://tmuxcheatsheet.com/)
- [Status bar modifications](https://arcolinux.com/everything-you-need-to-know-about-tmux-status-bar/)
