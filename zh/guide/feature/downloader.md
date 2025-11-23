---
layout: doc
title: 下载器
---

# ⬇️ 下载器

## 功能截图

![Share Hub](http://bucket.bulv.cc/bridge/downlader.png)



## 下载操作栏

你可以在操作栏点击`+`按钮创建一个下载任务，功能由应用内部集成的aria2实现，支持HTTP(S), FTP, SFTP, BitTorrent, Metalink。

> aria2详细内容: [Github Page](https://github.com/aria2/aria2)

当选中任务后，可进行相应的开始、暂停、结束、删除操作。



## 下载设置

你可以对aria2下载参数进行一些配置，目前提供的可配置参数如下：

- Download Directory - 下载目录
- Max Concurrent Downloads - 最大同时下载任务数
- Connections per Task - 每个任务连接数
- Max Connections per Server - 每服务器最大连接数
- Download Speed Limit (bytes) - 下载速度限制（字节）
- Upload Speed Limit (bytes) - 上传速度限制（字节）
- Enable DHT - 启用 DHT
- BT Tracker List - BT Tracker 列表

> 详细内容访问aria2配置文档了解：[aria2 document](https://aria2.github.io/manual/en/html/index.html)

配置完成后点击保存即可

在底部还有`Fetch Latest Tracker(获取最新 Tracker)`功能，点击后会自动拉取最新的Bt Tracker。

设置中还有一项特殊设置：`Enable BT watcher(启用BT链接监听)`

开启监听后，当你复制了一条BT下载链接，软件将自动激活并打开添加下载任务弹窗。



## 任务列表

功能提供了可过滤的任务列表选项：

- `All(全部)`
- `Downloading(正在下载)`
- `Waiting(等待中)`
- `Completed(已完成)`

对每个任务可通过右键打开操作菜单，根据当前的任务状态会自动禁用、启用相应的选项。



## 下载状态

页面底部提供了当前上传下载网络状态信息

