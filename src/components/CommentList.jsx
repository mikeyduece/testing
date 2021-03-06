// Dependencies
import React           from 'react'
import { useSelector } from 'react-redux'

export default () => {
  const comments = useSelector(state => state.comments)

  const renderComments = () => {
    return comments.map(comment => {
      return (
        <li key={ comment }>{ comment }</li>
      )
    })
  }

  return (
    <>
      <h4>Comment List</h4>
      <ul>
        { renderComments() }
      </ul>
    </>
  )
}