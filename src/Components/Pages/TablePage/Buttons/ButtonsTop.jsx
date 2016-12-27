const ButtonsTop = ({displaySettings, header, tableManipulations}) => (
  <tr className="button-revealer no-border-left" style={{padding: 0, border: "none", backgroundColor: "transparent", height: "20px"}}>

    <td style={{padding: 0, borderBottomWidth: 0}}></td>

    {displaySettings.get('showEnumeration') ? <td style={{padding: 0, borderLeftWidth: 0}}>&#8290;</td> : ""}
    {header.map((cell, i) => (
      <td style={{padding: 0, border: "none", height: "20px"}}>
        <button 
          className="pure-button table-button table-button-horizontal"
          onClick={e => {e.preventDefault(); tableManipulations.removeColumn(i);}}>
          ×
        </button>
      </td>)
    )}
  </tr>
)

export default ButtonsTop