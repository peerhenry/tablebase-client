const PostAComment = () => (
  <div>
    <span className="bold">Post a comment:</span>
    <textarea 
      rows="4" cols="50" maxLength="500"
      placeholder = "Write your comment here..."
      style={{resize: "none", boxSizing: "border-box", width: "100%", padding: "10px 5px 10px 5px"}}>
    </textarea>
    <div>
      <button className="pure-button pure-button-primary" style={{float: "right", marginLeft: "8px"}}>Cancel</button>
      <button className="pure-button pure-button-primary" style={{float: "right"}}>Submit</button>
      <div style={{clear: "both"}}></div>
    </div>
  </div>
)

export default PostAComment