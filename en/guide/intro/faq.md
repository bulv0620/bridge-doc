---
layout: doc
title: FAQ
---

# 💡 FAQ

## How to Fix "App is Damaged" Error on Mac?

If a macOS application packaged via GitHub Actions shows as "damaged," it's typically because macOS security mechanisms (such as code signing and notarization) were not properly completed or were bypassed. macOS requires applications to be code-signed; otherwise, they may be flagged as "damaged" during installation or execution. Here are some common solutions:

**1. Disable Gatekeeper**

When running the application locally, you can temporarily disable Gatekeeper checks via Terminal (not recommended for distribution, only for local testing):

```bash
sudo spctl --master-disable
```

**2. Bypass the "Damaged" Warning**

Use the following command to clear the extended attributes of the application, preventing macOS from identifying it as untrusted:

```bash
xattr -cr /path/to/your/app.app
```

The `xattr -cr`command recursively clears extended attributes to resolve macOS trust issues.
