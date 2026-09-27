const searchBar = document.getElementById("gsearch"); // suchfeld geholt von html
const searchButton = document.querySelector(".search-button"); // sucht nach den element in der css klasse
const popup = document.getElementById("popup") //sucht ein element popup

searchButton.addEventListener("click", () => { // wenn der suchbutton angeklicht wird fuhre den code aus
popup.textContent = searchBar.value // was steht grade im suchfeld
popup.style.display = "block"; // popup wird sichbar
RecentlySearched.style.display = "block"; // sichbar
});



