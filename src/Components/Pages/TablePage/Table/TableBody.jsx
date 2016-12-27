import * as React from 'react'
import TableRow from './TableRow'

const TableBody = ({displaySettings, rows, removeRow}) => (
  <tbody>
    {rows.map((row, i) => <TableRow key={i+1} rowNr={i} displaySettings={displaySettings} row={row} removeRow={removeRow}/>)}
  </tbody>
)

export default TableBody