import React, { useEffect, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Typography from '@material-ui/core/Typography'
// import clsx from 'clsx'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as Actions from '../../stores/actions'
import ProductsTableHead from './ProductsTableHead'
import { ProductType } from '../../types'

const ProductsTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
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

  console.log(products)
  return (
    <div className="w-full flex flex-col">
      <Table className="min-w-xl" aria-labelledby="tableTitle">
        <ProductsTableHead />

        <TableBody>
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
                <TableCell component="th" scope="row">
                  <Typography>Client: {n.request.client}</Typography>
                  <Typography>{n.request.date}</Typography>
                  <Typography>Client: {n.request.status}</Typography>
                  <Typography>Decision: {n.request.decision}</Typography>
                  <Typography>CS Decision: {n.request.csDescision}</Typography>
                  <Typography>ID Similarity</Typography>
                  <Typography>Selfie Similarity</Typography>
                </TableCell>
                <TableCell
                  className="w-52"
                  component="th"
                  scope="row"
                  padding="none"
                >
                  <img
                    className="w-full block rounded"
                    src={n.front.url}
                    alt={n.front.description}
                  />
                  <Typography>{n.front.description}</Typography>
                </TableCell>

                <TableCell
                  className="w-52"
                  component="th"
                  scope="row"
                  padding="none"
                >
                  <img
                    className="w-full block rounded"
                    src={n.back.url}
                    alt={n.back.description}
                  />
                  <Typography>{n.back.description}</Typography>
                </TableCell>
                <TableCell
                  className="w-52"
                  component="th"
                  scope="row"
                  padding="none"
                >
                  <img
                    className="w-full block rounded"
                    src={n.selfie.url}
                    alt={n.selfie.url}
                  />
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography>Name: {n.ocr.name}</Typography>
                  <Typography>DOB: {n.ocr.dob}</Typography>
                  <Typography>Gender: {n.ocr.gender}</Typography>
                  <Typography>Address: {n.ocr.address}</Typography>
                  <Typography>Hometown: {n.ocr.hometown}</Typography>
                  <Typography>Issue place: {n.ocr.place}</Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  <Typography>Fimilarity: {n.faceMaching}</Typography>
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
    </div>
  )
}

export default ProductsTable
