const getEntitiesForBlock = (editorState, contentBlock, type = null) => {
  const content = editorState.getCurrentContent()
  const entities = []

  let selectedEntity = null
  contentBlock.findEntityRanges(
    (character) => {
      if (character.getEntity() !== null) {
        const entity = content.getEntity(character.getEntity())
        if (!type || (type && entity.getType() === type)) {
          selectedEntity = {
            entityKey: character.getEntity(),
            blockKey: contentBlock.getKey(),
            entity: content.getEntity(character.getEntity()),
          }
          return true
        }
      }
      return false
    },
    (start, end) => {
      entities.push({ ...selectedEntity, start, end })
    }
  )

  return entities
}

export default getEntitiesForBlock
