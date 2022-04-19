import getCurrentBlock from "./utils/getCurrentBlock"

const atEndOfBlock = (editorState) => {
  const currentBlock = getCurrentBlock(editorState)
  const selection = editorState.getSelection()
  const endOffset = selection.getEndOffset()
  return endOffset === currentBlock.getLength()
}

export default atEndOfBlock
