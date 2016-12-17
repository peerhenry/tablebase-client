import * as React from 'react'

const Navbar = ({name, target}) => {
  return (
    <a href={target} className="pure-menu-link">{name}</a>
  )
};

export default Navbar;