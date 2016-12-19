import {connect} from 'react-redux'
import TablePage from './TablePage'

const mapStateToProps = (state) => {
  return {tablePageState: state.get('tablePageState')}
}

const mapDispatchToProps = (dispatch) => {
  return {
    showMenu: () => dispatch({type: 'TOGGLE_MENU'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage)