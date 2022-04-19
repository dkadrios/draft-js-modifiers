import { EditorState } from "draft-js"
import { Modifier } from "draft-js"

const setBlockData = (editorState, data) => {
  const newContentState = Modifier.setBlockData(
    editorState.getCurrentContent(),
    editorState.getSelection(),
    data
  )

  return EditorState.push(editorState, newContentState, 'change-block-data')
}

export default setBlockData
