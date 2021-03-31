var angle = 360
var cubeFig = $('.cube-figure')

var cubeControls = document.querySelector('.cube-controls')
var turnLeft = document.querySelector('.cube-controls #turn-left')
var turnRight = document.querySelector('.cube-controls #turn-right')


function isProtected() {

    if (cubeControls.classList.contains("prevention")) {
        return true;
    }

    cubeControls.classList.add("prevention")
    setTimeout(() => {
        cubeControls.classList.remove("prevention")
    }, 2000)
    return false;

}


turnLeft.addEventListener("click", (e) => {

    if (isProtected()) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    $({ deg: angle }).animate({ deg: angle - 90 }, {
        duration: 2000,
        easing: "swing",
        step: function (now) {

            cubeFig.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        }
    });

    angle -= 90
    if (angle == 0) { angle = 360 }

})

turnRight.addEventListener("click", (e) => {

    if (isProtected()) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    $({ deg: angle }).animate({ deg: angle + 90 }, {
        duration: 2000,
        easing: "swing",
        step: function (now) {

            cubeFig.css({
                transform: 'rotateY(' + now + 'deg)'
            });
        }
    });

    angle += 90
    if (angle == 720) { angle = 360 }

})



