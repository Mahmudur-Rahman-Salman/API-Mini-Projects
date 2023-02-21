// Phone hunter api https://openapi.programming-hero.com/api/phones?search=iphone

const loadPhone = async(searchText, datalimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`; 
    const res = await fetch(url); 
    const data = await res.json(); 
    displayPhone(data.data, datalimit); 
}

const displayPhone = (phones, datalimit) => {
    const phoneContainer = document.getElementById("phone-container"); 
    phoneContainer.textContent = ""; 
    const showall = document.getElementById("show-all"); 
    if (datalimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showall.classList.remove("d-none"); 
    }
    else {
        showall.classList.add("d-none"); 
    }
     
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
                <button type="button" onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneModal">Show Details</button>
                
            </div>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    }); 
    toggleSpinner(false); 
}

// process search

const processSearch = (datalimit) => {
    toggleSpinner(true); 
    const searchField = document.getElementById("search-field"); 
    const searchText = searchField.value; 
    loadPhone(searchText, datalimit);
    // searchField.value = "";  
}

document.getElementById("btn-search").addEventListener("click", function () {
    // toggleSpinner(true); 
    // const searchField = document.getElementById("search-field"); 
    // const searchText = searchField.value; 
    // loadPhone(searchText)
    // searchField.value = ""; 
    processSearch(10); 
})

document.getElementById("search-field").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        processSearch(10); 
    }
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



document.getElementById("button-show-all").addEventListener("click", function () {
    processSearch(); 
})



const loadPhoneDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`; 
    const res = await fetch(url);  
    const data = await res.json(); 
    displayPhoneDetails(data.data); 

}

const displayPhoneDetails = (phone) => {
    console.log(phone);
    const modalTitle = document.getElementById("phoneDetailModal"); 
    modalTitle.innerText = phone.name; 
    const phoneDetail = document.getElementById("phone-details"); 
    phoneDetail.innerHTML = ` 
        <img src = "${phone.image}" alt="image"/>
        <p>${phone.brand}</p>
        <p>${phone.releaseDate ? phone.releaseDate : "phone is not released yet! "}</p>
        <p>${phone.phone_name ? phone.phone_name : "phone is not found! "}</p>
    `
}
loadPhone("phone");