import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({displaySettings, table}) => (
  <table className="pure-table pure-table-bordered" style={{display: "inline-block", marginBottom: "-4px"}}>
    {displaySettings.get('showHeader') ? <TableHeader displaySettings={displaySettings} header={table.get('header')}/> : ""}
    <TableBody displaySettings={displaySettings} rows={table.get('rows')}/>
  </table>
)

export default Table