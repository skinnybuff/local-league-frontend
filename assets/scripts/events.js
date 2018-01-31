'use strict'
//  collect the input in a from an wraps them in to a jason format
// based on the key values in the name attribute
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

// after signin siccess all games are retrieved
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
  const data = getFormFields(this)
  api.changePassword(data)
  .then(ui.changePassSuccess)
  .catch(ui.apiFailure)
}

const getAllUserGames = function () {
  api.getGames()
    .then(ui.getAllGamesSuccess)
    .catch(ui.apiFailure)
}

// when i new game is created all
const onCreateGame = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // debugger
  api.createGame(data)
    .then(ui.createGameSuccess)
    .then($('#gamesDisplay').empty())
    .then(getAllUserGames)
    .catch(ui.apiFailure)
}
const onGameChange = function () {
  const gameId = $(this).parents('.card').attr('data-game-id')
  console.log(store.games)
}

const onGameDelete = function (event) {
  const gameId = $(this).parents('.card').attr('data-game-id')
  // console.log(thisGame)
  api.destroyGame(gameId)
    .then(ui.deleteGameSuccess)
    .then($('#gamesDisplay').empty())
    .then(getAllUserGames)
    .catch(ui.apiFailure)
}


module.exports = {
  onSignUpRequest,
  onSignInRequest,
  onSignOutRequest,
  getAllUserGames,
  onCreateGame,
  onChangePass,
  onGameChange,
  onGameDelete
}
