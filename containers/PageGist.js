import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Gist from '../components/gist'
import GistDetail from '../components/GistDetail'
import * as Actions from '../actions'

function loadData(props, id) {
  const { dispatch } = props;
  dispatch(Actions.getGistRequest(id));
}
class PageGist extends Component {
  componentWillMount() {
    const { id } = this.props.params
    loadData(this.props, id)
  }
  render() {
    const { gist } = this.props
    if(_.isEmpty(gist) === true) {
      return <h1>Loading...</h1>
    }
    return(
      <div>
        <Gist {...gist} />
        <GistDetail {...gist} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { gist } = state.gists;
  return {
    gist
  }
}

export default connect(mapStateToProps)(PageGist)
