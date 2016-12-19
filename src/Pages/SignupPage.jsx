import Panel from 'pageComponents/Panel'

const SignupPage = () => (
  <div id="signup-page">
    <div className="container">
      <Panel>
        <center>
          <h1>Sign up now - it's free!</h1>
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
      
              <div className="pure-control-group">
                <label for="foo">Retype Password</label>
                <input id="foo" type="text" placeholder="Password"/>
              </div>

              <div className="pure-control-group">
                <label for="email">Email Address</label>
                <input id="email" type="email" placeholder="Email Address"/>
              </div>
      
              <div className="pure-controls">
                <label for="cb" className="pure-checkbox">
                  <input id="cb" type="checkbox"/> I've read the terms and conditions
                </label>
    
                <button type="submit" className="pure-button pure-button-primary">Submit</button>
              </div>
            </fieldset>
          </form>
        </center>
      </Panel>
    </div>
  </div>
)

export default SignupPage