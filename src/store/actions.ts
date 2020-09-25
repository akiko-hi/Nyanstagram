import { createAction } from 'typesafe-actions'

export const pickCategory = createAction("PICK_CATEGORY")<number>()

