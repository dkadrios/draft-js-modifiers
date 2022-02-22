import { EditorState } from "draft-js"
import { genKey } from "draft-js"
import { ContentBlock } from "draft-js"
import { ContentState } from "draft-js"
import Immutable from "immutable"

const insertBlockBefore = (editorState, keyBefore, blockParams) => {
  const newBlock = new ContentBlock({
    key: genKey(),
    type: 'unstyled',
    text: '',
    ...blockParams,
  })

  const contentState = editorState.getCurrentContent()
  const oldBlockMap = contentState.getBlockMap()
  const newBlockMap = Immutable.OrderedMap().withMutations((map) => {
    for (const [k, v] of oldBlockMap.entries()) {
      if (keyBefore === k) {
        map.set(newBlock.key, newBlock)
      }

      map.set(k, v)
    }
  })

  return EditorState.push(
    editorState,
    ContentState
      .createFromBlockArray(Array.from(newBlockMap.values()))
      .set('selectionBefore', contentState.getSelectionBefore())
      .set('selectionAfter', contentState.getSelectionAfter())
  )
}

export default insertBlockBefore
