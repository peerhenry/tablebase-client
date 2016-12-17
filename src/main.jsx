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
      title: "Initial Title"
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