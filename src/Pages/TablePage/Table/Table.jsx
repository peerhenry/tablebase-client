import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = () => (
  <table className="pure-table pure-table-bordered" style={{display: "inline-block", marginBottom: "-4px"}}>
    <TableHeader/>
    <TableBody/>
  </table>
)

export default Table