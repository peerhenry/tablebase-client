import * as React from 'react'
import TableRow from './TableRow'

const demList = [1,2,3,4]

const TableBody = () => (
  <tbody>
    {demList.map((x, i) => <TableRow key={i+1} index={i+1}/>)}
  </tbody>
)

export default TableBody