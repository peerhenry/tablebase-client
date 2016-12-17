import * as React from 'react'
import NavbarLink from './NavbarLink'

const Navbar = ({name}) => (
  <li className="pure-menu-item">
    <NavbarLink name={name}/>
  </li>
)

export default Navbar;