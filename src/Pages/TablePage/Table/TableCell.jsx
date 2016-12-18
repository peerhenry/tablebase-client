const TableCell = ({text, rowNr, colNr, updateCell}) => {

  let inputTag;
  let changed = false;

  const setInputTag = (node, text) => {
    if(node) inputTag = node
    if(inputTag) inputTag.value = text
  }

  return (
  <td className="table-cell-input" style={{padding: "0"}}>
    <input 
      type="text" 
      style={{border: "none", height: "100%", width: "100%", padding: "0 10px 0 10px"}}
      ref = {node => setInputTag(node, text)}
      onKeyDown = {e => {
        changed = true;
      }}
      onBlur = {e => {
        e.preventDefault(); 
        if(changed) updateCell(inputTag.value)
      }}
    />
  </td>
)}
// used to be defaultValue
export default TableCell