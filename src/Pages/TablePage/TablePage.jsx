import * as React from 'react'
import TableWrapperContainer from './TableWrapperContainer'
import Description from './Description'
import Comments from './Comments'
import TableTitle from './TableTitle'
import TablePageMenuContainer from './TablePageMenuContainer'

const TablePage = ({tablePageState}) => (
  <div id="table-page">
    { tablePageState.get('displaySettings').get('showMenu') ? <TablePageMenuContainer/> : "" }
    { tablePageState.get('displaySettings').get('showTitle') ? <TableTitle title={tablePageState.get('table').get('title')}/> : ""} 
    <TableWrapperContainer/>
    { tablePageState.get('displaySettings').get('showDescription') ? <Description/> : "" }
    { tablePageState.get('displaySettings').get('showComments') ? <Comments/> : "" }
  </div>
)

export default TablePage