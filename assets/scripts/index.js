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
  // hide the list of games from the start noly show on login signInSuccess
  $('#gamesDisplay').hide()
  // hide the sign up form until selected
  $('#signUpForm').hide()
  // connect the sign up btn to the sign function
  $('#signUpForm').on('submit', event.onSignUpRequest)
  // connect the sign in btn to the sign in function
  $('#signInForm').on('submit', event.onSignInRequest)
  // connect sign out form to sign out function
  $('#signOutForm').on('submit', event.onSignOutRequest)
  // hide sign out option until log in
  $('#signOutForm').hide()
  // if the signup link is pressed the form is displayed
  $('#signUpToggleBtn').on('click', () => {
    $('#signUpForm').show()
    $('#signUpToggleBtn').hide()
  })
  // hide creeate games form
  $('#gameCreateForm').hide()
  // hide update games form
  $('#gameUpdateForm').hide()
  // create game btn connects to api function
  $('#gameCreateForm').on('submit', event.onCreateGame)
  //hide pass change before log in
  $('#changePassword').hide()
  // click event to change user password
  $('#changePassword').on('submit', event.onChangePass)
  // click event to delete a game
  $('main').on('click', '.gameDeleteBtn', event.onGameDelete)
  // click event to launch game patch modal
  $('main').on('click', '.gameEditBtn', function () {
    $('#gameUpdateForm').show()
  })
  $('gameUpdateForm').on('sumbit', event.onGameChange)
  // event for sumbit inside of the patch modal
  // $('main').on('submit', '#updateGameForm', event.onGameChange)
})
