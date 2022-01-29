import fs from 'fs'
import {retext} from 'retext'
// import {reporter} from 'vfile-reporter-json'
import retextNoEmojis from './index.js'

retext()
  .use(retextNoEmojis)
  .process('I💐 c👋🏽an not see you.')
  .then((text) => {
    console.error(text.messages)
  })