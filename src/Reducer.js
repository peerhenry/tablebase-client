import {fromJS} from 'immutable'

const toggleDisplaySetting = (state, setting) => {
  const target = ['tablePageState', 'displaySettings', setting]
  const oldVal = state.getIn(target)
  return state.setIn(target, !oldVal)
}

const addRow = (state) => {
  let rowsTarget = ['tablePageState', 'table', 'rows']
  let nrOfColumns = state.getIn(['tablePageState', 'table', 'header']).size
  let rows = state.getIn(rowsTarget).toArray();
  let newRow = []
  for(var i = 0; i<nrOfColumns; i++) newRow[i] = ""
  rows.push(newRow);
  return state.setIn(rowsTarget, fromJS(rows));
}

const addColumn = (state) => {
  let headerTarget = ['tablePageState', 'table', 'header']
  let rowsTarget = ['tablePageState', 'table', 'rows']
  const newHeader = state.getIn(headerTarget).push("")
  let rows = state.getIn(rowsTarget)
  const newState1 = state.setIn(rowsTarget, rows.map(row => row.push("")))
  return newState1.setIn(headerTarget, newHeader);
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
  }
  return state
}

export default Reducer;