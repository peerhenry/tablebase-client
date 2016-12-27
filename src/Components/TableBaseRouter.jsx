import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import Layout from './Layout'
import TablePageContainer from 'pages/TablePage/TablePageContainer'
import SearchPage from 'pages/SearchPage'
import SignupPage from 'pages/SignupPage'
import LoginPage from 'pages/LoginPage'
import Legal from 'pages/Legal/Legal'
import Privacy from 'pages/Legal/Privacy'

const TableBaseRouter = () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={TablePageContainer} />
      <Route path="search" component={SearchPage} />
      <Route path="signup" component={SignupPage} />
      <Route path="login" component={LoginPage} />
      <Route path="legal" component={Legal} />
      <Route path="privacy" component={Privacy} />
      <Route path=":tableId" component={TablePageContainer} />
    </Route>
  </Router>
)

export default TableBaseRouter;