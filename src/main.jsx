import * as React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import {fromJS} from 'immutable'
import {Router, Route, hashHistory, IndexRoute} from 'react-router'

import Reducer from './Reducer'
import TableBaseRouter from './Components/TableBaseRouter'
import Footer from './Components/Footer'
import 'styles/main'
import {startObject} from './InitialState'

const initialState = fromJS(startObject)
let store = createStore(Reducer, initialState)

const Main = () => (
  <Provider store={store}>
    <TableBaseRouter/>
  </Provider>
)

render(<Main/>, document.getElementById('app'));
render(<Footer/>, document.getElementById('footer'));