import { EditorState } from "draft-js"
import { SelectionState } from "draft-js"

const moveCaretAfterBlock = (editorState, block) => {
  const content = editorState.getCurrentContent()
  const nextBlock = content.getBlockAfter(block.getKey())
  const key = nextBlock ? nextBlock.getKey() : undefined

  if (key) {
    const selectionState = SelectionState.createEmpty()
    const newSelectionState = selectionState.merge({
      anchorKey: key,
      anchorOffset: 0,
      focusKey: key,
      focusOffset: 0,
    })

    return EditorState.forceSelection(
      editorState,
      newSelectionState
    )
  }
  return editorState
}

export default moveCaretAfterBlock
