import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const rows = [
  {
    id: 'image',
    align: 'left',
    disablePadding: true,
    label: 'Request ID',
    sort: false,
    className: 'w-200 p-10 font-normal',
  },
  {
    id: 'name',
    align: 'left',
    disablePadding: false,
    label: 'ID Font',
    sort: true,
    className: 'w-200 p-10 font-normal',
  },
  {
    id: 'categories',
    align: 'left',
    disablePadding: false,
    label: 'ID Back',
    sort: true,
    className: 'w-200 p-10 font-normal',
  },
  {
    id: 'priceTaxIncl',
    align: 'right',
    disablePadding: false,
    label: 'Selfie',
    sort: true,
    className: 'w-200 p-10 font-normal',
  },
  {
    id: 'quantity',
    align: 'right',
    disablePadding: false,
    label: 'ORC',
    sort: true,
    className: 'w-400 p-10 font-normal',
  },
  {
    id: 'active',
    align: 'right',
    disablePadding: false,
    label: 'Face Maching',
    sort: true,
    className: 'w-200 p-10 font-normal',
  },
]

const ProductsTableHead = () => {
  return (
    <TableHead>
      <TableRow className="h-64 bg-green-100">
        {rows.map((row) => {
          return (
            <TableCell
              key={row.id}
              align="left"
              padding="default"
              className={row.className}
            >
              {row.label}
            </TableCell>
          )
        }, this)}
      </TableRow>
    </TableHead>
  )
}

export default ProductsTableHead
