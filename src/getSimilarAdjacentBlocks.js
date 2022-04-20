const getSimilarAdjacentBlocks = (editorState, block, includeDepth = true) => {
  const blockType = block.getType()
  const depth = block.getDepth()
  const variant = block.getData().get('variant')

  const contentState = editorState.getCurrentContent()

  const matches = aBlock => aBlock
    && (aBlock.getType() === blockType)
    && (!includeDepth || (aBlock.getDepth() === depth))
    && (aBlock.getData().get('variant') === variant)

  const before = []
  const after = []

  let cursor = block
  while (cursor) {
    const prev = contentState.getBlockBefore(cursor.getKey())
    if (matches(prev)) {
      before.push(prev)
      cursor = prev
    } else {
      cursor = null
    }
  }

  cursor = block
  while (cursor) {
    const next = contentState.getBlockAfter(cursor.getKey())
    if (matches(next)) {
      after.push(next)
      cursor = next
    } else {
      cursor = null
    }
  }

  return {
    before: before.reverse(),
    after,
    all: [...before.reverse(), block, ...after],
  }
}

export default getSimilarAdjacentBlocks
