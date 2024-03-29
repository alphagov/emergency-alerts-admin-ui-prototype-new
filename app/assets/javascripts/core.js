(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = window.onload = function () {
  const cookieBanner = document.querySelector('.js-cookies-banner')
  const questionBanner = document.querySelector('.js-question-banner')
  const acceptedBanner = document.querySelector('.js-cookies-accepted')
  const rejectedBanner = document.querySelector('.js-cookies-rejected')
  const acceptButton = document.querySelector('.js-cookies-button-accept')
  const rejectButton = document.querySelector('.js-cookies-button-reject')

  function showBanner (banner) {
    banner.removeAttribute('hidden')
    // Shift focus to the banner
    banner.setAttribute('tabindex', '-1')
    banner.focus()
    banner.addEventListener('blur', function () {
      banner.removeAttribute('tabindex')
    })
  }

  function setCookie (cName, cValue, expDays) {
    const date = new Date()
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000))
    const expires = 'expires=' + date.toUTCString()
    document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/'
  }

  function splitCookies (cookie) {
    return cookie.split('=')
  }

  function cookieReducerFn (acc, cookieArr) {
    const key = cookieArr[0].trim()
    const value = cookieArr[1]
    acc[key] = value
    return acc
  }

  function getCookie (key) {
    // Internet Explorer v.<=11 does not support arrow functions, string literals, object destructuring
    const cookies = document.cookie
      .split(';')
      .map(splitCookies)
      .reduce(cookieReducerFn, {})
    return cookies[key]
  }
  const cookieName = 'GA'
  const doesCookieExist = getCookie(cookieName)

  const acceptFn = function () {
    setCookie(cookieName, 'Accept', 365)
    questionBanner.setAttribute('hidden', true)
    showBanner(acceptedBanner)
  }
  const rejectFn = function () {
    setCookie(cookieName, 'Reject', 365)
    questionBanner.setAttribute('hidden', true)
    showBanner(rejectedBanner)
  }

  acceptButton.addEventListener('click', acceptFn)
  rejectButton.addEventListener('click', rejectFn)

  acceptedBanner.addEventListener('click', function () {
    cookieBanner.classList.add('govuk-visually-hidden')
  })
  rejectedBanner.addEventListener('click', function () {
    cookieBanner.classList.add('govuk-visually-hidden')
  })

  if (!doesCookieExist) {
    cookieBanner.classList.remove('govuk-visually-hidden')
    questionBanner.removeAttribute('hidden')
  }

  // Remove the js-only class from any element that has it.
  // .js-only elements are hidden in the css so this effectively shows the .js-only (by removing the class)
  // but only if js is enabled (as this wont run if it isn't).
  Array.from(document.getElementsByClassName('js-only')).forEach(element => element.classList.remove('js-only'))
}

},{}],2:[function(require,module,exports){
const cookieScript = require('./cookies')
cookieScript()

},{"./cookies":1}]},{},[2])
//# sourceMappingURL=core.js.map
