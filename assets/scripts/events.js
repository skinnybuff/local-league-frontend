'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log("sign up click")
}

const onSignIn = function (event) {
  event.preventDefault()

  const data = getFormFields(this)
  api.signIn(data)
   .then(console.log("sign in click"))
   // ui.signInSuccess
   .catch(ui.apiFailure)
}

module.exports = {
  onSignUp,
  onSignIn
}
