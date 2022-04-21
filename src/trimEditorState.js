import { EditorState, Modifier, SelectionState } from 'draft-js'

/**
 * Taken from:
 *    https://stackoverflow.com/questions/46802855/draft-js-how-to-trim-contents
 *
 * This *might* mess up entities, but so far I haven't seen any issues
 */

const trimEditorState = (currentEditorState) => {
  const currentContent = currentEditorState.getCurrentContent()
  const newContent = currentContent.getBlockMap().reduce((accumulator, block) => {
    const key = block.getKey()
    const text = block.getText()
    const trimmedLeft = text.trimLeft()
    const trimmedRight = text.trimRight()
    const offset = text.length - trimmedLeft.length

    const textToReplaceLeft = new SelectionState({
      anchorKey: key,
      focusKey: key,
      anchorOffset: 0,
      focusOffset: offset,
    })

    const leftTrimmedContent = Modifier.replaceText(accumulator, textToReplaceLeft, '')

    const textToReplaceRight = new SelectionState({
      anchorKey: key,
      focusKey: key,
      anchorOffset: trimmedRight.length - offset,
      focusOffset: text.length - offset,
    })

    return Modifier.replaceText(leftTrimmedContent, textToReplaceRight, '')
  }, currentContent)

  return EditorState.push(currentEditorState, newContent, 'remove-range')
}

export default trimEditorState
