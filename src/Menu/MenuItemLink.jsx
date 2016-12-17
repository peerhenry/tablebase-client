const MenuItemLink = ({text, target}) => (
  <li className="pure-menu-item">
    <a className="pure-menu-link" href={target}>{text}</a>
  </li>
)

export default MenuItemLink