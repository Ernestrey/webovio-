const page = document.querySelector('.page')
const themeButtons = document.querySelectorAll('.theme-button')
const darkImg = document.querySelector('.dark-img')
const lightImg = document.querySelector('.light-img')

const bgImgs = document.querySelectorAll('.bg-img')
const bgLights = document.querySelectorAll('.bg-light')
const bgDarks = document.querySelectorAll('.bg-dark')

let socialImgs = document.querySelectorAll('.social-img')
let socialLight = document.querySelector('.social-light')
let socialDark = document.querySelector('.social-dark')

for (let themeButton of themeButtons) {
  themeButton.onclick = function () {
    page.classList.toggle('light-theme')
    page.classList.toggle('dark-theme')

    if (page.classList.contains('light-theme')) {
      darkImg.classList.add('hidden')
      lightImg.classList.remove('hidden')
    } else {
      lightImg.classList.add('hidden')
      darkImg.classList.remove('hidden')
    }

    for (bgImg of bgImgs) {
      if (page.classList.contains('dark-theme')) {
        for (bgDark of bgDarks) {
          bgDark.classList.remove('hidden')
        }
        for (bgLight of bgLights) {
          bgLight.classList.add('hidden')
        }
      } else {
        for (bgDark of bgDarks) {
          bgDark.classList.add('hidden')
        }
        for (bgLight of bgLights) {
          bgLight.classList.remove('hidden')
        }
      }
    }

    if (page.classList.contains('dark-theme')) {
      socialLight.classList.add('hidden')
      socialDark.classList.remove('hidden')
    } else {
      socialLight.classList.remove('hidden')
      socialDark.classList.add('hidden') 
    }

  }
}