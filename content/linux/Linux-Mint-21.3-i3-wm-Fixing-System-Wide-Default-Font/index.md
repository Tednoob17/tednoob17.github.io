---
title: "i3-wm on Linux Mint 21.3 + Fixing System Wide Default Font"
date: 2023-12-21T21:17:01+05:30
tags: ["i3wm", "mint"]
posttype: "Linux"
hidden: true
---

I was happy using Linux Mint's Cinnamon for some months now. Lately, However, There were some weird annoying crashes that forced reboots. Upon probing, I found out that Muffin, Cinnamon's window manager, was not cozy with an app that I needed for my VPN.

This propted to try out i3. I always wanted to try i3wm since it's minimal, distraction-free, hackable, and says no mundane mouse-driven window management  (+ I also had a weekend free for config time 🙃 ). So, I made the switch and configured everything to my liking.

However, I had one issue: the system font, used by some apps that relies on the "system" to provide fonts (Like Nemo file browser, chromium) looked bad. Fountd out that the font added to i3 config only affects i3 and not system wide (which makes sense, considering linux philosophy).

A bit of Googling led me to a solution [here](https://dev.to/thammachart/css-system-ui-underlying-font-family-in-linux-browsers-23o0). The Culprit was GTK 3.0 font, which set to "Sans 12" (why boggles my noggin). Changing it to "Ubuntu 10" and a quick restart (though I'm not sure if the restart was necessary) fixed it. Now, my desktop is minimal and amazing! 😃

## GTK 3.0 Config for reference

```bash
[Settings]
gtk-theme-name=Mint-L-Dark-Teal
gtk-icon-theme-name=Mint-Y-Yaru
gtk-font-name=Ubuntu 10
gtk-cursor-theme-size=0
gtk-toolbar-style=GTK_TOOLBAR_BOTH
gtk-toolbar-icon-size=GTK_ICON_SIZE_LARGE_TOOLBAR
gtk-button-images=1
gtk-menu-images=1
gtk-enable-event-sounds=1
gtk-enable-input-feedback-sounds=1
```
`File: ~/.config/gtk-3.0/settings.ini`

## Install: Latest i3wm on Linux Mint 21.3

At the time of writing this, Ubuntu and Linux Mint 21's repository's i3 package was lagging versions behind. So to get the up-to-date i3, I had to add a PPA

```sh
/usr/lib/apt/apt-helper download-file https://debian.sur5r.net/i3/pool/main/s/sur5r-keyring/sur5r-keyring_2024.03.04_all.deb keyring.deb SHA256:f9bb4340b5ce0ded29b7e014ee9ce788006e9bbfe31e96c09b2118ab91fca734
sudo apt install ./keyring.deb
echo "deb http://debian.sur5r.net/i3/ $(grep '^DISTRIB_CODENAME=' /etc/lsb-release | cut -f2 -d=) universe" | sudo tee /etc/apt/sources.list.d/sur5r-i3.list
sudo apt update
sudo apt install i3
```
Refer [here](https://i3wm.org/downloads/) for more info
