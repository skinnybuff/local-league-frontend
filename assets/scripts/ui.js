'use strict'
const store = require('./store')
const event = require('./events')
const gameListTemplate = require('./templates/games_list.handlebars')

const apiFailure = function (error) {
   console.log(error)
  // TODO: Give user feed back to a faild request
}

const signInSuccess = function (data) {
  // the sign in return data is saved in the app store
  store.user = data.user
  // show the list of  games displayed on sign in
  $('#gamesDisplay').fadeIn('slow')
  $('#signOutForm').show()
  $('#signUpForm').fadeOut('fast')
  $('#signInForm').hide()
  $('#signUpToggleBtn').hide()
  $('#gameCreateForm').show()
  $('#signOutForm input').val(data.user.email)
  $('#changePassword').show()
  // console.log(store)
  // ('#signUpForm').children('input').val('')
}

const signOutSuccess = function (data) {
  // hide the list of  games displayed on sign in
  $('#gamesDisplay').hide()
  $('#signOutForm').hide()
  $('#signInForm').show()
  $('#gameCreateForm').hide()
  $('#changePassword').hide()
}

const signUpSuccess = function () {
  $('#signUpForm').hide()
}

const changePassSuccess = function () {
  console.log("password changed")
  // TODO: gice modal feed back

}

const getAllGamesSuccess = function (data) {
  store.games = data.games
  const gamesListHtml = gameListTemplate({ games: store.games })
  $('#gamesDisplay').append(gamesListHtml)
  console.log(store.games)

}

const createGameSuccess = function (data) {
  // console.log(" new game data: " + data)

  $('#gameCreateForm').children('input').val('')
}

const deleteGameSuccess = function () {
  $('#gamesDisplay').fadeOut(800)
}

const gamePatchSuccess = function () {
  $('#gamesDisplay').fadeOut()
}

module.exports = {
  apiFailure,
  signInSuccess,
  signOutSuccess,
  getAllGamesSuccess,
  changePassSuccess
}
