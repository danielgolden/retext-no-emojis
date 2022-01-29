# retext-no-emojis

A [retext](https://github.com/retextjs/retext) plugin to encourage the usage of common contractions.

## Install

```sh
npm install retext-no-emojis
```

## Use

```js
import { retext } from "retext";
import { reporter } from "vfile-reporter";
import retextStringify from "retext-stringify";
import retextNoEmojis from "retext-no-emojis";

retext()
  .use(retextNoEmojis)
  .use(retextStringify)
  .process("These are not the droids you are looking for")
  .then((report) => {
    console.error(reporter(file));
  });
```

<!--
Yields:

```
  3:14-3:16  warning  Expected `1` space between sentences, not `2`  space  retext-sentence-spacing

⚠ 1 warning
``` -->
