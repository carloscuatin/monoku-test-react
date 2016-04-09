import * as ActionTypes from '../actions'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const initialState = { list: [], pageLinks: null, gist: {} }

function gists(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_GISTS:
      return {
        list: action.list,
        pageLinks: action.pageLinks
      }
      break;
    case ActionTypes.ADD_SELECTED_GIST:
      return {
        gist: action.gist
      }
      break;
    default:
      return state
  }
}

const rootReducer = combineReducers({
  gists,
  routing
})

export default rootReducer
