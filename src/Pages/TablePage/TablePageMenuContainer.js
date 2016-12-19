import {connect} from 'react-redux'
import TablePageMenu from './TablePageMenu'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleActions: {
      closeMenu: () => dispatch({type: 'TOGGLE_MENU'}),
      toggleTitle: () => dispatch({type: 'TOGGLE_TITLE'}),
      toggleHeader: () => dispatch({type: 'TOGGLE_HEADER'}),
      toggleEnum: () => dispatch({type: 'TOGGLE_ENUM'}),
      toggleDescription: () => dispatch({type: 'TOGGLE_DESCRIPTION'}),
      toggleComments: () => dispatch({type: 'TOGGLE_COMMENTS'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePageMenu)