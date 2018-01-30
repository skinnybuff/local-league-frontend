'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const event = require('./events')

const onSignUpRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
  .then()
  .catch(ui.apiFailure)
}

const onSignInRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
   .then(ui.signInSuccess)
   .then(getAllUserGames)
   .catch(ui.apiFailure)
}

const onSignOutRequest = function (event) {
  event.preventDefault()
  api.signOut()
   .then(ui.signOutSuccess)
   .catch(ui.apiFailure)
}

const onChangePass = function (event) {
  event.preventDefault()
  api.changePass()
  .then(ui.changePassSuccess)
  .catch(ui.apiFailure)
}

const getAllUserGames = function () {
  api.getGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.apiFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // debugger
  api.createGame(data)
    .then(ui.createGameSuccess)
    .then(getAllUserGames)
    .catch(ui.apiFailure)
}

module.exports = {
  onSignUpRequest,
  onSignInRequest,
  onSignOutRequest,
  getAllUserGames,
  onCreateGame,
  onChangePass
}
