const myMenu = document.getElementById("myMenu"); // menu geholt
const mobileMenuSidebar = document.getElementById("mobileMenuSidebar"); // id geholt
myMenu.addEventListener("click", () => {  
    mobileMenuSidebar.style.display = "block"; // damit wenn ich draufdrucke dass es geht
});


const closeButton = document.getElementById("closeButton"); //id von button geholt
closeButton.addEventListener("click", () => {
    mobileMenuSidebar.style.display = "none" // sorgt dafur das die sidebar verschwindet
});