const request = async (reource) => {
    const req = await fetch(reource)
    if (!req.ok) {
        throw new Error("Something went wrong :(")
    }
    const data = await req.json()
    return data
}


const heroAbout = document.getElementById('hero__about')


const createCountryInfo1 = (country) => {
   const {population, capital, flags, name, region, tld, currencies, languages, subregion} = country

   const nativeName = Object.values(name.nativeName)[0].official
   const currency = Object.values(currencies)[0].name
   const language = Object.values(languages)

   heroAbout.innerHTML = `
   <div class="hero__left">
   <img class="hero__left__img" src=${flags.svg} alt="">
</div>
<div class="hero__right">
   <h2 class="hero__right__title">
       ${name.common}
   </h2>
   <div class="hero__right__content">
       <div class="hero__right__content__left">
           <p class="hero__right__content__text">
               <strong>Native Name:</strong> ${nativeName}
           </p>
           <p class="hero__right__content__text">
               <strong>Population:</strong> ${population}
           </p>
           <p class="hero__right__content__text">
               <strong>Region:</strong> ${region}
           </p>
           <p class="hero__right__content__text">
               <strong>Sub Region:</strong> ${subregion}
           </p>
           <p class="hero__right__content__text">
               <strong>Capital:</strong> ${capital}
           </p>
       </div>
       <div class="hero__right__content__right">
           <p class="hero__right__content__text">
               <strong>Top Level Domain:</strong> ${tld}
           </p>
           <p class="hero__right__content__text">
               <strong>Currencies:</strong> ${currency}
           </p>
           <p class="hero__right__content__text">
               <strong>Languages:</strong> ${language}
           </p>
       </div>
   </div>
</div>
   `
}

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const country = urlParams.get('country')
const countryAPI = `https://restcountries.com/v3.1/name/${country}`

request(countryAPI).then((data)=>{
    createCountryInfo1(data[0])
}).catch((err)=>{
    alert(err.message)
})
