import Panel from 'pageComponents/Panel'

const Comments = () => (
  <Panel>
    <span style={{fontWeight: "bold"}}>Post a comment:</span>
    <textarea rows="4" cols="50" style={{resize: "none", boxSizing: "border-box", width: "100%", padding: "10px 5px 10px 5px"}}>
      At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.
    </textarea> 
  </Panel>
)

export default Comments