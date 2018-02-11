'use strict'
//  collect the input in a from an wraps them in to a jason format
// based on the key values in the name attribute
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUpRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// after signin siccess all games are retrieved
const onSignInRequest = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(getAllUserGames)
    .catch(ui.signInFailure)
}

const onSignOutRequest = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.apiFailure)
}
// this event is triggered by setting a new password
const onChangePass = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePassSuccess)
    .catch(ui.changePassFailure)
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
    .then(getAllUserGames)
    .catch(ui.apiFailure)
}
// pre fill the game patch function with the selcted games data
const stagingGameChange = function () {
  // const clickedGameId = $(this).parents('.card').attr('data-game-id')
  //
  // api.getOneGame(clickedGameId)
  // .then(console.log(Response))
  // .catch(ui.apiFailure)
}
// thie event runs when the update date game submit it triggered
const onGameChange = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.updateGame(data)
    .then(ui.gamePatchSuccess)
    .then(getAllUserGames)
    .catch(ui.apiFailure)
}
// this event is launched when a single game is selcted foe delete
const onGameDelete = function (event) {
  const gameId = $(this).parents('.card').attr('data-game-id')
  // console.log(thisGame)
  api.destroyGame(gameId)
    .then(ui.deleteGameSuccess)
    .then(getAllUserGames)
    .catch(ui.apiFailure)
}
// this event will close the update game form and show the add game option
const hideUpdateGame = () => {
  // console.log('event update game')
  ui.closeUpdateGame()
}
//
const showGameEdit = function () {
  ui.showGameEditForm()
}
// this event will toggle the  show and hide for the change password form
const toggleChangePassword = () => {
  ui.toggleChangePassword()
}

module.exports = {
  onSignUpRequest,
  onSignInRequest,
  onSignOutRequest,
  getAllUserGames,
  onCreateGame,
  onChangePass,
  onGameChange,
  onGameDelete,
  stagingGameChange,
  hideUpdateGame,
  toggleChangePassword,
  showGameEdit
}
