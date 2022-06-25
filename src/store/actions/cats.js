export const CATS_REQUEST = 'CATS_REQUEST'
export const CATS_SUCCESS = 'CATS_SUCCESS'
export const CATS_FAIL = 'CATS_FAIL'

export function catsAction(limit, categoryId) {
  return {
    type: CATS_REQUEST,
    payload: { limit: limit, categoryId: categoryId }
  };
}