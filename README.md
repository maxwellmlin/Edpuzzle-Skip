![Edpuzzle Skip Logo](images/favicon-192.png?raw=true)

# About
A Chrome extension that allows you to skip ahead in Edpuzzle videos. Relies on Manifest v2 which will probably not be supported in the future.

## Install
1. Download the [latest release](https://github.com/maxwellmlin/edpuzzle-skip/releases) and unzip the file
2. Go to chrome://extensions
3. Enable `developer mode`
4. Click `load unpacked` and select the unzipped file

## Usage
This extension allows you to skip ahead in Edpuzzle videos. It uses the chrome.webRequest API to redirect requests to a modified source file, `app.js`.

You can disable/enable the extension by clicking the extension icon. You may need to close all Edpuzzle tabs or refresh so that it issues new requests. 

The only change made was in `https://assets.edpuzzle.com/app/app-*.js`

Before:
```javascript
{
    key: 'getMaxSkipAhead',
    value: function() {
        return this.maxSkipAhead
    }
}
```

After:
```javascript
{
    key: "getMaxSkipAhead",
    value: function() {
        return this.videoDuration
    }
}
```
