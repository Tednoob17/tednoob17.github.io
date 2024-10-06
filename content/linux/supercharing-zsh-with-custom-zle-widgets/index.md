---
title: "Supercharing Zsh With Custom Zle Widgets"
date: 2024-02-01T20:56:54+05:30
tags: ["zsh", "zle"]
posttype: "Linux"
hidden: true
---

If you've clicked on this, you probably work with the command-line sometimes and you might even already use zsh. One major advantage of using the command-line is its ability to hack and automate mundane tasks.

One such mundane task is the vanilla way of navigating directories (using `cd`), which can be tedious and boring. In the pursuit of finding a better way to navigate, I discovered FZF, more specifically `fzf-cd-widget`, which is added as a keybinding (Alt+C) to zsh when the FZF zsh plugin is installed. This was nice as it provided the ability to navigate different levels of child directories with a few keystrokes.

After integrating `fzf-cd-widget` into my workflow, one thing that was lacking was the ability to `cd` to previously visited directories. For that, I had a function named `cdprev()` that uses FZF to search through the `pushd` directory stack and `cd` to the selected entry.

```bash
cdprev() {
    local dir="$(dirs -p | fzf --no-multi)"
    [[ ! -z $dir ]] && cd $dir
}
```

Note that for this to work, the zsh's `auto_pushd` option has to be enabled in `.zshrc`. The second line ensures that there aren't any duplicates in the pushd stack.

```bash
setopt auto_pushd               # Use pushd and popd instead of cd
setopt pushd_ignore_dups        # Ignore duplicates in the pushd stack
```

The`fzf-cd-widget` widget had a couple of more perks though:

1. It's bound to a keystroke (Alt-C).
2. It can restore the prompt/command-line after switching directories.

**Restoring the prompt:** Let's say you were typing a fancy command and midway remembered that you had to run this command from a different directory, not PWD. All you have to do is hit Alt-C and select the directory that you want to switch to. `fzf-cd-widget` will switch to that directory and restore the fancy command so that you can continue without retyping from scratch.

So, I started looking for a way to replicate the same with `cdprev()`, which led to discovering Zsh Line Editor (ZLE).

## What is ZLE?

Zsh Line Editor (ZLE) is what you use to enter commands when using the zsh shell interactively. As its name suggests, it's a Line Editor that gets loaded up when zsh is opened interactively, like in a tty/terminal, through which you enter and edit your commands.

One thing about ZLE is that it can execute commands (referred to as widgets) when a specific keystroke is registered. The FZF plugin uses this (ZLE) to bind `fzf-cd-widget`. This means that I can bind `cdprev` to a specific keystroke too.

ZLE uses keymaps with some mimicking Vim and Emacs modes, but I'll focus on the global/default keymap as I prefer the [edit-command-line](https://unix.stackexchange.com/a/34251) widget for opening the command line in an actual editor.

## Binding Keystroke to a Widget

ZLE has a built-in command named `bindkey` used for registering a keystroke to a widget. All available widgets can be listed using `zle -la`. For example,
```bash
bindkey ^g kill-whole-line
```
This binds `<CTRL-G>` to the `kill-whole-line` widget (which clears a line in ZLE).
- `CTRL` key can be represented with `^`. For example, `^l` = `<CTRL-L>`.
- `ALT` key can be represented with `\e`. For example, `\el` = `<ALT-L>`.

`bindkey <keystroke>` can be used to look up the widget assigned to the keystroke.

`bindkey -r <keystroke>` can be used to delete a keystroke.

💡 Here's an idea for a prank: slip the below line into someone's `.zshrc`:

```bash
bindkey -r 'a'
```
This will make it so that they won't be able to type the letter 'a' in their command-line 🙃.

## Creating a Custom ZLE Widget

We can create a custom widget simply by writing a zsh function and declaring that as a widget using `zle -N <zsh-function>`. Now lets modify cdprev so that it can restore prompt.

```bash
function __cdprev() {
    setopt localoptions pipefail no_aliases 2> /dev/null
    # skip the first entry as it will be PWD. and FZF though the remaing entries
    dir="$(dirs -p | tail -n +2 | fzf-tmux -p 85% --reverse --no-multi)"
    if [[ -z $dir ]]; then
        zle redisplay
        return 0
    fi
    # save the command line so it can be update after cd
    zle push-line
    # Modify the buffer with cd
    dir=$(echo $dir | sed 's/ /\\ /g') # escape space dir if any
    BUFFER="builtin cd -- $dir"
    # exec BUFFER
    zle accept-line
    local ret=$?
    unset dir
    # reset to saved line, this will restore from `push-line`
    zle reset-prompt
    return $ret
}
```

To grasp what's happening, let me break down a few key things.

### ZLE Parameters

ZLE provides some special [parameters](https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html#User_002dDefined-Widgets) that can be accessed within or modified within a widget. These parameters, in turn, can override the command-line. `BUFFER` is one such parameter that can be used to read/update the entire command-line.

### ZLE builtin widgets

ZLE has a rich set of built-in [widgets](https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html#Miscellaneous) that can be called using `zle <widget-name>`. The ones that are used in `cdprev()` widget are:

1. `push-line` - This pushes the current `BUFFER` into a buffer stack, so that when ZLE resets, the top item in this buffer will be popped and loaded into the buffer.
2. `accept-line` - Executes the current `BUFFER`.
3. `reset-prompt` - This forces ZLE to reset BUFFER, popping the top one from the buffer stack and populating it in the Command Line.
4. `redisplay` - Redisplays the editing buffer.

### Misc

The first line `setopt localoptions ...` is used to set zsh options local to the function. `pipefail` handles status returns of the piped commands better and `no_aliases` makes sure that commands aren't replaced with any aliases defined outside the function.

I like to prepend '__' to the widget function name to self-mark it as a special function rather than a normal function.

### Registering `cdprev` as a custom widget

Add the below lines into your `.zshrc` to register `__cdprev()` as a widget.

```bash
zle -N __cdprev
bindkey '^\' __cdprev
```
I have chosen `<CTRL-\>` (`^\`) keystroke for `cdprev`. You can choose the one that suits you.

[Here](https://github.com/mnjm/dotfiles/blob/main/.config/zsh/widgets.zsh) you can find [lf](https://github.com/gokcehan/lf) cd and file picker widgets I wrote using ZLE.

## References

- Manpages for - zshzle, zshbuiltins, zshoptions and zshmodules
- FZF [key-bindings.zsh](https://github.com/junegunn/fzf/blob/master/shell/key-bindings.zsh)
- [Sourceforge guide](https://zsh.sourceforge.io/Guide/zshguide04.html)
- [Serge Gebhardt's post](https://sgeb.io/posts/zsh-zle-custom-widgets/)
- [thevaluable.dev's post](https://thevaluable.dev/zsh-line-editor-configuration-mouseless/)
