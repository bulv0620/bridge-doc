---
layout: doc
title: Downloader
---

# ⬇️ Downloader

## Feature Screenshot

![Share Hub](http://bucket.bulv.cc/bridge/downlader.png)

## Download Control Bar

You can click the `+` button in the control bar to create a download task. This functionality is powered by aria2 integrated within the application, supporting HTTP(S), FTP, SFTP, BitTorrent, and Metalink.

> For detailed information about aria2: [Github Page](https://github.com/aria2/aria2)

After selecting a task, you can perform corresponding actions such as **Start**, **Pause**, **Stop**, and **Delete**.

## Download Settings

You can configure various parameters for the aria2 downloader. The currently available configurable parameters are as follows:

- **Download Directory** - The directory where downloads are saved
- **Max Concurrent Downloads** - The maximum number of simultaneous download tasks
- **Connections per Task** - The number of connections per task
- **Max Connections per Server** - The maximum number of connections to one server
- **Download Speed Limit (bytes)** - The speed limit for downloads (in bytes)
- **Upload Speed Limit (bytes)** - The speed limit for uploads (in bytes)
- **Enable DHT** - Enable DHT (Distributed Hash Table)
- **BT Tracker List** - The list of BT Trackers

> Visit the aria2 configuration documentation for details: [aria2 document](https://aria2.github.io/manual/en/html/index.html)

Click **Save** after configuring the settings.

At the bottom, there is also a **Fetch Latest Tracker** feature. Clicking it will automatically retrieve the latest BT Trackers.

There is one special setting: **Enable BT watcher**

When enabled, the software will automatically activate and open the "Add Download Task" dialog when you copy a BT download link.

## Task List

The feature provides a filterable task list with the following options:

- `All`
- `Downloading`
- `Waiting`
- `Completed`

For each task, you can right-click to open a context menu. Options in the menu will be automatically enabled or disabled based on the current task status.

## Download Status

The bottom of the page displays the current network status for upload and download speeds.