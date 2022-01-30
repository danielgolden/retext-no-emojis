import {retext} from 'retext'
import retextNoEmojis from './index.js'

retext()
  .use(retextNoEmojis)
  .process('This is some text ✨ with emojis 😂 sprinkled in 😏. What is the plural of emoji anyway 🧐? 🤷🏽')
  .then((text) => {
    console.error(text.messages)
  })