import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({displaySettings}) => (
  <table className="pure-table pure-table-bordered" style={{display: "inline-block", marginBottom: "-4px"}}>
    {displaySettings.get('showHeader') ? <TableHeader displaySettings={displaySettings}/> : ""}
    <TableBody displaySettings={displaySettings}/>
  </table>
)

export default Table