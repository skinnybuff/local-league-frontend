'use strict'
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const event = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // connect the sign up btn to the sign function
  $('#sign-up').on('submit', event.onSignUp)
  //connenct the sign in btn to the sign in function
  $('#sign-in').on('submit', event.onSignIn)
})
