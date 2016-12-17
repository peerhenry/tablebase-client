import TableHeaderCell from './TableHeaderCell'

const TableHeader = ({displaySettings}) => (
  <thead>
    <tr>
      {displaySettings.get('showEnumeration') ? <th>#</th> : ""}
      <TableHeaderCell text={"Make"}/>
      <TableHeaderCell text={"Model"}/>
      <TableHeaderCell text={"Year"}/>
    </tr>
  </thead>
)

export default TableHeader