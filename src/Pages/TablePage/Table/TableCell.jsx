const TableCell = ({text}) => (
  <td className="table-cell-input" style={{padding: "0"}}>
    <input 
      type="text" 
      style={{border: "none", height: "100%", width: "100%", padding: "0 10px 0 10px"}}
      ref = {node => {if(node) node.value = text}}
    />
  </td>
)
// used to be defaultValue
export default TableCell