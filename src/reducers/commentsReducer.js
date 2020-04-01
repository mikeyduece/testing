import {
  SAVE_COMMENT,
  FETCH_COMMENTS
}              from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload, ...state]
    case FETCH_COMMENTS:
      const comments = action.payload.map(comment => comment.name)

      return [...state, ...comments]
    default:
      return state
  }
}