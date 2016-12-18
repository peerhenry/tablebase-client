import TableCell from './TableCell'

const TableRow = ({index, displaySettings, row}) => (
  <tr>
    {displaySettings.get('showEnumeration') ? <td>{index}</td> : ""}
    {row.map(cell => <TableCell text={cell}/>)}
  </tr>
)

export default TableRow