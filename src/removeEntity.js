import { Modifier } from "draft-js"
import { EditorState } from "draft-js"

const removeEntity = (editorState, entity) => {
  const contentState = editorState.getCurrentContent()
  const selectionState = editorState.getSelection()
  const startKey = selectionState.getStartKey()
  const contentBlock = contentState.getBlockForKey(startKey)

  /* istanbul ignore if */
  if (!entity) return editorState

  let entitySelection = null

  contentBlock.findEntityRanges(
    character => character.getEntity() === entity.entityKey,
    (start, end) => {
      entitySelection = selectionState.merge({
        anchorOffset: start,
        focusOffset: end,
      })
    }
  )

  const newContentState = Modifier.applyEntity(
    contentState,
    entitySelection,
    null
  )

  return EditorState.push(
    editorState,
    newContentState,
    'apply-entity'
  )
}

export default removeEntity
