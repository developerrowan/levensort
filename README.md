# levensort

A basic Wagner-Fischer implementation of the Levenshtein / Minimum Edit Distance algorithm. Solves in O(mn) for now.

# NOTE: HEAVILY A WORK IN PROGRESS. Subject to change or breaking. NOT STABLE.

## Use
`npm install @autumnrowan/levensort`

Then, require the package

```js
const { levenshtein, levensearch } = require("@autumnrowan/levensort");

const database = ["julius caeser", "julia", "july", "orange julius"];

const search_results = levensearch(database, "julio", 100, 6);

console.log(search_results);
```

### Output
```js
[
    { value: 'julia', score: 1},
    { value: 'july', score: 2}, 
]
```

## Docs
`levenshtein()` - takes two arguments, `a` (target) `b` (source) as strings.

`levensearch()` - `arr` array to search `source` source string `limit` limit results `maxTolerance` max distance