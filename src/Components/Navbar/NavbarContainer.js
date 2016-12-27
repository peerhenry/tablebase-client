import {connect} from 'react-redux'
import Navbar from './Navbar'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    // toggleMenu: () => {
    //   dispatch({type: 'TOGGLE_MENU'})
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)