import * as React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {fromJS} from 'immutable'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Reducer from './Reducer'
import TableBaseRouter from './Components/TableBaseRouter'
import 'styles/main'

const initialState = fromJS({
  tablePageState: {
    table: {
      title: "Initial Title",
      header: ["Maker", "Model", "Year"],
      rows: [
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
    <TableBaseRouter/>
  </Provider>
)

render(<Main/>, document.getElementById('app'));