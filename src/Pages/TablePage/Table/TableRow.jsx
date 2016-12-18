import TableCell from './TableCell'

const TableRow = ({index, displaySettings, row}) => (
  <tr>
    {displaySettings.get('showEnumeration') ? <td>{index}</td> : ""}
    {row.map((cell, i) => <TableCell text={cell} key={"" + index + "" + i}/>)}
  </tr>
)

export default TableRow