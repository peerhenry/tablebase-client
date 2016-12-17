import TableHeaderCell from './TableHeaderCell'

const TableHeader = () => (
  <thead>
    <tr>
      <th>#</th>
      <TableHeaderCell text={"Make"}/>
      <TableHeaderCell text={"Model"}/>
      <TableHeaderCell text={"Year"}/>
    </tr>
  </thead>
)

export default TableHeader