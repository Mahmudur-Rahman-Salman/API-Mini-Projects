// Phone hunter api https://openapi.programming-hero.com/api/phones?search=iphone

const loadPhone = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`; 
    const res = await fetch(url); 
    const data = await res.json(); 
    displayPhone(data.data); 
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById("phone-container"); 
    phoneContainer.textContent = ""; 
    phones = phones.slice(0, 10); 
    const notfound = document.getElementById("not-found"); 
    if (phones.length === 0) {
        notfound.classList.remove('d-none'); 
    }
    else {
        notfound.classList.add("d-none"); 
    }
    phones.forEach(phone => {
        const phoneDiv = document.createElement("div");
        console.log(phone);
        phoneDiv.classList.add("col");
        phoneDiv.innerHTML = ` 
        <div class="card p-2">
            <img src="${phone.image}" class="card-img-top w-50 m-auto" alt="...">
            <div class="card-body text-center">
                <h5 class="card-title">Name: ${phone.phone_name}</h5>
                <p class="card-text fw-bold">Brand: ${phone.brand}</p>
                <p class="card-text">${phone.slug}</p>
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    }); 
    toggleSpinner(false); 
}


document.getElementById("btn-search").addEventListener("click", function () {
    toggleSpinner(true); 
    const searchField = document.getElementById("search-field"); 
    const searchText = searchField.value; 
    loadPhone(searchText)
    searchField.value = ""; 
})

const toggleSpinner = isloading => {
    const loaderSpinner = document.getElementById("spinner-loader"); 
    if (isloading) {
        loaderSpinner.classList.remove("d-none"); 
    }
    else {
        loaderSpinner.classList.add("d-none")
    }
}

// loadPhone("phone");