import React, { useEffect, useState } from 'react'
import {TextField, Select,MenuItem,Table, makeStyles, Theme, Chip, TableBody, TableCell, TablePagination, TableRow, Typography} from '@material-ui/core'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import * as Actions from '../../stores/actions'
import ProductsTableHead from './ProductsTableHead'
import { ProductType } from '../../types'

const ProductsTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles();
  const { products } = useSelector((state: ProductType) => state.product)

  const [data, setData] = useState(products)
  const [page] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  useEffect(() => {
    dispatch(Actions.getProducts())
  }, [dispatch])

  useEffect(() => {
    setData(products)
  }, [products])

  function handleClick(item: any) {
    navigate(`/apps/e-commerce/products/${item.id}`)
  }

  function handleChangeRowsPerPage(event: any) {
    setRowsPerPage(event.target.value)
  }

  function handleChangePage(event: any, value: any) {
    console.log(value)
  }

  const handleChange = () => {

  }
  return (
    <div className={classes.root}>
    <div className="w-full flex flex-col">
      <div className="flex align-center py-20">
      <TextField placeholder="Search by name" className="w-200 mr-20"/>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={10}
          onChange={handleChange}
        >
          <MenuItem className={classes.text} value={10}>Ten</MenuItem>
          <MenuItem className={classes.text} value={20}>Twenty</MenuItem>
          <MenuItem className={classes.text} value={30}>Thirty</MenuItem>
        </Select>
      </div>
      <Table  aria-labelledby="tableTitle">
        <ProductsTableHead />

        <TableBody >
          {data.map((n) => {
            return (
              <TableRow
                className="h-64 cursor-pointer"
                hover
                role="checkbox"
                tabIndex={-1}
                key={n.id}
                onClick={() => handleClick(n)}
              >
                <TableCell component="th" scope="row"  className="p-20">
                  <Typography className={classes.text}>Client: {n.request.client}</Typography>
                  <Typography className={classes.text}>Client: {n.request.client}</Typography>
                  <Typography className={classes.text}>{n.request.date}</Typography>
                  <Typography className={classes.text}>Client: {n.request.status}</Typography>
                  <Typography className={classes.text}>Decision: <Chip className={classes.chip} label={n.request.decision}/></Typography>
                  <Typography className={classes.text}>CS Decision: <Chip color="secondary" className={classes.chip} label={n.request.csDescision}/></Typography>
                  <Typography><Link className={classes.link} to="">ID Similarity</Link></Typography>
                  
                  <Link className={classes.link} to="">Selfie Similarity</Link>
                  
                </TableCell>
                <TableCell
                  className="w-200 p-20"
                  component="th"
                  scope="row"
                >
                  <img
                    className="w-full block rounded"
                    src={n.front.url}
                    alt={n.front.description}
                  />
                  <Typography className={classes.text}>{n.front.description}</Typography>
                </TableCell>

                <TableCell
                  className="w-200 p-20"
                  component="th"
                  scope="row"
                >
                  <img
                    className="w-full block rounded"
                    src={n.back.url}
                    alt={n.back.description}
                  />
                  <Typography className={classes.text}>{n.back.description}</Typography>
                </TableCell>
                <TableCell
                  className="w-200 p-20"
                  component="th"
                  scope="row"
                >
                  <img
                    className="w-180 block rounded h-300"
                    src={n.selfie.url}
                    alt={n.selfie.url}
                  />
                </TableCell>
                <TableCell component="th" scope="row" className="w-400 p-20">
                  <Typography className={classes.text}>Name: {n.ocr.name}</Typography>
                  <Typography className={classes.text}>DOB: {n.ocr.dob}</Typography>
                  <Typography className={classes.text}>Gender: {n.ocr.gender}</Typography>
                  <Typography className={classes.text}>Address: {n.ocr.address}</Typography>
                  <Typography className={classes.text}>Hometown: {n.ocr.hometown}</Typography>
                  <Typography className={classes.text}>Issue place: {n.ocr.place}</Typography>
                </TableCell>
                <TableCell component="th" scope="row" className="w-200 p-20">
                  <Typography className={classes.text}>Fimilarity: {n.faceMaching}</Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      <TablePagination
        className="overflow-hidden"
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div></div>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
	text: {
		fontSize: "14px",
    paddingTop: "5px"
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
      border: "1px rgba(113, 104, 104, 0.87) solid"
    },
    "& .MuiFormControl-root": {
      marginRight: "10px"
    },
    "& .MuiInputBase-input": {
      fontSize: "14px",
    },
    "& .MuiInputBase-root": {
      width: "100px"
    }
  }
}));

export default ProductsTable
