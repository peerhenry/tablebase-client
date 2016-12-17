import * as React from 'react'
import Table from './Table/Table'

const TableWrapper = ({displaySettings}) => (
  <div id="tableWrapper" style={{textAlign: "center", position: "relative"}}>

    <div style={{display: "inline-block", marginBottom: "-20px"}}>
      <Table displaySettings={displaySettings}/>
      <div className="button-revealer" style={{width: "100%", height: "20px"}}>
        <button className="pure-button table-button" style={{width: "100%", height: "20px", padding: "2px"}}>+</button>
      </div>
    </div>

    <div id="floating" style={{position: "absolute", display: "inline-block", verticalAlign: "top", height: "calc(100% - 20px)"}}>
      <div className="button-revealer" style={{height: "100%", width: "20px", padding: "0"}}>
        <button className="pure-button table-button" style={{height: "100%", width: "20px", padding: "5px"}}>+</button>
      </div>
    </div>

  </div>
)

export default TableWrapper