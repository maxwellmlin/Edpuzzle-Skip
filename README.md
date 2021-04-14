# Edpuzzle-Skip
Allows you to skip ahead in Edpuzzle videos. I've only tried this using Chrome DevTools' local overrides but it could work in other browsers.

The only change made was in `assets.edpuzzle.com/app/app-*.js`

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
- Copy over `app-*.js` to the actual app file in sources. The file name is different for each instance of Edpuzzle but can be found by searching for `app-`
    - The file to edit should have a name similar to this: `app-db2f47f6d922f7ba958c.js`
- The page should crash; reload and the Edpuzzle should be skippable
