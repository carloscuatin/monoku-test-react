import React from 'react'
import _ from 'lodash'

const GistDetail = props => {
  let files = []
  Object.keys(props.files).forEach(i => {
    files.push(i)
  })
  return(
    <div>
      <a href={props.html_url} target="_blank">Link to github</a>
      <hr />
      <h3>Files:</h3>
      { files.map((res, i) => {
        return (
          <div key={i}>
            <a href={props.files[res].raw_url} target="_blank">
              {res}
            </a>
            <br />
          </div>
        )
      })}
    </div>
  )
}

export default GistDetail
