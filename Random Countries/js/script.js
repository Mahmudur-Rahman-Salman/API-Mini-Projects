// Random Countries api https://restcountries.com/v3.1/all

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayCountries(data)); 
}


const displayCountries = countries => {
    const countryContainer = document.getElementById("country-container")

    countries.forEach(country => {
        const countryDiv = document.createElement("div"); 
        console.log(country);
        countryDiv.classList.add("country")
        countryDiv.innerHTML = ` 
        <img src="${country.flags.png}" />
         <h4>Name: ${country.name.common} </h4>
         <p>Capital: ${country.capital}</p>
         <p>Area: ${country.area}</p>
         <p>Continents: ${country.continents}</p>
         <p>Population: ${country.population}</p>
        `

        countryContainer.appendChild(countryDiv); 
    })
}
// loadCountries(); 