import {connect} from 'react-redux'
import TableHeaderCell from './TableHeaderCell'

const mapStateToProps = (state, ownProps) => {
return {
    text: ownProps.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
return {
    updateHeaderCell: (text) => {
      dispatch({
        type: 'UPDATE_HEADER', 
        payload: {
          colNr: ownProps.colNr,
          text
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHeaderCell)