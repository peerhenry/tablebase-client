import * as React from 'react'
import TableWrapper from './TableWrapper'
import Description from './Description'
import Comments from './Comments'
import TableTitle from './TableTitle'

const TablePage = () => (
  <div id="table-page">
    <TableTitle title="Dummy Title"/>
    <TableWrapper/>
    <Description/>
    <Comments/>
  </div>
)

export default TablePage