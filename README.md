# Edpuzzle-Skip
Allows you to skip ahead in Edpuzzle videos. I've only tried this using Chrome DevTools' local overrides but it could work in other browsers.

The only change made was in `assets.edpuzzle.com/app/app-8b7f603e27144ec7abd2.js`

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

# How to use
- Open Chrome DevTools in the Edpuzzle
- In the Sources/Overrides panel, select the cloned `Edpuzzle-Skip` repository as an override
- If Chrome asks, allow access to the folder
- The page should crash; reload and the Edpuzzle should be skippable
