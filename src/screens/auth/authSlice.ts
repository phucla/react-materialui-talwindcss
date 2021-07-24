import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, LoginPayload } from 'types/auth';

export interface AuthState {
  isLoggedIn: boolean;
  currentUser?: User;
  error?: string;
  isLoading?: boolean;
  auth_token: string
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: undefined,
  error: "",
  isLoading: false,
  auth_token: ""
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest(state, action: PayloadAction<LoginPayload>) {
      state.isLoading = true;
    },
    loginSuccess(state, action: PayloadAction<User>) {
      state.isLoggedIn = true;
      state.isLoading = false;
      state.currentUser = action.payload;
      state.auth_token = action.payload.auth_token;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
      state.auth_token = '';
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectToken= (state: any) => state.auth.auth_token;
export const selectIsLogging = (state: any) => state.auth.logging;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;