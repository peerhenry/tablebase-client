import TableCellContainer from './TableCellContainer'

const TableRow = ({rowNr, displaySettings, row, removeRow}) => (
  <tr>

    <td style={{padding: 0, width: "20px"}}>
      <button 
        className="pure-button table-button"
        style={{padding: 0, width: "20px", height: "36px"}}
        onClick={e => {e.preventDefault(); console.log('removing row index: ' + rowNr); removeRow(rowNr)}}>
        ×
      </button>
    </td>

    {displaySettings.get('showEnumeration') ? <td>{rowNr+1}</td> : ""}
    {row.map((cell, i) => <TableCellContainer text={cell} rowNr={rowNr} colNr={i}/>)}
  </tr>
)

export default TableRow

/*
<button className="pure-button table-button" style={{width: "20px"}}>
        ×
      </button>*/