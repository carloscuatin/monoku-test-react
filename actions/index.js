import axios from 'axios';

// PagesUrls
// @arg link
function PageUrls(link) {
  if (!link) {
    return null
  }

  const allLink = link.split(',').find(s => s.indexOf('rel="last"') > -1)
  const backLink = link.split(',').find(s => s.indexOf('rel="prev"') > -1)
  const nextLink = link.split(',').find(s => s.indexOf('rel="next"') > -1)

  if (!allLink || !nextLink) {
    return null
  }

  return {
    allLink: allLink.split(';')[0].slice(2, -1),
    backLink: backLink ? backLink.split(';')[0].slice(2, -1) : null,
    nextLink: nextLink.split(';')[0].slice(1, -1)
  }
}

const baseURL = 'https://api.github.com'

// Actions Fetch Gists
export const ADD_GISTS = 'ADD_GISTS'

export function addGists(list, pageLinks) {
  return {
    type: ADD_GISTS,
    list,
    pageLinks
  };
}

export function fetchGists(url) {
  if (url === undefined) {
    url = `${baseURL}/gists/public`
  }
  return (dispatch) => {
    return axios.get(url)
      .then(res => {
        const pageLinks = PageUrls(res.headers.link)
        dispatch(addGists(res.data, pageLinks))
      }).catch(error => console.error(error));
  };
}

// Actions Fetch Gist
export const ADD_SELECTED_GIST = 'ADD_SELECTED_GIST'

export function addSelectedGist(gist) {
  return {
    type: ADD_SELECTED_GIST,
    gist
  };
}

export function getGistRequest(gist) {
  return (dispatch) => {
    return axios.get(`${baseURL}/gists/${gist}`)
    .then(res => dispatch(addSelectedGist(res.data)))
    .catch(error => console.error(error));
  };
}
