# chrome-macro

Generated by Claude

Use at your own risk

# Search Shortcuts Chrome Extension

This Chrome extension allows you to use shortcuts in your Google searches that get automatically replaced with predefined values.

## Current Shortcuts

```

`rr -> site:reddit.com

`hn -> site:news.ycombinator.com

```

## Installation
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension directory

## Usage
Simply type your search query in Chrome's address bar with any of the supported shortcuts. The extension will automatically replace the shortcuts when you perform the search.

Example:
- Typing: `@rr homelab server rack`
- Results in: `homelab server rack site:reddit.com`

## Adding New Shortcuts
To add new shortcuts, modify the `shortcuts` object in `background.js`:

```javascript
const shortcuts = {
  '@rr': 'site:reddit.com',
  '@hn': 'site:news.ycombinator.com',
  // Add new shortcuts here
  '@gh': 'site:github.com'
};
```
