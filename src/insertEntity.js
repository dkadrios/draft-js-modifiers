import { SelectionState } from "draft-js"
import { Modifier } from "draft-js"
import { EditorState } from "draft-js"
import { getSelectedText } from "."

const insertEntity = (editorState, text, type, data, mutability = 'MUTABLE') => {
  const selectedText = getSelectedText(editorState)
  const contentState = editorState.getCurrentContent()
  const selection = editorState.getSelection()
  const textWithSpace = text.concat(' ')
  const newContent = selectedText ? Modifier.replaceText(
    contentState,
    selection,
    text
  ) : Modifier.insertText(
    contentState,
    selection,
    textWithSpace
  )

  const newContentWithEntity = newContent.createEntity(
    type,
    mutability,
    data,
    false
  )

  const entityKey = newContentWithEntity.getLastCreatedEntityKey()

  const anchorOffset = selection.getAnchorOffset()
  const newSelection = new SelectionState({
    anchorKey: selection.getAnchorKey(),
    anchorOffset,
    focusKey: selection.getAnchorKey(),
    focusOffset: anchorOffset + text.length,
  })

  const newContentWithLink = Modifier.applyEntity(
    newContentWithEntity,
    newSelection,
    entityKey
  )

  const withLinkText = EditorState.push(
    editorState,
    newContentWithLink,
    'insert-characters'
  )

  return EditorState.forceSelection(
    withLinkText,
    newContent.getSelectionAfter()
  )
}

export default insertEntity
