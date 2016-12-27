const MenuItemButton = ({text, onClick}) => (
  <li className="pure-menu-item">
    <button className="pure-button pure-menu-link" onClick={(e) => {e.preventDefault(); onClick()}} style={{width: "100%", textAlign: "left"}}>{text}</button>
  </li>
)

export default MenuItemButton