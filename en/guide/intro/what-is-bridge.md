---
layout: doc
title: What is Bridge?
---

# 🌟 What is Bridge

**Bridge** is a cross-platform file synchronization tool built with **Electron + Vite + Vue3**.

> ⚡ Making file backup, sharing, and downloading as intuitive and effortless as breathing.

## ✨ Core Features

### 📁 File Comparison & Synchronization

Automatically generates a differential file tree and performs synchronization after selecting source and target directories.

Offers three flexible synchronization strategies:

- **Mirror Sync**: Target directory becomes an exact replica of the source directory structure.
- **Incremental Sync**: Overwrites identical files, copies new files, and retains old files existing only in the target directory.
- **Bidirectional Sync**: Copies newer files in both directions; conflicting files are ignored by default.

### 🌐 LAN File Sharing

Automatically discovers devices on the same network via UDP broadcast.

Securely share local files—receivers download using a unique file ID through the built-in HTTP service, without exposing the actual file path.

### ⬇️ Integrated Download Management

Built-in **Aria2** download engine with comprehensive support for HTTP, FTP, BitTorrent, and other protocols.

Unified management for both internet downloads and LAN shared transfers, with an intuitive and clear interface.

## 🎯 Design Philosophy

Bridge aims to solve pain points in cross-device file management:

- **Simple & Easy to Use**: No complex configuration required, works out of the box
- **Efficient & Smart**: Intelligent differential comparison avoids unnecessary data transfer
- **Cross-Platform Consistency**: Provides a unified user experience across different operating systems

## 📦 Tech Stack

- **Frontend**: Vue 3 + Vite + TypeScript
- **Backend/Runtime**: Electron + Node.js
- **Network Communication**: UDP broadcast discovery + HTTP transfer
- **Download Engine**: Aria2 RPC integration
