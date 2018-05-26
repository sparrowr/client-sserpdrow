'use strict'

let apiUrl
const apiUrls = {
  production: 'https://whispering-wildwood-28696.herokuapp.com/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
