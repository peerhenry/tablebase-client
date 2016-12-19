import Panel from 'pageComponents/Panel'

const Description = ({text}) => (
  <div>
    <div style={{height: "30px"}}></div>
    <Panel>
      <p>{text}</p>
    </Panel>
  </div>
)

export default Description