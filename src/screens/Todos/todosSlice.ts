import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from 'types';

export interface TodosState {
  error?: string;
  isLoading?: boolean;
  data: TodoType[],
}

const initialState: TodosState = {
  error: "",
  isLoading: false,
  data: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getTodosRequest(state) {
      state.isLoading = true;
    },
    getTodosSuccess(state, action: PayloadAction<TodoType[]>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    getTodosFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
    deleteTodoRequest(state, action: PayloadAction<number>) {
      state.isLoading = true;
    },
    deleteTodoSuccess(state, action: PayloadAction<number>) {
      state.isLoading = false;
      state.data = state.data.filter(item => item.id !== action.payload)
    },
    deleteTodoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
    createTodoRequest(state, action: PayloadAction<TodoType>) {
      state.isLoading = true;
    },
    createTodoSuccess(state, action: PayloadAction<TodoType>) {
      state.isLoading = false;
      state.data = [action.payload, ...state.data]
    },
    createTodoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },

    // Update todo status
    updateTodoRequest(state, action: PayloadAction<TodoType>) {
      state.isLoading = true;
    },
    updateTodoSuccess(state, action: PayloadAction<TodoType>) {
      state.isLoading = false;
      state.data = state.data.map(item => (item.id === action.payload.id ? action.payload : item))
    },
    updateTodoFailed(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload
    },
  },
});

// Actions
export const todosActions = todosSlice.actions;

// Selectors
export const selectTodos= (state: any) => state.todos.data;
export const selectIsLoading = (state: any) => state.todos.isLoading;

// Reducer
const todosReducer = todosSlice.reducer;
export default todosReducer;