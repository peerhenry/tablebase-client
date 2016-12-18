import {connect} from 'react-redux'
import TableCell from './TableCell'

const mapStateToProps = (state, ownProps) => {
return {
    text: ownProps.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
return {
    updateCell: (text) => dispatch({
      type: 'UPDATE_CELL',
      payload: {
        rowNr: ownProps.rowNr,
        colNr: ownProps.colNr,
        text
      }
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableCell)