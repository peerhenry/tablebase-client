import * as React from 'react'
import 'styles/menu'

const Menu = () => (
  <div id="menu">
    <div className="pure-menu">
      <a className="pure-menu-heading">Menu</a>
      <ul className="pure-menu-list">
        <li className="pure-menu item"><a className="pure-menu-link" href="#">Title</a></li>
        <li className="pure-menu item"><a className="pure-menu-link" href="#">Header</a></li>
        <li className="pure-menu item"><a className="pure-menu-link" href="#">Enumeration</a></li>
        <li className="pure-menu item"><a className="pure-menu-link" href="#">Rating</a></li>
        <li className="pure-menu item"><a className="pure-menu-link" href="#">Description</a></li>
        <li className="pure-menu item"><a className="pure-menu-link" href="#">Comments</a></li>
      </ul>
    </div>
  </div>
)

export default Menu