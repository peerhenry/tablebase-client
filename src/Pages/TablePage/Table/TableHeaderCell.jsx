const TableHeaderCell = ({text}) => (
  <th style={{padding: "0"}}>
    <input type="text" style={{border: "none", height: "100%", width: "100%", padding: "0 10px 0 10px", background: "none"}} defaultValue={text}/>
  </th>
)

export default TableHeaderCell