import commentsReducer  from 'reducers/commentsReducer'
import { SAVE_COMMENT } from 'actions/types'

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action)

  expect(newState.length).toEqual(1)
  expect(newState).toEqual(['New Comment'])
})

it('handles more than one SAVE_COMMENT action', () => {
  const actonOne = {
    type: SAVE_COMMENT,
    payload: 'New Commnent'
  }

  const actionTwo = {
    type: SAVE_COMMENT,
    payload: 'Another New Comment'
  }
  commentsReducer([], actonOne)
  const newStateTwo = commentsReducer(['New Comment'], actionTwo)

  expect(newStateTwo.length).toEqual(2)
  expect(newStateTwo).toEqual(['Another New Comment', 'New Comment',])
})

it('handles action with unknown type', () => {
  const newState = commentsReducer([], {type: 'NOT_A_REAL_ACTION_TYPE'})

  expect(newState).toEqual([])
})