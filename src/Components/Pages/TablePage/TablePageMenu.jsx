import 'styles/menu'
import MenuItemButton from 'menu/MenuItemButton'
import MenuItemLink from 'menu/MenuItemLink'

const TablePageMenu = ({toggleActions}) => (
  <div id="menu">
    <div className="pure-menu">
      <div className="pure-menu-heading" style={{position: "relative"}}>
        <span>
          Menu
        </span>
        <button
          className="pure-button pure-menu-link" 
          style={{right: "0", position: "absolute", top: "50%", transform: "translateY(-50%)"}} 
          onClick={toggleActions.closeMenu}>
          ×
        </button>
      </div>
      <ul className="pure-menu-list">
        <MenuItemButton text="Title" onClick={toggleActions.toggleTitle}/>
        <MenuItemButton text="Header" onClick={toggleActions.toggleHeader}/>
        <MenuItemButton text="Enumeration" onClick={toggleActions.toggleEnum}/>
        <MenuItemButton text="Description" onClick={toggleActions.toggleDescription}/>
        <MenuItemButton text="Comments" onClick={toggleActions.toggleComments}/>
      </ul>
    </div>
  </div>
)

export default TablePageMenu