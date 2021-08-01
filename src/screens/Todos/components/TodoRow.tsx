import React, { MouseEventHandler } from 'react'
import { IconButton, makeStyles, Theme, TableCell, TableRow, Typography } from '@material-ui/core'
import DoneIcon from '@material-ui/icons/Done'
import DeleteIcon from '@material-ui/icons/Delete'
import { TodoType, TodoStatus } from 'types'
import Colors from 'themes/Colors'

interface TodoRowProp extends TodoType {
  handleClick: MouseEventHandler
}

const TodoRow = ({ id, title, handleClick, status }: TodoRowProp) => {
  const classes = useStyles();

  return (
    <TableRow
      className="h-64"
      role="checkbox"
      tabIndex={-1}
      key={id}
    >
      <TableCell component="th" scope="row" className="p-20 w-400">
        <Typography className={classes.text}>{title}</Typography>
      </TableCell>
      <TableCell
        className="w-100 p-20 justify-end flex"
        component="th"
        scope="row"
      >
        <IconButton
          onClick={handleClick}
          className="x-26">
          {status === TodoStatus.FINISH ? (
            <DeleteIcon color="secondary" />
          ) : (
            <DoneIcon color="primary" />
          )}</IconButton>
      </TableCell>
    </TableRow>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: "14px",
    paddingTop: "5px",
    color: Colors.text
  },
}));

export default TodoRow
