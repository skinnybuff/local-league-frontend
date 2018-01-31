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
  // show the list of  games display on sign in
  $('#gamesDisplay').show()
  $('#signOutForm').show()
  $('#signUpForm').hide()
  $('#signInForm').hide()
  $('#signUpToggleBtn').hide()
  $('#gameCreateForm').show()
  $('#signOutForm input').val(data.user.email)
  $('#changePassword').show()
  console.log(store)
}

const signOutSuccess = function (data) {
  // show the list of  games display on sign in
  $('#gamesDisplay').hide()
  $('#signOutForm').hide()
  $('#signInForm').show()
  $('#gameCreateForm').hide()
  $('#changePassword').hide()
}

const changePassSuccess = function () {
  console.log("password changed")
  // TODO: gice modal feed back

}

const getAllGamesSuccess = function (data) {
  store.games = data.games
  // console.log(store)
  const gamesListHtml = gameListTemplate({ games: store.games })
  $('#gamesDisplay').append(gamesListHtml)
}

const createGameSuccess = function () {
  // console.log("new game")
  $('#gamesDisplay').empty()
  $('#gamesDisplay').remove()
}

module.exports = {
  apiFailure,
  signInSuccess,
  signOutSuccess,
  getAllGamesSuccess,
  changePassSuccess
}
