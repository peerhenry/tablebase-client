import * as React from 'react'
import Navbar from 'navbar/Navbar'
import Footer from './Footer'
import TablePage from 'pages/Table/TablePage'
import Menu from './Menu'
import 'styles/page'
import 'styles/table'

const Layout = () => (
  <div id="layout">
    <div className="content">
      <Navbar/>
      <Menu/>
      <div className="page">
        <TablePage/>
      </div>
    </div>
    <Footer/>
  </div>
)

export default Layout