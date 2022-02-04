import { SelectionState } from "draft-js"
import { EditorState } from "draft-js"

const moveCaretToEnd = (editorState) => {
  const content = editorState.getCurrentContent()
  const lastBlock = content.getLastBlock()

  const key = lastBlock.getKey()
  const length = lastBlock.getLength()

  const selection = new SelectionState({
    anchorKey: key,
    anchorOffset: length,
    focusKey: key,
    focusOffset: length,
  })
  return EditorState.forceSelection(editorState, selection)
}

export default moveCaretToEnd
