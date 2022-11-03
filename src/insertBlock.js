import { ContentBlock, EditorState, genKey } from "draft-js"
import { List } from "immutable"

const insertBlock = (direction, editorState, targetBlock, newBlockType) => {
  const selection = editorState.getSelection()
  const contentState = editorState.getCurrentContent()
  const currentBlock = targetBlock || contentState.getBlockForKey(selection.getEndKey())

  const blockMap = contentState.getBlockMap()
  // Split the blocks
  const blocksBefore = blockMap.toSeq().takeUntil(v => v === currentBlock)
  const blocksAfter = blockMap.toSeq().skipUntil(v => v === currentBlock).rest()
  const newBlockKey = genKey()
  const newBlocks = direction === 'before' ? [
    [newBlockKey, new ContentBlock({
      key: newBlockKey,
      type: newBlockType,
      text: '',
      characterList: List(),
    })],
    [currentBlock.getKey(), currentBlock],
  ] : [
    [currentBlock.getKey(), currentBlock],
    [newBlockKey, new ContentBlock({
      key: newBlockKey,
      type: newBlockType,
      text: '',
      characterList: List(),
    })],
  ]
  const newBlockMap = blocksBefore.concat(newBlocks, blocksAfter).toOrderedMap()
  const newContentState = contentState.merge({
    blockMap: newBlockMap,
    selectionBefore: selection,
    selectionAfter: selection,
  })
  return EditorState.push(editorState, newContentState, 'insert-fragment')
}

export default insertBlock
