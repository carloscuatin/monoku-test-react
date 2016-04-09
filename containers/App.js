import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class App extends Component {
  handleChange(nextValue) {
    browserHistory.push(`/${nextValue}`)
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <Link to="/"><h3>Public Gists</h3></Link>
        { children }
      </div>
    )
  }
}

export default connect()(App)
