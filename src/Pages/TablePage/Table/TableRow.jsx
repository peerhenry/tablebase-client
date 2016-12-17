import TableCell from './TableCell'

const TableRow = ({index, displaySettings}) => (
  <tr>
    {displaySettings.get('showEnumeration') ? <td>{index}</td> : ""}
    <TableCell/>
    <TableCell/>
    <TableCell/>
  </tr>
)

export default TableRow