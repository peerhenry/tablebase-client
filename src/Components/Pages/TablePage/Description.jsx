import Panel from 'pageComponents/Panel'

const Description = ({text}) => (
  <div>
    <div style={{height: "30px"}}></div>
    <Panel>
      <p className="bold">Description:</p>
      <p>{text}</p>
    </Panel>
  </div>
)

export default Description