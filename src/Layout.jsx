import * as React from 'react'
import Navbar from 'navbar/Navbar'
import Footer from './Footer'
import TablePage from 'pages/TablePage/TablePage'
import SearchPage from 'pages/SearchPage'
import SignupPage from 'pages/SignupPage'
import LoginPage from 'pages/LoginPage'
import Menu from './Menu'
import 'styles/page'
import 'styles/table'
import {Router, Route, hashHistory} from 'react-router'

const Layout = () => (
  <div id="layout">
    <div className="content">
      <Navbar/>
      <Menu/>
      <div className="page" style={{padding: "40px 40px 0 40px"}}>
        <Router history={hashHistory}>
          <Route path="/" component={TablePage} />
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