---
id: "rom-patching"
title: "Rom Patching"
subtitle: "Utilities for applying hacks, translations, and other patches to ROMs in Linux"
date: "2022-12-14"
---

A lot of the information and utilities on the web for applying patches to ROMs is out of date. If you're trying to apply a translation, hack, or modification as UPS files to a GameBoy Advance ROM you can follow this guide.

# Tools

If you're like me you probably stumbled onto the directions for patching while trying to build a [Mother 3 fan translated ROM](http://mother3.fobby.net/or/). These directions are out of date and the `mother3_linux` utility does not work in Ubuntu 22.04. You'll also see a suggestion to use [_byuu's tsukuyomi UPS utility_](https://www.romhacking.net/utilities/519/), but I was not able to get this to work either.

Instead, we're going to use [_upset_](https://www.romhacking.net/utilities/677/) which presents itself as a replacement for _Tsukuyomi_. Download the tool from ROMHacking and unzip its contents. The tool works by applying the UPS patch "which are binary diffs between two files". The source code is provided in the zip file if you are curious how this is working under the hood, or if you'd like to build it yourself.

# Using _upset_ to patch ROMs

1. Open your terminal and navigate to the directory with the contents of the `upset.zip` file.
2. Run `./upset` to bring up the _upset_ GUI.
3. Set the _Source file_ to the UPS patch you are going to apply.
4. Set _Target file_ to the ROM file you are patching.
5. Press _Ok_

If all goes well your ROM file should now have the UPS patch applied.
