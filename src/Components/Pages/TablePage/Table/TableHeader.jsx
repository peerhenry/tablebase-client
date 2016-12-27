import TableHeaderCellContainer from './TableHeaderCellContainer'
import ButtonsTop from 'tableButtons/ButtonsTop'

const TableHeader = ({displaySettings, header, tableManipulations}) => (
  <thead style={{backgroundColor: "transparent"}}>

    <ButtonsTop displaySettings={displaySettings} header={header} tableManipulations={tableManipulations}/>

    {displaySettings.get('showHeader') ? 
    <tr className="no-border-left" style={{backgroundColor: "transparent"}}>

      <td style={{padding: 0, background: "transparent", borderTopWidth: 0, borderLeft: "none"}}></td>

      {displaySettings.get('showEnumeration') ? <th>#</th> : ""}
      {header.map((cell, i) => (<TableHeaderCellContainer text={cell} colNr={i}/>))}
    </tr>
    : ""}
  </thead>
)

export default TableHeader