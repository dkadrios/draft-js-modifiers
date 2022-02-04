import { RichUtils } from "draft-js"
import { EditorState } from "draft-js"
import { Modifier } from "draft-js"
import { Map } from 'immutable'

const toggleBlockStyle = (editorState, { type: blockStyle, data }) => {
  /* istanbul ignore else */
  if (data) {
    const selection = editorState.getSelection()

    const newContentState = Modifier.mergeBlockData(
      editorState.getCurrentContent(),
      selection,
      Map(data)
    )
    const newEditorState = EditorState.push(
      editorState,
      newContentState,
      'change-block-data'
    )
    return RichUtils.toggleBlockType(newEditorState, blockStyle)
  }

  // We currently always have data, but just in case we add new types in the
  // future, the default action is to just blindly toggle it.
  /* istanbul ignore next */
  return RichUtils.toggleBlockType(
    editorState,
    blockStyle
  )
}

export default toggleBlockStyle
