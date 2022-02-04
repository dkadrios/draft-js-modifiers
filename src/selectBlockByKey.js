import { SelectionState } from "draft-js"
import { EditorState } from "draft-js"

const selectBlockByKey = (editorState, key) => {
  const currentBlock = editorState.getCurrentContent().getBlockForKey(key)
  const selectionState = SelectionState.createEmpty()
  const entireBlockSelectionState = selectionState.merge({
    anchorKey: key,
    anchorOffset: 0,
    focusKey: key,
    focusOffset: currentBlock.getText().length,
  })

  return EditorState.forceSelection(
    editorState,
    entireBlockSelectionState
  )
}

export default selectBlockByKey
