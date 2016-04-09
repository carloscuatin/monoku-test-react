import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import _ from 'lodash'
import Gist from '../components/gist'
import * as Actions from '../actions'

function loadData (props, url) {
  const { dispatch } = props;
  dispatch(Actions.fetchGists(url));
}
class PageGists extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.backPage = this.backPage.bind(this)
  }

  componentWillMount() {
    const { list } = this.props
    if (_.isEmpty(list)) {
      loadData(this.props)
    }
  }

  nextPage() {
    const { pageLinks } = this.props
    loadData(this.props, pageLinks.nextLink)
  }

  backPage() {
    const { pageLinks } = this.props
    loadData(this.props, pageLinks.backLink)
  }

  render() {
    const styles = {
      link: {
        color: 'black'
      }
    }

    const { list, pageLinks } = this.props
    if(_.isEmpty(list)) {
      return <h1>Loading...</h1>
    }
    return(
      <div>
        { pageLinks.backLink ? <button onClick={this.backPage}>Atras</button> : null }
        { pageLinks.nextLink ? <button onClick={this.nextPage}>Siguiente</button> : null }
        <hr />
        <br />
        {
          list.map((res, i) => {
            return(
              <Link key={i} to={`/gist/${res.id}`} style={styles.link}>
                <Gist {...res} />
                <hr />
              </Link>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { list, pageLinks } = state.gists;
  return {
    list,
    pageLinks
  }
}

export default connect(mapStateToProps)(PageGists)
