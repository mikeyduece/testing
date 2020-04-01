// Dependencies
import React, { Component } from 'react'
import { connect }          from 'react-redux'
import {
  Route,
  Link
}                           from 'react-router-dom'
// Components
import CommentBox           from 'components/CommentBox'
import CommentList          from 'components/CommentList'
import { changeAuth }       from '../actions'

class App extends Component {
  renderButton = () => {
    const {auth} = this.props
    const text = auth ? 'Sign Out' : 'Sign In'

    return (
      <button onClick={ () => this.props.changeAuth(!auth) }>
        { text }
      </button>
    )
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post</Link>
        </li>
        <li>
          { this.renderButton() }
        </li>
      </ul>
    )
  }

  render() {
    return (
      <>
        { this.renderHeader() }
        <Route path='/post' component={ CommentBox } />
        <Route exact path='/' component={ CommentList } />
      </>
    )
  }
}

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(
  mapStateToProps,
  { changeAuth }
)(App)