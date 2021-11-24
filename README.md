# About
A Chrome extension that allows you to skip ahead in Edpuzzle videos.

## Install
1. Download the [latest release](https://github.com/maxwellmlin/edpuzzle-skip/zipball/main) and unzip the file
2. Go to chrome://extensions
3. Enable `developer mode`
4. Click `load unpacked` and select the unzipped folder

## Usage
You can enable/disable the extension by clicking the extension icon.

You may need to refresh the Edpuzzle tabs and toggle the extension on/off in order for the video to become skippable.

## Extension not working?
Please open a [new issue](https://github.com/maxwellmlin/edpuzzle-skip/issues) to let me know.

In the meantime you can try to edit Edpuzzle's `app.js` file manually use Chrome Developer Tools's Local Overrides.
1. Open Chrome DevTools in the Edpuzzle
2. In the Sources/Overrides panel, select a new folder as an override
3. In the Sources/Page panel, find the `app.js` file. It should have a name matching the wildcard: '*://assets.edpuzzle.com/app/app*.js'
4. Modify this file using the guide below. It may help to open an external editor and format the minified source file

Before:
```javascript
{
  key: "getMaxSkipAhead",
  value: function () {
    return this.maxSkipAhead
  },
},
```

After:
```javascript
{
  key: "getMaxSkipAhead",
  value: function () {
    return this.videoDuration
  },
},
```
