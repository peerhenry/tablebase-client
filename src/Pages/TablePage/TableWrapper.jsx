import * as React from 'react'
import Table from './Table/Table'
import ButtonsBottom from './Buttons/ButtonsBottom'
import ButtonsRight from './Buttons/ButtonsRight'
import ButtonsLeft from './Buttons/ButtonsLeft'

const TableWrapper = ({displaySettings, table, tableManipulations}) => (
  <div id="tableWrapper" style={{textAlign: "center", position: "relative", marginBottom: "-4px"}}>

    <div style={{display: "inline-block"}}>
      <Table displaySettings={displaySettings} table={table} tableManipulations={tableManipulations}/>
      <ButtonsBottom tableManipulations={tableManipulations}/>
    </div>

    <div id="floating" style={{position: "absolute", display: "inline-block", verticalAlign: "top", top: "20px", height: "calc(100% - 39px)"}}>
      <ButtonsRight tableManipulations={tableManipulations}/>
    </div>

  </div>
)

export default TableWrapper