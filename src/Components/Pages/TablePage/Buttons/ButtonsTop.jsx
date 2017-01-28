const ButtonsTop = ({displaySettings, header, tableManipulations}) => (
  <tr className="button-revealer no-border-left" style={{padding: 0, border: "none", backgroundColor: "transparent", height: "20px"}}>

    <td className="invisible-td"></td>

    {displaySettings.get('showEnumeration') ? <td className="invisible-td">&#8290;</td> : ""}
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