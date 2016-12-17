import * as React from 'react'
import NavbarItem from './NavbarItem'
import "styles/navbar.scss"

const Navbar = () => {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <a href="#" className="pure-menu-heading pure-menu-link" style={{fontWeight: "bold"}}>TABLEBASE</a>
      <ul className="pure-menu-list">
        <NavbarItem name={"Menu"} target={"#"} />
        <NavbarItem name={"Search"} target={"#/search"} />
      </ul>
      <ul className="pure-menu-list" style={{float: "right"}}>
        <NavbarItem name={"Sign Up"} target={"#/signup"}/>
        <NavbarItem name={"Log In"} target={"#/login"}/>
      </ul>
    </div>
  )
};

export default Navbar;