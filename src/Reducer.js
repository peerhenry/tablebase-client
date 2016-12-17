const toggleDisplaySetting = (state, setting) => {
  const target = ['tablePageState', 'displaySettings', setting]
  const oldVal = state.getIn(target)
  return state.setIn(target, !oldVal)
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
  }
  return state
}

export default Reducer;