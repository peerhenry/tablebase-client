import * as React from 'react'
import TableWrapperContainer from './TableWrapperContainer'
import Description from './Description'
import CommentsPanel from './Comments/CommentsPanel'
import TableTitle from './TableTitle'
import TablePageMenuContainer from './TablePageMenuContainer'
import 'styles/bootstrap/bootstripped'

const TablePage = ({tablePageState, showMenu}) => (
  <div>
    <button className="pure-button pure-menu-link" onClick={(e) => {e.preventDefault(); showMenu()}} style={{textAlign: "left"}}>Menu</button>
    <div id="table-page">
      { tablePageState.get('displaySettings').get('showMenu') ? <TablePageMenuContainer/> : "" }
      { tablePageState.get('displaySettings').get('showTitle') ? <TableTitle title={tablePageState.getIn(['table', 'title'])}/> : ""} 
      <TableWrapperContainer/>
      <div className="container">
        { tablePageState.get('displaySettings').get('showDescription') ? <Description text={tablePageState.getIn(['table', 'description'])}/> : "" }
        { tablePageState.get('displaySettings').get('showComments') ? <CommentsPanel/> : "" }
      </div>
    </div>
  </div>
)

export default TablePage