import TableHeaderCell from './TableHeaderCell'
import ButtonsTop from 'tableButtons/ButtonsTop'

const TableHeader = ({displaySettings, header, tableManipulations}) => (
  <thead style={{backgroundColor: "transparent"}}>

    <ButtonsTop displaySettings={displaySettings} header={header} tableManipulations={tableManipulations}/>

    {displaySettings.get('showHeader') ? 
    <tr style={{backgroundColor: "#e0e0e0", color: "#000", borderTop: "1px solid #cbcbcb"}}>
      {displaySettings.get('showEnumeration') ? <th>#</th> : ""}
      {header.map(cell => (<TableHeaderCell text={cell}/>))}
    </tr>
    : ""}
  </thead>
)

export default TableHeader