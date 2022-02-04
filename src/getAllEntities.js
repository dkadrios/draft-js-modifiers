import { getEntitiesForBlock } from "."

export const flatten = arr => arr.reduce((a, b) => a.concat(b), [])

const getAllEntities = (editorState, type = null) => {
  const content = editorState.getCurrentContent()
  const entities = []
  content.getBlocksAsArray().forEach((contentBlock) => {
    entities.push(getEntitiesForBlock(editorState, contentBlock, type))
  })
  return flatten(entities)
}

export default getAllEntities
