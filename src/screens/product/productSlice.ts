import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, SearchProduct } from 'types/product';

export interface ProductState {
  error?: string;
  isLoading?: boolean;
  data: Product[],
  searchData: SearchProduct
}

const initialState: ProductState = {
  error: "",
  isLoading: false,
  data: [],
  searchData: {
    name: "",
    city: ""
  }
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getProductsRequest(state) {
      state.isLoading = true;
    },
    getProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getProductsFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },

    searchProducts(state, action: PayloadAction<SearchProduct>) {
      state.isLoading = true;
      state.searchData = action.payload;
    },
  },
});

// Actions
export const productActions = productSlice.actions;

// Selectors
export const selectProduct= (state: any) => state.product.data;
export const selectIsLoading = (state: any) => state.product.isLoading;

// Reducer
const productReducer = productSlice.reducer;
export default productReducer;