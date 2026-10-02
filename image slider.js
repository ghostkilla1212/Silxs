const images = document.querySelectorAll('.pictures-box img')
let currentIndex = 0

images[currentIndex].style.display = "inline"

let timerId;

timerId = setInterval(function () {
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
}, 2000)

    document.getElementById("stopButton").addEventListener("click", function () {
           if (timerId !== null) {
        clearInterval(timerId); // Stops the execution
        timerId = null;         // Clears the ID variable so it can be restarted
        } else {
        timerId = setInterval(function () {
            images.forEach (
            function (img) {
                img.style.display = "none"
            }
        )
       currentIndex += 1

       if (currentIndex === images.length) {
        currentIndex = 0;
       }

    images[currentIndex].style.display = "inline"
    }, 2000)
    }
    });