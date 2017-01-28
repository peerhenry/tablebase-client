import Panel from 'pageComponents/Panel'

const SignupPage = () => (
  <section id="signup-page">
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
            </fieldset>
            <p style={{color: "#999"}}>By proceeding to create an account, you are agreeing to our <a style={{color: "#999"}} href="#/legal">Terms of Service</a> and <a style={{color: "#999"}} href="#/privacy">Privacy Policy</a>.</p>
            <button type="submit" className="pure-button pure-button-primary">Create New Account</button>
          </form>
          <br/>
          <br/>
          <form className="pure-form pure-form-aligned">
            <p className="bold">Do you have a Google account?</p>
            <button className="pure-button pure-button-primary">Sign up with Google</button>
          </form>
          <br/>
          <br/>
          <p style={{color: "#999"}}>If you already have an account, please go to the <a style={{color: "#999"}} href="#/login">Log in page</a>.</p>
        </center>
      </Panel>
    </div>
  </section>
)

export default SignupPage