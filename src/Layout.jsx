import * as React from 'react'
import NavbarContainer from 'navbar/NavbarContainer'
import Footer from './Footer'
import 'styles/page'
import 'styles/table'

const Layout = ({children}) => (
  <div id="layout">
    <div className="content">
      <NavbarContainer/>
      <div className="page" style={{padding: "40px 40px 0 40px"}}>
        {children}
      </div>
    </div>
    <Footer/>
  </div>
)

export default Layout