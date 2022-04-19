import { RichUtils } from "draft-js"
import modifyBlock from "./modifyBlock"
import toggleBlockStyle from "./toggleBlockStyle"
import getCurrentBlock from "./utils/getCurrentBlock"

const changeBlockType = (editorState, blockType, data) => {
  const block = getCurrentBlock(editorState)
  const currentBlockType = block.get('type')

  if (currentBlockType === blockType) {
    data
      ? toggleBlockStyle(editorState, { type: blockType, data })
      : RichUtils.toggleBlockType(editorState, blockType)
  } else {
    modifyBlock(editorState, data)
  }

}

export default changeBlockType
