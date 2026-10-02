const images = document.querySelectorAll('.pictures-box img')
let currentIndex = 0

images[currentIndex].style.display = "inline"

let timerId;

timerId = setInterval(function () {
    document.getElementById("stopButton").addEventListener("click", function() {
        clearInterval(timerId);
        timerId = null;
    })

    images.forEach (
        function (img) {
            img.style.display = "none"
        }
    )
    currentIndex += 1

    if(currentIndex === images.length) {
        currentIndex = 0;
    }


images[currentIndex].style.display = "inline"
}, 3000)