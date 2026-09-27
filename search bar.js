const searchBar = document.getElementById("gsearch"); // suchfeld geholt
const searchButton = document.querySelector(".search-button");
const popup = document.getElementById("popup")
const RecentlySearched = document.getElementById("Recently Searched")

searchButton.addEventListener("click", () => {
popup.textContent = searchBar.value
popup.style.display = "block";
RecentlySearched.style.display = "block";

});

