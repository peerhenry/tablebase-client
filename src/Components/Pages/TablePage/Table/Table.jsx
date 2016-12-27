import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({displaySettings, table, tableManipulations}) => (
  <table className="pure-table pure-table-bordered editor-table" style={{display: "inline-block", marginBottom: "-4px"}}>
    <TableHeader displaySettings={displaySettings} header={table.get('header')} tableManipulations={tableManipulations}/>
    <TableBody displaySettings={displaySettings} rows={table.get('rows')} removeRow={tableManipulations.removeRow}/>
  </table>
)

export default Table