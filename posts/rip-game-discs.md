---
id: "rip-game-discs"
title: "Ripping disc-based games for backup and emulation in 2022"
date: "2022-10-17"
---

## Sony PlayStation

PlayStation emulators typically require the PlayStation disc image to be in a bin/cue format. The `.bin` file contains the binary content of the disc and the `.cue` contains directions for loading the data for the hardware reading the disc. In our case the hardware is virtualized within the emulator.

### Prerequisites

There's only a few tools we need for ripping a PSX disc: a CD drive to read the disc and a CLI called `cdrdao`.

#### CD drive

The disc contents will be read through a physical CD drive. I've tested these instructions using an [LG Ultra-Slim Portable DVD Burner](https://a.co/d/3YAR4WD), but most general purpose CD drives should work.

#### Software

We'll be using [cdrdao](https://cdrdao.sourceforge.net/) for ripping the discs, a CLI for reading and writing discs in a "disk-at-once" mode. You can install `cdrdao` with your favorite package manager. For reference, I have installed the program on both macOS and Ubuntu.

##### macOS

`brew install cdrdao`

##### Ubuntu

`sudo apt install cdrdao`

### Ripping a disc to bin & cue files

First you will need to insert your PSX disc into your CD drive. Once it has spun up and mounted the disc to your filesystem we will begin by unmounting it. This is slightly different based on your operating system.

```
# Linux (Ubuntu)
$ df
$ sudo umount **DISK_LOCATION**

# macOS
$ diskutil list
$ diskutil unmountDisk **DISK_LOCATION**
```

The `**DISK_LOCATION**` parameter should be replaced with the location of your disk drive per the results of the list command. On my installation of Ubuntu the CD was mounted to `/dev/sr0`.

Now we can begin reading and dumping the contents of the disc to a file:

```
cdrdao read-cd --read-raw --datafile GAMENAME.bin --driver generic-mmc GAMENAME.toc
```

The `GAMENAME` value can be whatever value you decide, so preferably the name of the game you are ripping.

You'll begin to see some results in the console as the disc is ripped. The length of the process depends on the read speed of your disk drive, but for reference this only took a few minutes with my USB DVD drive.

If all goes well you will see two files in the directory where you ran the command: `GAMENAME.bin` and `GAMENAME.toc`. The `.toc` file is very similar to the `.cue` file we need as it describes the contents of the disc. `cdrdao` installs with a useful tool for this conversion called `toc2cue`. Running the following command will generate the `.cue` file needed:

`toc2cue GAMENAME.toc GAMENAME.cue`

Now you should be able to load the game in your PSX emulator of choice by loading its `.cue` file.

### Troubleshooting

#### L-EC errors

If your disc is damaged, or even just has smudges on it, the ripping process may appear to go very slowly and not finish correctly. If you are seeing errors such as `WARNING: Found L-EC error at sector 814 - ignored` you may need to wipe your disc clean or try to repair any damages to it.
