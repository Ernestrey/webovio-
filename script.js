const page = document.querySelector('.page')
const themeButtons = document.querySelectorAll('.theme-button')
const darkImg = document.querySelector('.dark-img')
const lightImg = document.querySelector('.light-img')

const bgImgs = document.querySelectorAll('.bg-img')
const bgLights = document.querySelectorAll('.bg-light')
const bgDarks = document.querySelectorAll('.bg-dark')

const socialImgs = document.querySelectorAll('social-img')
const socialLights = document.querySelectorAll('social-light')
const socialDarks = document.querySelectorAll('social-dark')

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

    for (socialImg of socialImgs) {
      if (page.classList.contains('dark-theme')) {
        for (socialDark of socialDarks) {
          socialDark.classList.add('hidden')
        }
        for (socialLight of socialLights) {
          socialLight.classList.remove('hidden')
        }
      } else {
        for (socialDark of socialDarks) {
          socialDark.classList.remove('hidden')
        }
        for (socialLight of socialLights) {
          socialLight.classList.add('hidden')
        }
      }
    }


  }
}