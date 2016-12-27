const bottomButtonStyle = {
  width: "50%", 
  height: "20px", 
  display: "inline-block"
}

const BottomButtons = ({tableManipulations}) => (
  <div className="button-revealer" style={{display: "block", width: "100%-20px", height: "20px", marginLeft: "20px"}}>
    <div style={bottomButtonStyle}>
      <button 
        className="pure-button table-button table-button-horizontal"
        onClick={e => {e.preventDefault(); tableManipulations.popRow()}}>
        -
      </button>
    </div>
    <div style={bottomButtonStyle}>
      <button 
        className="pure-button table-button table-button-horizontal"
        onClick={e => {e.preventDefault(); tableManipulations.addRow()}}>
        +
      </button>
    </div>
  </div>
)

export default BottomButtons