import TableHeaderCell from './TableHeaderCell'

const TableHeader = ({displaySettings, header}) => (
  <thead>
    <tr>
      {displaySettings.get('showEnumeration') ? <th>#</th> : ""}
      {header.map(cell => (<TableHeaderCell text={cell}/>))}
    </tr>
  </thead>
)

export default TableHeader