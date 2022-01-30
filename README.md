# retext-no-emojis

A [retext](https://github.com/retextjs/retext) plugin to discourage the usage of emoji(s).

## Install

```sh
npm install retext-no-emojis
```

## Use

```js
import { retext } from "retext";
import retextNoEmojis from "./index.js";

retext()
  .use(retextNoEmojis)
  .process(
    "This is some text ✨ with emojis 😂 sprinkled in 😏. What is the plural of emoji anyway 🧐? 🤷🏽"
  )
  .then((text) => {
    console.error(text.messages);
  });
```

<!--
Yields:

```
  3:14-3:16  warning  Expected `1` space between sentences, not `2`  space  retext-sentence-spacing

⚠ 1 warning
``` -->
