// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(res => res.json())
// .then(data => {
//    data.forEach(item => {
//     const newTitle = document.createElement("h1");
//     newTitle.textContent = item.title;

//     document.body.appendChild(newTitle)
//    });
// })

const newList = document.querySelector(".list");


fetch("https://restcountries.com/v3.1/all")
.then(res => res.json())
.then(data => {
    data.forEach(item => {
        const newimg = document.createElement("img");
        const newTitle = document.createElement("h1");
        const newItem = document.createElement("li");
        const newBox = document.createElement("div")
        const newReg = document.createElement("p");
        const newPeople = document.createElement("p");
        const newCap = document.createElement("p")
        
        
        newReg.style.marginTop = "20px"
        newReg.style.marginBottom = "20px"
        newTitle.style.marginBottom = "20px"
        
        
        newCap.textContent = "Capital: " + item.capital;
        newReg.textContent = "Region: " + item.region;
        newPeople.textContent =  "Population: " + item.population;
        newTitle.textContent = item.name.common;
        newimg.src = item.flags.png; 
        newItem.className = "item"
        newimg.className = "rasm"
        newBox.className = "box"
        
        newBox.append(newTitle,newPeople,newReg,newCap) 
        newItem.append(newimg,newBox)
        newList.append(newItem)
    });
})

const elForm = document.querySelector(".form");
const btnSend = document.querySelector('.btn');

const searchInput = document.querySelector(".search");

// Assuming the HTML looks something like this:
// <form class="form">
//   <input type="text" id="searchInput" placeholder="Enter country name">
//   <button type="submit" class="btn">Search</button>
// </form>
// <ul class="list"></ul>



elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    
    // Clear previous search results
    newList.innerHTML = '';

    const countryName = searchInput.value.trim(); // Get the input value and trim it

    // Check if the input is empty and alert the user before attempting to fetch data
    if (countryName === "" || countryName === null) {
        alert("Please enter a country name");
        return; // Exit the function early if no country name is entered
    }

    // Proceed with fetching data if the input is not empty
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(res => res.json())
    .then(data => {
        // Process and display the fetched data
        data.forEach(item => {
            const newImg = document.createElement("img");
            const newTitle = document.createElement("h1");
            const newItem = document.createElement("li");
            const newBox = document.createElement("div");
            const newReg = document.createElement("p");
            const newPeople = document.createElement("p");
            const newCap = document.createElement("p");
            
            newReg.style.marginTop = "20px";
            newReg.style.marginBottom = "20px";
            newTitle.style.marginBottom = "20px";
            
            newCap.textContent = "Capital: " + (item.capital ? item.capital[0] : 'N/A');
            newReg.textContent = "Region: " + item.region;
            newPeople.textContent = "Population: " + item.population.toLocaleString();
            newTitle.textContent = item.name.common;
            newImg.src = item.flags.png;
            newItem.className = "item";
            newImg.className = "rasm";
            newBox.className = "box";
            
            newBox.append(newTitle, newPeople, newReg, newCap);
            newItem.append(newImg, newBox);
            newList.append(newItem);
        });
    })
    .catch(error => {
        console.error('Error fetching country data:', error);
        // Optionally, handle errors or display a message if the country is not found
    });
});
