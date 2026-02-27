---
layout: doc
title: File Sync
---

# 📁 File Sync

## Sync Sessions

Bridge allows you to create multiple sync sessions and supports running multiple sessions in parallel (too many concurrent tasks may cause high resource usage and application lag).

Click the `+` icon to create a new session. Click `X` to close a session. Double-click a session tab to rename it.

Created sessions are cached and will be automatically restored after restarting the application, so you don’t need to reconfigure them each time.



## Sync Configuration

You only need to select a **source**, a **destination**, and a **sync strategy** to start comparing and synchronizing.

### Supported Sync Sources

- **Local Directory**:
  - Simply select a local path.
- **FTP**:
  - Fill in the connection parameters: `Host`, `Port`, `Username`, `Password`
  - Select the path.
- **S3**:
  - Fill in the connection parameters: `Region`, `Bucket Name`, `Access Key ID`, `Secret Access Key`, `Custom Endpoint`
  - If a proxy connection is required, click **Advanced Options**, enable proxy, and enter the proxy URL.
  - Select the path.



### Supported Sync Strategies

- **Mirror Sync**: The destination directory fully mirrors the source directory structure.
- **Incremental Sync**: Overwrites identical files, copies new files, and retains old files on the destination.
- **Two-Way Sync**: Synchronizes updates in both directions. Conflicting files are ignored by default (can be handled manually in the comparison result tree).



## Sync Toolbar

The toolbar contains a series of buttons. The application automatically enables or disables buttons based on the current state to reduce the learning curve and prevent unexpected errors.

Available buttons:

- `Compare`: After selecting the source and destination, start the comparison process.
- `Stop`: During comparison, you can stop at any time and retrieve the current comparison results.
- `Sync`: After comparison is complete and results are available, start synchronization.
- `Pause`: During synchronization, you can pause at any time. Click `Sync` again to resume.

On the right side of the toolbar, there is also an `Ignored Folders` button.

Clicking it opens the ignore folder management window, where you can specify folders to exclude during comparison. After confirming, running comparison again will ignore all folders with the same names in the file tree.



## Comparison Result Tree

The comparison results are displayed in a file tree table. Each row shows both source and destination information, with color indicators to clearly represent the action that will be taken for each difference:

- **Green**: File will be retained.
- **Red**: File will be deleted.
- **Gray**: File will be ignored.

After comparison is complete, the program automatically determines file actions based on the selected sync strategy. However, you can still manually decide the outcome for each file.

Click the ⬅️ or ➡️ buttons in the `Resolution` column to quickly and intuitively control the file direction.



## Sync Status Information

The bottom of the page displays sync status information for the current session.

**Left side:**

- Transferred files / Total files
- Files moved to the right
- Files moved to the left
- Ignored files

**Right side:**

- Transferred size / Total size
- Progress bar

After comparison is complete, the total transfer size and total number of files will be displayed. During synchronization, the transferred progress is updated in real time.