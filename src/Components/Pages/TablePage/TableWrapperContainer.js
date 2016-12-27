import {connect} from 'react-redux'
import TableWrapper from './TableWrapper'

const mapStateToProps = (state) => {
  return {
    table: state.getIn(['tablePageState', 'table']),
    displaySettings: state.get('tablePageState').get('displaySettings')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    tableManipulations: {
      addRow: () => {dispatch({type: 'ADD_ROW'})},
      addColumn: () => {dispatch({type: 'ADD_COLUMN'})},
      removeRow: (i) => {dispatch({type: 'REMOVE_ROW', payload: i})},
      removeColumn: (i) => {dispatch({type: 'REMOVE_COLUMN', payload: i})},
      popRow: () => {dispatch({type: 'POP_ROW'})},
      popColumn: (i) => {dispatch({type: 'POP_COLUMN'})}
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableWrapper)