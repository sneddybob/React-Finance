/*
 * action types
 */
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
export const SET_MATCHED_SYMBOLS = 'SET_MATCHED_SYMBOLS'

export function exampleAction(change){
  return { type: EXAMPLE_ACTION, change }
}
export function myAction(symbol){
  return { type: SET_MATCHED_SYMBOLS, symbol }
}