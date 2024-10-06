---
title: "TMUX - Keybind fix for nested local and remote sessions"
date: 2022-12-15T14:09:39+05:30
tags: ["tmux"]
posttype: "Linux"
hidden: true
---
If you use tmux a lot especially for remote work, you can find yourself in a situation where your tmux sessions are nested. For example, you open a tmux session on the local machine, SSH into a remote machine, and attach/create another tmux session on the remote. In this scenario, you cannot send keybindings to the remote machine as they will be intercepted by your local tmux instance.

There are three ways to fix this:

## Fix 1: Press Prefix Twice

Press the prefix key (default: `C-b`) twice and then press the key bound to the prefix to send it to the remote session. The first prefix will be caught by the outer/local tmux, and the second prefix will be sent to the inner/remote tmux. While this method doesn't require any configuration, it can be cumbersome to press the prefix key twice. Note that this only works if you don't have any keys that are globally bound, i.e., not bound with the `prefix` key. (`bind-key -n`)

## Fix 2: Have Two Prefixes

Thats right, You can have two prefix keys: one for the outer/local tmux session and another for the inner/remote tmux session. For example:

```bash
set -g prefix C-a
bind-key -n C-b send-prefix
```
In this configuration, `C-a` is the prefix key for the outer/local session, and `C-b` is the prefix for the inner/remote session. While this solution works well, it still doesn't address globally bound keybindings.

## Fix 3: Toggle Key tables

Another solution is to toggle the prefix and root key tables on the local machine, allowing keybindings to be sent to the remote without interception by the local tmux server. You can add the following lines to your `tmux.conf` file:

```bash
bind -T root F12  \
    set prefix None \;\
    set key-table off \;\
    set @off_mode " Keybinds:OFF " \;\
    refresh-client -S

bind -T off F12 \
    set -u prefix \;\
    set -u key-table \;\
    set @off_mode "" \;\
    refresh-client -S
```

The above configuration uses `F12` to toggle prefix and key tables between active and disabled states. The state can be displayed using the `off_mode` variable in the status bar as shown below,

```bash
set -g status-right "#[fg=#1c1c1c,bg=#d70000]#{@off_mode}#[bg=#000000]" ....
```
![off-on-mode](./demo.gif)

## References

- [Fix 3 credit](https://www.freecodecamp.org/news/tmux-in-practice-local-and-nested-remote-tmux-sessions-4f7ba5db8795/)
- [My tmux.conf](https://github.com/mnjm/dotfiles/blob/main/.config/tmux/tmux.conf)
