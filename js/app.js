const form = document.getElementById('form')
const list = document.getElementById('list')
const formInput = document.getElementById('form__input')


form['form__input'].addEventListener('input', () => {
    const inputValue = form['form__input'].value.toLowerCase()
    const name = document.querySelectorAll('.hero__item__title')
    
    name.forEach((item) => {
        if(item.textContent.toLowerCase().includes(inputValue)){
            item.parentElement.classList.remove('hidden')
        }else{
            item.parentElement.classList.add('hidden')
        }
    })
})

const updateUI = (data) => {
    list.innerHTML = ''
    data.forEach((item) => {
      const { flags, name,  population, continents, capital} = item
      list.innerHTML += `
      <a href="./about.html?country=${name.common}">
                <li class="hero__item">
                <img src=${flags.png} alt="">
                <h3 class="hero__item__title">${name.common}</h3>
                <p class="hero__populations">
                    <strong>Population: </strong> ${population}
                </p>
                <p class="hero__region">
                    <strong>Region: </strong> ${continents}
                </p>
                <p class="hero__capital">
                    <strong>Capital:</strong> ${capital}
                </p>
            </li>
        </a>
      `
    })


}
