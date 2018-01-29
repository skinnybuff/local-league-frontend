'use strict'
const store = require('./store')

const apiFailure = function (error) {
  console.log(error)
}

const signInSuccess = function (data) {
  // the sign in return data is saved in the app store
  store.user = data.user
  // show the list of  games display on sign in
  $('#gamesDisplay').show()
  $('#signOutForm').show()
  $('#signUpForm').hide()
  $('#signInForm').hide()
  $('#signUpToggleBtn').hide()
  $('#gameCreateForm').show()
  $('#signOutForm input').val(data.user.email)
}

const signOutSuccess = function (data) {
  // the sign in return data is saved in the app store
  store.user = data.user
  // show the list of  games display on sign in
  $('#gamesDisplay').show()
  $('#signOutBtn').show()
}
module.exports = {
  apiFailure,
  signInSuccess
}
