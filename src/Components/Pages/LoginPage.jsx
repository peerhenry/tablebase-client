import Panel from 'pageComponents/Panel'

const LoginPage = () => (
  <div id="login-page">
    <div className="container">
      <Panel>
        <center>
          <h1>Log In</h1>
          <form className="pure-form pure-form-aligned">
            <fieldset>
              <div className="pure-control-group">
                <label for="name">Username</label>
                <input id="name" type="text" placeholder="Username"/>
              </div>
      
              <div className="pure-control-group">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Password"/>
              </div>
      
            </fieldset>
            <button type="submit" className="pure-button pure-button-primary">Log In</button>
          </form>
        </center>
      </Panel>
    </div>
  </div>
)

export default LoginPage