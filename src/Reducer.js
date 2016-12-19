import {fromJS} from 'immutable'

const rowsTarget = ['tablePageState', 'table', 'rows']
const headerTarget = ['tablePageState', 'table', 'header']

const toggleDisplaySetting = (state, setting) => {
  const target = ['tablePageState', 'displaySettings', setting]
  const oldVal = state.getIn(target)
  return state.setIn(target, !oldVal)
}

const addRow = (state) => {
  let nrOfColumns = state.getIn(headerTarget).size
  let rows = state.getIn(rowsTarget).toArray();
  let newRow = []
  for(var i = 0; i<nrOfColumns; i++) newRow[i] = ""
  rows.push(newRow);
  return state.setIn(rowsTarget, fromJS(rows));
}

const addColumn = (state) => {
  const header = state.getIn(headerTarget)
  const newHeader = header.push("" + (header.size+1))
  let rows = state.getIn(rowsTarget)
  const newState1 = state.setIn(rowsTarget, rows.map(row => row.push("")))
  return newState1.setIn(headerTarget, newHeader)
}

const removeRow = (state, i) => {
  let newRows = state.getIn(rowsTarget).delete(i)
  return state.setIn(rowsTarget, newRows)
}

const removeColumn = (state, i) => {
  const newState = transformRows(state, row => row.delete(i))
  return newState
}

const popRow = (state) => {
  let newRows = state.getIn(rowsTarget).pop()
  return state.setIn(rowsTarget, newRows)
}

const popColumn = (state) => {
  return transformRows(state, row => row.pop())
}

const transformRows = (state, transform) => {
  let newHeader = transform(state.getIn(headerTarget))
  let newRows = state.getIn(rowsTarget).map(transform)
  const tempState = state.setIn(headerTarget, newHeader)
  return tempState.setIn(rowsTarget, newRows)
}

const updateCell = (state, payload) => {
  const row = state.getIn(rowsTarget).get(payload.rowNr)
  console.log('updating cell: ' + JSON.stringify(payload))
  //return state
  return state.setIn(['tablePageState', 'table', 'rows', payload.rowNr, payload.colNr], payload.text)
}

const updateHeader = (state, payload) => {
  return state.setIn(['tablePageState', 'table', 'header', payload.colNr], payload.text)
}

const Reducer = (state, action) => {
  switch(action.type){
    case 'TOGGLE_MENU':
      return toggleDisplaySetting(state, 'showMenu')
    case 'TOGGLE_TITLE':
      return toggleDisplaySetting(state, 'showTitle')
    case 'TOGGLE_HEADER':
      return toggleDisplaySetting(state, 'showHeader')
    case 'TOGGLE_ENUM':
      return toggleDisplaySetting(state, 'showEnumeration')
    case 'TOGGLE_DESCRIPTION':
      return toggleDisplaySetting(state, 'showDescription')
    case 'TOGGLE_COMMENTS':
      return toggleDisplaySetting(state, 'showComments')
    case 'ADD_ROW':
      return addRow(state)
    case 'ADD_COLUMN':
      return addColumn(state)
    case 'REMOVE_ROW':
      return removeRow(state, action.payload)
    case 'REMOVE_COLUMN':
      return removeColumn(state, action.payload)
    case 'POP_ROW':
      return popRow(state)
    case 'POP_COLUMN':
      return popColumn(state)
    case 'UPDATE_CELL':
      return updateCell(state, action.payload)
    case 'UPDATE_HEADER':
      return updateHeader(state, action.payload)
  }
  return state
}

export default Reducer;