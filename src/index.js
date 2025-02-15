export { default as addBlock } from './addBlock'
export { default as adjustBlockDepth } from './adjustBlockDepth'
export { default as atEndOfBlock } from './atEndOfBlock'
export { default as atStartOfBlock } from './atStartOfBlock'
export { default as changeBlockType } from './changeBlockType'
export { default as getAllEntities } from './getAllEntities'
export { default as getCurrentBlock } from './utils/getCurrentBlock'
export { default as getEntitiesForBlock } from './getEntitiesForBlock'
export { default as getEntitiesForSelection } from './getEntitiesForSelection'
export { default as getSelectedText } from './getSelectedText'
export { default as getSimilarAdjacentBlocks } from './getSimilarAdjacentBlocks'
export { default as insertAtomicBlock } from './insertAtomicBlock'
export { default as insertBlock } from './insertBlock'
export { default as insertEmptyBlock } from './insertEmptyBlock'
export { default as insertEntity } from './insertEntity'
export { default as insertNewBlock } from './insertNewBlock'
export { default as insertText } from './insertText'
export { default as mergeBlockData } from './mergeBlockData'
export { default as mergeBlockDataByKey } from './mergeBlockDataByKey'
export { default as mergeEntityData } from './mergeEntityData'
export { default as modifyBlock } from './modifyBlock'
export { default as modifyBlockByKey } from './modifyBlockByKey'
export { default as moveCaretAfterBlock } from './moveCaretAfterBlock'
export { default as moveCaretToEnd } from './moveCaretToEnd'
export { default as removeBlock } from './removeBlock'
export { default as removeBlockStyle } from './removeBlockStyle'
export { default as removeEntity } from './removeEntity'
export { default as removeInlineStyles } from './removeInlineStyles'
export { default as resetBlock } from './resetBlock'
export { default as selectAll} from './selectAll'
export { default as selectBlockByKey } from './selectBlockByKey'
export { default as setBlockData } from './setBlockData'
export { default as toggleBlockStyle } from './toggleBlockStyle'
export { default as toggleBlockType } from './toggleBlockType'
export { default as toggleEntity } from './toggleEntity'
export { default as toggleInlineStyle } from './toggleInlineStyle'
export { default as trimEditorState } from './trimEditorState'

export const DRAFTJS_BLOCK_KEY = 'DRAFTJS_BLOCK_KEY'
export const HANDLED = 'handled'
export const NOT_HANDLED = 'not-handled'
