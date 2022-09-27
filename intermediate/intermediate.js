document.querySelectorAll('.santa').forEach(item => {
    item.addEventListener('click', removeAll);
})

function removeAll() {
    if (this.style.opacity == "0") {
        this.style.opacity = "1";

    } else {
        this.style.opacity = "0";
        this.style.transition = '1s'
    }
}