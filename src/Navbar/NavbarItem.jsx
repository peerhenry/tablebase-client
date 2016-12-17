import * as React from 'react'
import NavbarLink from './NavbarLink'

const Navbar = ({name, target}) => (
  <li className="pure-menu-item">
    <NavbarLink name={name} target={target}/>
  </li>
)

export default Navbar;