import {connect} from 'react-redux'
import TableWrapper from './TableWrapper'

const mapStateToProps = (state) => {
  return {
    table: state.get('tablePageState').get('table'),
    displaySettings: state.get('tablePageState').get('displaySettings')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tableManipulations: {
      addRow: () => {dispatch({type: 'ADD_ROW'})},
      addColumn: () => {dispatch({type: 'ADD_COLUMN'})}
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper)