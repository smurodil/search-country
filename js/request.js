
const API = 'https://restcountries.com/v3.1/all'

const overlay = document.getElementById('overlay')

const loaderToggle = (toggle) => {
    if (toggle) {
      overlay.classList.remove('hidden')
    } else {
      overlay.classList.add('hidden')
    }
  }

// request
const getData = (resource) => {
  return new Promise((resolve, reject) => {
     const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
      if (request.readyState < 3) {
        loaderToggle(true)
      } else if (request.readyState === 4 && request.status == 200) {
        const data = JSON.parse(request.responseText)
        resolve(data)
        loaderToggle(false)
      } else if (request.readyState == 4) {
        reject('Something went wrong !!!')
        loaderToggle(false)
      }
    })
    request.open('GET', resource)
    request.send()
  })
}

const reload = () => {
  getData(API)
    .then((data) => {
      updateUI(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

document.addEventListener('DOMContentLoaded', reload)