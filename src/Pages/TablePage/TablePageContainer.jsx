import {connect} from 'react-redux'
import TablePage from './TablePage'

const mapStateToProps = (state) => {
  return {tablePageState: state.get('tablePageState')}
}

export default connect(mapStateToProps)(TablePage)