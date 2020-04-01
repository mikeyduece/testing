import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH
}               from 'actions/types'
import comments from 'apiClients/comments'
import history  from '../history'

export const saveComment = comment => dispatch => {
  dispatch({ type: SAVE_COMMENT, payload: comment })
  history.push('/')
}

export const fetchComments = () => async dispatch => {
  const response = await comments.get('/comments')

  dispatch({ type: FETCH_COMMENTS, payload: response.data })
  history.push('/')
}

export const changeAuth = isLoggedIn => dispatch => {
  dispatch({ type: CHANGE_AUTH, payload: isLoggedIn })
}