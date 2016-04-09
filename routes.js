import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import PageGist from './containers/PageGist'
import PageGists from './containers/PageGists'

const NotFound = () => <h1>NotFound</h1>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PageGists} />
    <Route path="/gist/:id" component={PageGist} />
    <Route path="*" component={NotFound} />
  </Route>
)
