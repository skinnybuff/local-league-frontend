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
  // show the list of  games displayed on sign in\
  $('#gamesDisplay').fadeIn('slow')
  $('#signOutForm').show()
  $('#signUpForm').fadeOut('fast')
  $('#signInForm').hide()
  $('#signUpToggleBtn').hide()
  $('#gameCreateForm').show()
  $('#signOutForm input').val(data.user.email)
  $('#changePassword').show()
  $('#uiFeedbackDisplay').html('')
  $('#signInForm :input').val('')
}

const signInFailure = function (data) {
  $('#uiFeedbackDisplay').text('')
  $('#uiFeedbackDisplay').text('Please try again')
}

const signOutSuccess = function (data) {
  $('#gamesDisplay').fadeOut('slow')
  $('#signOutForm').hide()
  $('#signInForm').show()
  $('#gameCreateForm').hide()
  $('#changePassword').hide()
  $('#uiFeedbackDisplay').text('')
}

const signUpSuccess = function () {
  $('#uiFeedbackDisplay').text('')
  $('#uiFeedbackDisplay').text('You have Signed Up')
  $('#signUpForm').hide()
}

const signUpFailure = function () {
  $('#uiFeedbackDisplay').text('')
  $('#uiFeedbackDisplay').text('Please try and sign up again')
}

const changePassSuccess = function () {
  $('#uiFeedbackDisplay').text('')
  $('#uiFeedbackDisplay').text('Password Changed').fadeIn('fast')
  window.setTimeout(() => {
    $('#uiFeedbackDisplay').text('')
  }, 1600)
  $('#changePassword :input').val('')
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
  $('#gamesDisplay').empty()
  $('#gameUpdateForm').hide()
  $('#gameCreateForm').show()
  $('#gameUpdateForm :input').val('')
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
  signUpSuccess
}
