const atStartOfBlock = (editorState) => {
  const selection = editorState.getSelection()
  const endOffset = selection.getEndOffset()
  return endOffset === 0
}

export default atStartOfBlock
