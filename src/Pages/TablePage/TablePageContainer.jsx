import {connect} from 'react-redux'
import TablePage from './TablePage'

const mapStateToProps = (state, ownProps) => {
  let resultProp = state.get('tablePageState')
  if(ownProps.params.tableId){
    return {
      // fetch table from server
      tablePageState: resultProp.setIn(['table', 'title'], ownProps.params.tableId)
    }
  }
  return {
    tablePageState: resultProp
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showMenu: () => dispatch({type: 'TOGGLE_MENU'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage)