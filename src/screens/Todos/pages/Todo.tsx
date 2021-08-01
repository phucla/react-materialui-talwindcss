import React, { useEffect, useState } from 'react'
import { Button, TextField, Table, makeStyles, Theme, TableBody, Snackbar, TableContainer } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import { useDispatch, useSelector } from 'react-redux'
import { TodoType, TodoStatus } from 'types'
import { selectTodos, todosActions } from '../todosSlice'
import TodoRow from '../components/TodoRow'

const Todos = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const todos = useSelector(selectTodos)
  const [data, setData] = useState(todos)
  const [title, setTitle] = useState<string>("")
  const [error, setError] = useState<string>("")

  useEffect(() => {
    dispatch(todosActions.getTodosRequest())
  }, [dispatch])

  useEffect(() => {
    setData(todos)
  }, [todos])

  const handleClick = (todo: TodoType) => {
    if (todo.status === TodoStatus.FINISH) {
      dispatch(todosActions.deleteTodoRequest(todo.id))
    } else {
      dispatch(todosActions.updateTodoRequest({
        id: todo.id,
        title: todo.title,
        status: TodoStatus.FINISH
      }))
    }
  }

  const handleChangeInput = (e: any): void => {
    setTitle(e.target.value)
  }

  const handleCreateTodo = () => {
    if (title) {
      dispatch(todosActions.createTodoRequest({
        title,
        id: new Date().getTime(),
        status: TodoStatus.INPROGRESS
      }))
      setTitle('')
    } else {
      setError('Please input todo!')
    }
  }

  console.log(error)
  return (
    <div className={classes.root}>
      <div className="w-full flex flex-col">
      <Snackbar open={!!error} autoHideDuration={3000} onClose={() => setError('')}>
        <Alert severity="error">
          Please input todo!
        </Alert>
      </Snackbar>
        <div className="flex align-center py-20">
          <TextField placeholder="Create todo" className="w-200 mr-20" onChange={handleChangeInput} value={title} />

          <Button className="x-26" variant="contained" onClick={handleCreateTodo}>Add</Button>
        </div>
        <TableContainer className={classes.container}>
        <Table stickyHeader aria-labelledby="tableTitle">
          <TableBody >
            {data.map((n: TodoType) => (
              <TodoRow
                key={n.id}
                title={n.title}
                status={n.status}
                id={n.id}
                handleClick={() => handleClick(n)}
              />
            ))}
          </TableBody>
        </Table>
        </TableContainer>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    maxHeight: 540,
  },
  link: {
    fontSize: "14px",
    paddingTop: "5px",
    color: "rgba(18, 54, 249, 0.87)"
  },
  chip: {
    height: "20px",
    color: "rgba(0, 0, 0, 0.87)"
  },
  root: {
    "& .MuiTableCell-root": {
      borderBottom: "1px rgba(113, 104, 104, 0.87) solid"
    },
    "& .MuiFormControl-root": {
      marginRight: "10px"
    },
    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
    "& .MuiInputBase-root": {
      width: "200px",
      marginRight: "10px"
    }
  }
}));

export default Todos
