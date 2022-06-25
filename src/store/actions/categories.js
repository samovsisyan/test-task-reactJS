export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST'
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS'
export const CATEGORIES_FAIL = 'CATEGORIES_FAIL'

export function categoriesAction(data) {
  return {
    type: CATEGORIES_REQUEST,
    payload: {data}
  };
}