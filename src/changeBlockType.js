import { RichUtils } from "draft-js"
import toggleBlockStyle from "./toggleBlockStyle"
import getCurrentBlock from "./utils/getCurrentBlock"
import setBlockData from './setBlockData'

const changeBlockType = (editorState, blockType, data) => {
  const block = getCurrentBlock(editorState)
  const currentBlockType = block.get('type')

  if (currentBlockType === blockType) {
    return setBlockData(editorState,  data )
  } else {
    return data
      ? toggleBlockStyle(editorState, { type: blockType, data })
      : RichUtils.toggleBlockType(editorState, blockType)
  }
}

export default changeBlockType
