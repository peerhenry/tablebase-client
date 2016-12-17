import * as React from 'react'
import Table from './Table'
import Description from './Description'
import Comments from './Comments'

const TablePage = () => (
  <div id="table-page">
    <h1>TABLE Title</h1>
    <Table/>
    <Description/>
    <Comments/>
  </div>
)

export default TablePage