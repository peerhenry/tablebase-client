import * as React from 'react'
import MenuItemButton from 'menu/MenuItemButton'
import MenuItemLink from 'menu/MenuItemLink'
import "styles/navbar.scss"

const Navbar = ({toggleMenu}) => {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <a href="#" className="pure-menu-heading pure-menu-link" style={{fontWeight: "bold"}}>TABLEBASE</a>
      <ul className="pure-menu-list">
        <MenuItemButton text={"Menu"} onClick={toggleMenu}/>
        <MenuItemLink text={"Search"} target={"#/search"} />
      </ul>
      <ul className="pure-menu-list" style={{float: "right"}}>
        <MenuItemLink text={"Sign Up"} target={"#/signup"}/>
        <MenuItemLink text={"Log In"} target={"#/login"}/>
      </ul>
    </div>
  )
};

export default Navbar;