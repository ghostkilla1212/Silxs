const myMenu = document.getElementById("myMenu"); // menu geholt
const mobileMenuSidebar = document.getElementById("mobileMenuSidebar"); // id geholt
myMenu.addEventListener("click", () => {
    mobileMenuSidebar.style.display = "block";
})


const closeButton = document.getElementById("closeButton"); //id von button geholt