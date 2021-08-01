export enum TodoStatus {
  INPROGRESS,
  FINISH
}

export interface TodoType {
  title: string,
  id: number,
  status: TodoStatus
}
