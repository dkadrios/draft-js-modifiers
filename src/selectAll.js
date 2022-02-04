import { EditorState } from "draft-js"

const selectAll = (editorState) => {
  const currentContent = editorState.getCurrentContent()
  const selectionState = editorState.getSelection().merge({
    anchorKey: currentContent.getFirstBlock().getKey(),
    anchorOffset: 0,
    focusOffset: currentContent.getLastBlock().getText().length,
    focusKey: currentContent.getLastBlock().getKey(),
  })

  return EditorState.forceSelection(editorState, selectionState)
}

export default selectAll
