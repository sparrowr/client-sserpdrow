'use strict '
const store = require('../store.js')

const isAdmin = function () {
  const adminEmails = ['admin@srubin.org']
  let inAdminList = false
  adminEmails.forEach(function (email) {
    if (email === store.user.email) {
      console.log('ui.js recognized admin login')
      inAdminList = true
    }
  })
  return inAdminList
}

const signUpSuccess = function () {
  $('.status').text('You have successfully signed up! Please sign in!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModal1').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
}
const signUpFailure = function () {
  $('.authmessage1').text('Please try again!')
  setTimeout(() => $('.authmessage1').text(''), 2000)
  $('input[type=text]').val('')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
}
const signInSuccess = function (data) {
  $('.status').text('You have successfully signed in!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModal').modal('toggle')
  $('.sign-in').addClass('hidden')
  $('.sign-up').addClass('hidden')
  $('.show-on-sign-in').removeClass('hidden')
  $('input[type=text]').val('')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
  $('.public').addClass('hidden')
  $('.status').removeClass('hidden')
  $('.private').removeClass('hidden')
  store.user = data.user

  if (isAdmin()) {
    console.log('signinSuccess recognized admin')
    $('.show-on-admin-sign-in').removeClass('hidden')
  }
}
const signInFailure = function () {
  $('.authmessage').text('Please try again!')
  setTimeout(() => $('.authmessage').html(''), 5000)
  $('input[type=text]').val('')
  $('input[type=email]').val('')
  $('input[type=password]').val('')
}
const changePasswordSuccess = function () {
  $('.status').text('You have successfully changed password!')
  setTimeout(() => $('.status').text(''), 2000)
  $('#myModal2').modal('toggle')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}
const changePasswordFailure = function () {
  $('.authmessage2').text('Please try again!')
  setTimeout(() => $('.authmessage2').text(''), 2000)
  $('input[type=text]').val('')
  $('input[type=password]').val('')
}
const signOutSuccess = function () {
  $('.status').text('You have signed out!')
  setTimeout(() => $('.status').text(''), 2000)
  $('.sign-in').removeClass('hidden')
  $('.sign-up').removeClass('hidden')
  $('.show-on-sign-in').addClass('hidden')
  $('input[type=text]').val('')
  $('input[type=password]').val('')
  $('.content').empty()
  $('.public').removeClass('hidden')
  $('.status').removeClass('hidden')
  $('.private').addClass('hidden')
  if (isAdmin()) {
    $('.show-on-admin-sign-in').addClass('hidden')
  }
  store.user = null
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess
}
