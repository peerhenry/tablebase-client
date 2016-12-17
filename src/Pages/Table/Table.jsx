import * as React from 'react'

const Table = () => (
  <div id="tableWrapper" style={{textAlign: "center", position: "relative"}}>

    <div style={{display: "inline-block", marginBottom: "-20px"}}>
      <table className="pure-table pure-table-bordered" style={{display: "inline-block", marginBottom: "-4px"}}>
        <thead>
          <tr>
            <th>#</th><th>Make</th><th>Model</th><th>Year</th>
          </tr>
        </thead>
        <tbody style={{}}>
          <tr>
            <td>1</td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>2</td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>3</td><td></td><td></td><td></td>
          </tr>
          <tr>
            <td>4</td><td></td><td></td><td></td>
          </tr>
        </tbody>
      </table>
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

export default Table