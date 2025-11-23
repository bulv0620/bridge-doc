---
layout: doc
title: File Sync
---

# 📁 File Sync

## Feature Screenshot

![File Sync](http://bucket.bulv.cc/bridge/file-sync.png)

## Sync Sessions

Bridge allows creating multiple sync sessions and supports parallel processing of multiple sessions (too many parallel tasks may cause high resource usage and software lag).

Click the `+` icon to create a new session, click `X` to close a session, and double-click the session tab to rename the session.

Created sessions are cached and will be automatically restored after the application restarts, eliminating the need to reconfigure each time.

## Sync Configuration

You only need to select the sync source, sync target, and determine the sync strategy to start comparison and synchronization.

**Supported sync sources:**

- **Local Directory**:
  - Simply select a local path
- **FTP**:
  - Fill in connection parameters: `Host`, `Port`, `Username`, `Password`
  - Select the path
- **S3**:
  - Fill in connection parameters: `Region`, `Bucket Name`, `Access Key ID`, `Secret Access Key`, `Custom Endpoint`
  - Select the path

**Supported sync strategies:**

- **Mirror Sync**: The target directory completely replicates the source directory structure
- **Incremental Sync**: Overwrite identical files, copy new files, keep old files on the target side
- **Bidirectional Sync**: Bidirectional copy updates, conflicting files are ignored by default (can be handled manually in the comparison result tree)

## Sync Control Bar

The control bar contains a series of buttons with fool-proof design. Based on the current state, the program will automatically disable/enable the corresponding operation buttons to reduce the learning curve and prevent unexpected errors.

The buttons include:

- `Compare`: Start the comparison operation after selecting the sync source and target
- `Stop`: Stop the comparison operation at any time and get the current comparison results
- `Sync`: Start synchronization after obtaining the comparison results
- `Pause`: Pause the synchronization operation, click Sync again to resume

On the right side of the control bar, there's an additional button: `Ignored Folders`

Clicking this button opens the ignored folders management window. You can maintain folders to be ignored during comparison. After confirmation, all folders with the same name in the file tree will be ignored in subsequent comparisons.

## Comparison Result Tree

Comparison results are displayed in a file tree table format. Each row shows source and target information, with color coding to visually distinguish the operations to be performed on differences:

- **Green**: Files to be kept
- **Red**: Files to be deleted
- **Gray**: Ignored files

After the comparison is complete, the program automatically determines the fate of source/target files based on the three sync strategies. However, you can still freely decide the outcome for each file.

Click the ⬅️ and ➡️ buttons in the `Resolution` column to intuitively and quickly determine file direction.

## Sync Status Information

The bottom of the page provides sync status information for the current session:

- Transferred size / Total transfer size
- Transferred files / Total files
- Progress bar
- Percentage

After the comparison is complete, the total transfer size and total number of files to transfer are displayed, and the transfer progress is updated in real time during synchronization.
