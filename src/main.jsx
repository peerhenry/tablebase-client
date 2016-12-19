import * as React from 'react'
import {render} from 'react-dom'
import Layout from './Layout'
import {createStore} from 'redux'
import Reducer from './Reducer'
import { Provider } from 'react-redux'
import {fromJS} from 'immutable'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import TablePageContainer from 'pages/TablePage/TablePageContainer'
import SearchPage from 'pages/SearchPage'
import SignupPage from 'pages/SignupPage'
import LoginPage from 'pages/LoginPage'

const initialState = fromJS({
  tablePageState: {
    table: {
      title: "Initial Title",
      header: ["Maker", "Model", "Year"],
      rows: [
        // ['A1', 'B1', 'C1'],
        // ['A2', 'B2', 'C2'],
        // ['A3', 'B3', 'C3'],
        // ['A4', 'B4', 'C4']
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      description: 'This is the description for the table.'
    },
    displaySettings: {
      showTitle: true,
      showHeader: true,
      showEnumeration: true,
      showDescription: true,
      showComments: true,
      showMenu: false
    }
  }
})

let store = createStore(Reducer, initialState)

const Main = () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={TablePageContainer} />
        <Route path="search" component={SearchPage} />
        <Route path="signup" component={SignupPage} />
        <Route path="login" component={LoginPage} />
        <Route path=":tableId" component={TablePageContainer} />
      </Route>
    </Router>
  </Provider>
)

render(<Main/>, document.getElementById('app'));