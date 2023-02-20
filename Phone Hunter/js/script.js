// Phone hunter api https://openapi.programming-hero.com/api/phones?search=iphone

const loadPhone = async(searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`; 
    const res = await fetch(url); 
    const data = await res.json(); 
    displayPhone(data.data); 
}

const displayPhone = (phones) => {
    const phoneContainer = document.getElementById("phone-container"); 
    phoneContainer.innerHTML = ""; 
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
    })
}


document.getElementById("btn-search").addEventListener("click", function () {
    const searchField = document.getElementById("search-field"); 
    const searchText = searchField.value; 
    loadPhone(searchText)
    searchField.value = ""; 
})

loadPhone("phone");