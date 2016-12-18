import * as React from 'react'
import TableRow from './TableRow'

const TableBody = ({displaySettings, rows}) => (
  <tbody>
    {rows.map((row, i) => <TableRow key={i+1} index={i+1} displaySettings={displaySettings} row={row}/>)}
  </tbody>
)

export default TableBody