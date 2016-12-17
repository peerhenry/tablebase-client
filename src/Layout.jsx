import * as React from 'react'
import NavbarContainer from 'navbar/NavbarContainer'
import Footer from './Footer'
import TablePageContainer from 'pages/TablePage/TablePageContainer'
import SearchPage from 'pages/SearchPage'
import SignupPage from 'pages/SignupPage'
import LoginPage from 'pages/LoginPage'
import 'styles/page'
import 'styles/table'
import {Router, Route, hashHistory} from 'react-router'

const Layout = () => (
  <div id="layout">
    <div className="content">
      <NavbarContainer/>
      <div className="page" style={{padding: "40px 40px 0 40px"}}>
        <Router history={hashHistory}>
          <Route path="/" component={TablePageContainer} />
          <Route path="/search" component={SearchPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </div>
    </div>
    <Footer/>
  </div>
)

export default Layout