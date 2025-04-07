# Link Cleaner Extension

## Description

Link Cleaner is a Chrome extension that cleans up Outlook-encapsulated links and copies the cleaned link to your clipboard.

## Installation

### Step 1: Download the Extension Files

1. Create a new folder on your computer.
2. Save the following files into the folder:
   - `manifest.json`
   - `background.js`
   - `popup.html`
   - Icons (`icon16.png`, `icon48.png`, `icon128.png`)

### Step 2: Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click "Load unpacked" and select the folder containing your extension files.

### Step 3: Test the Extension

1. Copy an Outlook-encapsulated link to your clipboard.
2. Click the extension icon in Chrome to clean the link.
3. The cleaned link will be copied to your clipboard, and you'll see an alert confirming the action.

## Files

### `manifest.json`

```json
{
  "manifest_version": 3,
  "name": "Link Cleaner",
  "version": "1.0",
  "description": "Cleans up Outlook-encapsulated links.",
  "permissions": ["clipboardRead", "clipboardWrite"],
  "background": {
    "service_worker": "background.js"
  },
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icon16.png",
      "48": "icon48.png",
      "128": "icon128.png"
    }
  }
}
