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
        
         <h4>Name: ${country.name.common} </h4>
         <p>Capital: ${country.capital}</p>
         <p>Area: ${country.area}</p>
         <p>Continents: ${country.continents}</p>
         <p>Population: ${country.population}</p>
         <button onclick="loadCountryDetails('${country.cca2}')">Click here</button>
        `

        countryContainer.appendChild(countryDiv); 
    })
}


const loadCountryDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`; 
    console.log(url); 
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data[0])); 
}



const displayDetails = country => {
    console.log(country)
    const flagContainer = document.getElementById("flag-container"); 
    flagContainer.innerHTML = ` 
    <img src="${country.flags.png}" />
    <h4>Name: ${country.name.common} </h4>

    `
    
}
// loadCountries(); 