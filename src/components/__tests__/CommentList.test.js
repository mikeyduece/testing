// Dependencies
import React       from 'react'
import { mount }   from 'enzyme'
// Components
import Root        from 'Root'
import CommentList from 'components/CommentList'

let component

beforeEach(() => {
  const initialState = {
    comments: ['Comment 1', 'Comment 2']
  }

  component = mount(
    <Root initialState={ initialState }>
      <CommentList />
    </Root>
  )
})

it('creates one li per comment', () => {
  const listElements = component.find('li')

  expect(listElements.length).toEqual(2)
})

it('shows text for each comment', () => {
  expect(component.render().text()).toContain('Comment 1')
  expect(component.render().text()).toContain('Comment 2')
})
