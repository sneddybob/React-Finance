/*
 * action types
 */
export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'
export const WATCHED_STOCKS = 'WATCHED_STOCKS'
export const LOAD_ALL_SYMBOLS = 'LOAD_ALL_SYMBOLS'


export function exampleAction(change){
  return { type: EXAMPLE_ACTION, change }
}


export function loadAllSymbols(symbols){
  return {type: LOAD_ALL_SYMBOLS, symbols}
}

export function watchStocks(watch){
  return {type: WATCHED_STOCKS, watch}
}