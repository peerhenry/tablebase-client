const TableHeaderCell = ({text, updateHeaderCell}) => {
  let inputTag;
  let changed = false;

  const setInputTag = (node, text) => {
    if(node) inputTag = node
    if(inputTag) inputTag.value = text
  }

return (
  <th style={{padding: "0"}}>
    <input 
      type="text"
      style={{border: "none", height: "100%", width: "100%", padding: "0 10px 0 10px", background: "none"}}
      ref = {node => setInputTag(node, text)}
      onKeyDown = {e => {
        changed = true;
      }}
      onBlur = {e => {
        e.preventDefault(); 
        if(changed) updateHeaderCell(inputTag.value);
      }}
      />
  </th>
)}

export default TableHeaderCell