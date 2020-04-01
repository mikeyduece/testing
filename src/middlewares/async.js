export default ({ dispatch }) => next => action => {
//  Check to see if the action has a promise on its 'payload' prop
//  If it does, wait for it to resolve
//  If it doesn't, send to next middleware
  if (!action.payload || !action.payload.then) {
    return next(action)
  }
//  Wait for promise to resolve(get its data!) and
//  create new action with the date and dispatch is
  action.payload.then(response => {
    const newAction = { ...action, payload: response }
    dispatch(newAction)
  })
}

