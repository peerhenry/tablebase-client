import TableCell from './TableCell'

const TableRow = ({index}) => (
  <tr>
    <td>{index}</td>
    <TableCell/>
    <TableCell/>
    <TableCell/>
  </tr>
)

export default TableRow