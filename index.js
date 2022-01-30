import { visit } from 'unist-util-visit';
import { is, convert } from 'unist-util-is';
import { pointStart, pointEnd } from 'unist-util-position'

export default function retextNoEmojis() {
  return (tree, file) => {
    // Recursively walk the syntaxt tree of the text
    visit(tree, 'ParagraphNode', (node) => {
      const sentences = node.children
      const source = 'retext-no-emojis'
      let ruleId = ''
      const expected = ['']

      // for each sentence
      sentences.forEach((sentence, index) => {
        // for each sentence child
        if (is(sentence, 'SentenceNode')) {
          sentence.children.forEach((sentenceChild, index) => {     
            const children = sentence.children

            // if it's a word
            if (is(sentenceChild, 'SymbolNode')) {
              // Want to know what this little glorious snippet does?
              // https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
              let matches = /\p{Extended_Pictographic}/u.test(sentenceChild.value)

              if (matches) {
                const actual = sentenceChild.value
                
                Object.assign(
                  file.message(
                    `Expected nothing, not "${actual}"`,
                    {start: pointStart(sentenceChild), end: pointEnd(sentenceChild)},
                    [source, sentenceChild.value].join(':')
                  ),
                  {actual, expected, note: '', url: 'https://one-core.datanerd.us/foundation/design/writing/emojis/'}
                )
                return file
              }
            }
          })
        }
      })
    })
  }
}