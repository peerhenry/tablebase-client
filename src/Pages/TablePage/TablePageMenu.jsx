import 'styles/menu'
import MenuItemButton from 'menu/MenuItemButton'
import MenuItemLink from 'menu/MenuItemLink'

const TablePageMenu = ({toggleActions}) => (
  <div id="menu">
    <div className="pure-menu">
      <a className="pure-menu-heading">Menu</a>
      <ul className="pure-menu-list">
        <MenuItemButton text="Title" onClick={toggleActions.toggleTitle}/>
        <MenuItemButton text="Header" onClick={toggleActions.toggleHeader}/>
        <MenuItemButton text="Enumeration" onClick={toggleActions.toggleEnum}/>
        <MenuItemButton text="Description" onClick={toggleActions.toggleDescription}/>
        <MenuItemButton text="Comments" onClick={toggleActions.toggleComments}/>
        <MenuItemLink text="dummy" target="#"/>
      </ul>
    </div>
  </div>
)

export default TablePageMenu