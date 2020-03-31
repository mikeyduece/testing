import {
  SAVE_COMMENT,
  FETCH_COMMENTS
}               from 'actions/types'
import comments from 'apiClients/comments'

export const saveComment = comment => {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

export const fetchComments = () => async dispatch => {
  const response = await comments.get('/comments')

  dispatch({ type: FETCH_COMMENTS, payload: response.data })
}