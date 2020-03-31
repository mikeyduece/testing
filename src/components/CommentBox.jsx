// Dependencies
import React, { useState } from 'react'
import { useDispatch }     from 'react-redux'
import {
  saveComment,
  fetchComments
}                          from 'actions'

export default () => {
  const [comment, setComment] = useState('')
  const dispatch = useDispatch()

  const handleChange = e => setComment(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const newComment = saveComment(comment)

    dispatch(newComment)
    setComment('')
  }

  const handleFetch = () => dispatch(fetchComments())

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <h4>Add Comment</h4>
        <textarea value={ comment } onChange={ handleChange } />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button id='fetch-comments' onClick={ handleFetch }>Fetch Comments</button>
    </div>
  )
}