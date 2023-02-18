// Random User generator API https://randomuser.me/api/?results=20

const loadUser = () => {
    fetch("https://randomuser.me/api/?results=100")
        .then(res => res.json())
        .then(data => displayUser(data.results)); 
}

const displayUser = users => {
    console.log(users); 

    const userContainer = document.getElementById("userContainer"); 

    for (const user of users) {
        console.log(user); 
        const userDiv = document.createElement("div");
        userDiv.classList.add("user"); 
        userDiv.innerHTML = `
            <img src ="${user.picture.large}" alt="image"/>
            <h4>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h4> 
            <p>Email: ${user.email}</p>
            <p>Phone: ${user.phone}</p>
            <p>Age: ${user.dob.age}</p>
            <p>Gender: ${user.gender}</p>
         `
        userContainer.appendChild(userDiv); 
    }
}

// loadUser(); 