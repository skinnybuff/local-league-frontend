'use strict'

const store = require('./store')
const gameListTemplate = require('./templates/games_list.handlebars')

const apiFailure = function (error) {
  $('#uiFeedbackDisplay').text('')
  $('#uiFeedbackDisplay').text('Please try again')
  window.setTimeout(() => {
    $('#uiFeedbackDisplay').text('')
  }, 1600)
  return error
}

const signInSuccess = function (data) {
  // the sign in return data is saved in the app store
  store.user = data.user
  // show the list of  games displayed on sign in
  $('#gamesDisplay').fadeIn('slow')
  // show option to sign out and hide sign in/up forms
  $('#signOutForm').show()
  $('#signUpForm').fadeOut('fast')
  $('#signInForm').hide()
  $('#signUpToggleBtn').hide()
  // show form to create new games
  $('#gameCreateForm').show()
  // show user email in the signout field
  $('#signOutForm input').val(data.user.email)
  // hide change password option until toggled
  $('#changePassword').hide()
  // clear the  HUD if any feed back was logged
  $('#uiFeedbackDisplay').html('')
  // clear the sign in form values
  $('#signInForm :input').val('')
}

const signInFailure = function (data) {
  // clear the HUD
  $('#uiFeedbackDisplay').text('')
  // User feed back for a sign in error
  $('#uiFeedbackDisplay').text('Please sign up or check your email and password')
}

const signOutSuccess = function (data) {
  // on sign out clear in app data store
  store.user = {}
  store.games = {}
  // clear the games resource dispaly
  $('#gamesDisplay').fadeOut('slow')
  // clear the HUD
  $('#uiFeedbackDisplay').text('')
  // Show the option to log back in
  $('#signInForm').show()
  // hide all other forms
  $('#signOutForm').hide()
  $('#gameCreateForm').hide()
  $('#changePassword').hide()
  $('#gameUpdateForm').hide()
}

const signUpSuccess = function () {
  $('#uiFeedbackDisplay').text('')
  $('#uiFeedbackDisplay').text('You succsefuly Signed Up please Sign In')
  // hide sign up form to prevent error from signing up twice
  $('#signUpForm').hide()
}

const signUpFailure = function () {
  // clear hud
  $('#uiFeedbackDisplay').text('')
  // feed back for bad sign up
  $('#uiFeedbackDisplay').text('Please try a differrent email and password')
}

const changePassSuccess = function () {
  // clear HUD
  $('#uiFeedbackDisplay').text('')
  // HUD feed back on password patch success
  $('#uiFeedbackDisplay').text('Password Changed')
  // pasword input values are cleared
  $('#changePassword :input').val('')
  // the change password UI feedback will hide after 1.6 seconds
  window.setTimeout(() => {
    $('#uiFeedbackDisplay').text('')
    $('#changePassword').hide()
  }, 1600)
}

const getAllGamesSuccess = function (data) {
  store.games = data.games
  const gamesListHtml = gameListTemplate({ games: store.games })
  $('#gamesDisplay').append(gamesListHtml)
  // console.log(store.games)
}

const createGameSuccess = function (data) {
  // console.log(" new game data: " + data)
  $('#gamesDisplay').empty()
  $('#gameCreateForm :input').val('')
}

const deleteGameSuccess = function () {
  $('#gamesDisplay').empty()
}

const gamePatchSuccess = function () {
  // empty the games display
  // its repopulated on the event chain with a call for all games
  $('#gamesDisplay').empty()
  $('#gameUpdateForm').hide()
  $('#gameCreateForm').show()
  // clear update game form
  $('#gameUpdateForm :input').val('')
}

const closeUpdateGame = () => {
  console.log('ui update event')
  $('#gameUpdateForm').hide()
  $('#gameCreateForm').show()
}

const toggleChangePassword = () => {
  $('#changePassword').toggle()
}

const showGameEditForm = () => {
  $('#gameCreateForm').hide()
  $('#gameUpdateForm').show()
  $('#updateCloseBtn').show()
}
module.exports = {
  apiFailure,
  signInSuccess,
  signOutSuccess,
  getAllGamesSuccess,
  changePassSuccess,
  signInFailure,
  signUpFailure,
  gamePatchSuccess,
  deleteGameSuccess,
  createGameSuccess,
  signUpSuccess,
  closeUpdateGame,
  toggleChangePassword,
  showGameEditForm
}
