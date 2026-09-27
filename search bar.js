const searchBar = document.getElementById("gsearch"); // suchfeld geholt
const searchButton = document.querySelector(".search-button");
const popup = document.getElementById("popup")

searchButton.addEventListener("click", () => {
popup.textContent = searchBar.value
popup.style.display = "block";
});

const RecentlySearched = document.createElement("RecentlySearche");
RecentlySearched.textContent = "RecentlySearched";

