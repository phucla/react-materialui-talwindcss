// Libs
import { put, call, takeLatest } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'
import { api, StatusCode } from 'services/apis'
import { TodoType } from 'types'

// Constants
import { todosActions } from './todosSlice';

/**
 * Get Todo list request
 */
 function* getTodosRequest():Generator<
 any, any, AxiosResponse<TodoType[] | string>
> {
 try {
   const response: AxiosResponse<TodoType[] | string> = yield call(() => api.get<TodoType[]>(`/todos`))

   if (response.status === StatusCode.Success) {
     yield put(todosActions.getTodosSuccess(response.data as TodoType[]))

   } else {
     yield put(todosActions.getTodosFailed(response.data as string))
   }
 } catch (errors) {
   yield put(todosActions.getTodosFailed(errors))
 }
}

/**
 * Delete todo request
 * @param action 
 */
function* deleteTodoRequest(action: any):Generator<
any, any, AxiosResponse<TodoType[] | string>
> {
try {
  const response: AxiosResponse<TodoType[] | string> = yield call(() => api.delete(`/todos/${action.payload}`))

  if (response.status === StatusCode.Success) {
    yield put(todosActions.deleteTodoSuccess(action.payload))

  } else {
    yield put(todosActions.deleteTodoFailed(response.data as string))
  }
} catch (errors) {
  yield put(todosActions.deleteTodoFailed(errors))
  }
}

/**
 * Create todo request
 * @param action 
 */
 function* createTodoRequest(action: any):Generator<
 any, any, AxiosResponse<TodoType | string>
 > {
 try {
   const response: AxiosResponse<TodoType | string> = yield call(() => api.post(`/todos`, action.payload))
   if (response.status === StatusCode.CreateSuccess) {
     yield put(todosActions.createTodoSuccess(response.data as TodoType))
 
   } else {
     yield put(todosActions.createTodoFailed(response.data as string))
   }
 } catch (errors) {
   yield put(todosActions.createTodoFailed(errors))
   }
 }

 /**
 * Update todo request
 * @param action 
 */
  function* updateTodoRequest(action: any):Generator<
  any, any, AxiosResponse<TodoType | string>
  > {
  try {
    const response: AxiosResponse<TodoType | string> = yield call(() => api.put(`/todos/${action.payload.id}`, action.payload))
    if (response.status === StatusCode.Success) {
      yield put(todosActions.updateTodoSuccess(response.data as TodoType))
    } else {
      yield put(todosActions.updateTodoFailed(response.data as string))
    }
  } catch (errors) {
    yield put(todosActions.updateTodoFailed(errors))
    }
  }
function* todosSaga():Generator<
 any, any, any
> {
  return [
    yield takeLatest(todosActions.getTodosRequest.type, getTodosRequest),
    yield takeLatest(todosActions.deleteTodoRequest.type, deleteTodoRequest),
    yield takeLatest(todosActions.createTodoRequest.type, createTodoRequest),
    yield takeLatest(todosActions.updateTodoRequest.type, updateTodoRequest)
  ]
}

export default todosSaga
