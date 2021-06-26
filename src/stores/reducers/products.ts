import * as Actions from '../actions'

const initialState = {
  products: [],
  searchText: '',
  loading: false,
  error: '',
  type: '',
}

type ProductActionType = {
  type: string
  data: any,
  error: string
  searchText: string
}
const productsReducer = (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case Actions.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        loading: true,
      }
    }

    case Actions.GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.data,
        loading: false,
        type: action.type,
      }
    }

    case Actions.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    }

    case Actions.SET_PRODUCTS_SEARCH_TEXT: {
      return {
        ...state,
        searchText: action.searchText,
      }
    }

    default: {
      return state
    }
  }
}

export default productsReducer
