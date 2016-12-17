import * as React from 'react'
import TableRow from './TableRow'

const demList = [1,2,3,4]

const TableBody = ({displaySettings}) => (
  <tbody>
    {demList.map((x, i) => <TableRow key={i+1} index={i+1} displaySettings={displaySettings}/>)}
  </tbody>
)

export default TableBody