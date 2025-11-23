---
layout: doc
title: Share Hub
---

# ✈️ Share Hub

## Feature Screenshot

![Share Hub](http://bucket.bulv.cc/bridge/share-hub.png)

## Enable Feature

This feature relies on UDP-based LAN device discovery and HTTP file server. The Bridge application has this feature disabled by default. Simply click `Enable Sharing` at the top to start the service.

The feature maintains all online devices on the local network through UDP broadcasting and receiving device information, and fetches each device's sharing list via HTTP requests.

> Note: The UDP and HTTP services use port 9520. If this port is occupied on your device or blocked by a firewall, it will affect the normal use of this feature.

## Upload Files

Click or drag files to the file upload area to automatically open the shared file configuration dialog. The dialog will display the selected file's name and local path. You need to configure:

- `Consumption Count`: The number of times this shared file can be downloaded;
- `Expiration Time`: The expiration time for this shared file, with options: `1 min`, `5 min`, `15 min`, `30 min`, `1 h`.

After the file is uploaded, you can see the file card in the list below. On the file card, you can view the expiration time, consumption count progress bar, and manually delete the shared file.

## Download Files

The right-side list displays all online devices on the local network and the file sharing list information for each device.

On the right side of each file card is the download button. Clicking the download button will navigate to the `Downloader` feature to start the download.
