import TableCellContainer from './TableCellContainer'

const TableRow = ({index, displaySettings, row}) => (
  <tr>
    {displaySettings.get('showEnumeration') ? <td>{index}</td> : ""}
    {row.map((cell, i) => <TableCellContainer text={cell} rowNr={index-1} colNr={i}/>)}
  </tr>
)

export default TableRow