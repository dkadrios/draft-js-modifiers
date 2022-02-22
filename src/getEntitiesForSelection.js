import { getCurrentBlock, getEntitiesForBlock } from "."
import { rangesOverlap } from "./utils/numbers"

const getEntitiesForCurrentBlock = (editorState, type = null) => getEntitiesForBlock(
  editorState,
  getCurrentBlock(editorState),
  type
)

const getEntitiesForSelection = (editorState, type = null) => {
  const entities = getEntitiesForCurrentBlock(editorState, type)
  const selection = editorState.getSelection()
  const selectionStart = selection.isCollapsed() ? selection.getStartOffset() - 1 : selection.getStartOffset()
  const selectionEnd = selection.getEndOffset()

  return entities
    .filter(({ start, end }) => rangesOverlap(selectionStart, selectionEnd, start, end))
}

export default getEntitiesForSelection
