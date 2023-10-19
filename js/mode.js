const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

// get mode from local storage
let localMode = localStorage.getItem('mode')
if (localMode) {
  if (localMode == 'dark-mode') {
    body.classList.add('dark-mode')
    darkBtn.classList.toggle('hidden')
    lightBtn.classList.toggle('hidden')
  } else {
    body.classList.remove('dark-mode')
  }
}

// dark mode
darkBtn.addEventListener('click', () => {
  darkBtn.classList.toggle('hidden')
  lightBtn.classList.toggle('hidden')
  body.classList.add('dark-mode')
  localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click', () => {
  darkBtn.classList.toggle('hidden')
  lightBtn.classList.toggle('hidden')
  body.classList.remove('dark-mode')
  localStorage.setItem('mode', '')
})