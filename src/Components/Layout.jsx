import * as React from 'react'
import NavbarContainer from 'navbar/NavbarContainer'

const Layout = ({children}) => (
  <div id="layout">
    <header>
      <NavbarContainer/>
    </header>
    {children}
  </div>
)

export default Layout