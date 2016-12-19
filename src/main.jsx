import * as React from 'react'
import {render} from 'react-dom'
import Layout from './Layout'
import {createStore} from 'redux'
import Reducer from './Reducer'
import { Provider } from 'react-redux'
import {fromJS} from 'immutable'

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
        ['', '', '']
      ]
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

render(<Provider store={store}><Layout/></Provider>, document.getElementById('app'));