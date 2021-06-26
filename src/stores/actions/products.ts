export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED'
export const SET_PRODUCTS_SEARCH_TEXT =
  '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT'

export const getProducts = () => ({
  type: GET_PRODUCTS_REQUEST,
})

export function setProductsSearchText(value: string) {
  return {
    type: SET_PRODUCTS_SEARCH_TEXT,
    searchText: value,
  }
}
