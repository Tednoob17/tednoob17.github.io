---
title: "Registering AppImage as Desktop App in Ubuntu / Mint"
date: 2023-01-21T20:56:54+05:30
tags: ["appimage", "mint"]
posttype: "Linux"
hidden: true
---

AppImage is a new packaging format that eliminates the need for building applications specific to distributions like Debian's .deb or OpenSUSE/Fedora's .rpm. AppImage can be used on any distribution, thats what makes it attractive to developers as they don't have to build multiple packages tailored to different distributions.

AppImage is not exactly an install package; it's the app itself bundled together with the dependencies it needs. To "install" the AppImage package, all you have to do is make it executable and run it.

But there is one slight inconvenience with AppImage packages: they don't work with desktop app launchers. To run the app, you have to remember where you have the AppImage file stored, navigate to it, and run it from there.

## "Installation" - Registering the desktop entry
Here's a way to manually add a desktop entry for these AppImages so that they can be launched from the app launcher:

1. Download the AppImage file, if you haven't already.
2. Store it somewhere memorable. I store it in ~/.local/bin, but you can choose any other place.
3. Navigate to where you've downloaded the file in the shell. Make it executable using `chmod +x <appimage>`.
4. Extract the AppImage using `<appimage> --appimage-extract`. This should create a `squashfs-root` directory where the AppImage file is located.
5. CD inside the `squashfs-root`. There you should find a file with a `.desktop` extension.
    - Open the file with a text editor and Replace `Exec=AppRun...` line with `Exec=<appimage-path>...`, where `<appimage-path>` is the full path of the AppImage file.

{{< callout >}}
Make sure to retain all trailing flags. For example, Obsidian's desktop file had `Exec=AppRun --no-sandbox %U`. I replaced it with `Exec=/home/mnjm/.local/bin/Obsidian.appimage --no-sandbox %U`
{{< /callout >}}

6. Save the file and move it to `~/.local/share/applications/`
7. Remove the `squashfs-root` folder

{{< callout check >}}
Thats it. Now, App launcher will recognize and list the app. And AppImage should get run when started from the launcher
{{< /callout >}}

## "Uninstallation" - Removing the App.

1. Navigate to `~/.local/share/applications/` and remove the `.desktop` file.
2. Remove the AppImage file from where it was stored.

## Optional - Add icons to the desktop entry.

1. After extracting the AppImage, navigate to `usr/share/icons` inside the `squashfs-root` folder
2. Copy the icons to `~/.local/share/icons/` folder using
    - `cp -rv hicolor ~/.local/share/icons --parents`

To remove these icons, from `~/.local/share/icons`, run the below and confirm the icons that need to be removed:
```bash
find . -name 'obsidian.*' -exec rm -vi {} \;
```
Replace `obsidian` with the appname
