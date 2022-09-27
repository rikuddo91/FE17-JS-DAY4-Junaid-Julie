var mouse = false;
function mouseStatus(n) {
    mouse = n;
    if (mouse) {
        document.getElementById("text").innerHTML = "you are in the circle"
    }
    else {
        document.getElementById("text").innerHTML = "you are outside the circle"
    }
}

circle = document.getElementById("circle")
body = document.body

const circleOnClick = () => {
    circle.style.backgroundColor = "gray"
}

const circleOnDblClick = () => {
    circle.style.backgroundColor = "blue"
}