import * as React from 'react'
import MenuItemButton from 'menu/MenuItemButton'
import MenuItemLink from 'menu/MenuItemLink'
import "styles/navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="#" className="base-nav-item">TABLEBASE</a>
        <label for="nav"><i className="fa fa-bars" aria-hidden="true"></i></label>
      </div>
      <input type="checkbox" id="nav"/>
      <ul>
        <MenuItemLink text={"Search"} target={"#/search"} />
      </ul>
      <ul style={{float: "right"}}>
        <MenuItemLink text={"Sign Up"} target={"#/signup"}/>
        <MenuItemLink text={"Log In"} target={"#/login"}/>
        <li className="rightli">
          <a href="http://www.github.com/peerhenry/tablebase-client" class="github-icon-link">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;