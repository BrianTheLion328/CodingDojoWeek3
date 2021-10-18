// function clickRemove(element) {
//     element.remove()
// }

function removeTodd() {
    let todd = document.getElementById("requestOne")

    if (todd.classList.contains("requests")) {
        todd.classList.remove("requests");
        todd.classList.add("removed");
    }
}

function removePhil() {
    let phil = document.getElementById("requestTwo")

    if (phil.classList.contains("requests")) {
        phil.classList.remove("requests");
        phil.classList.add("removed");
    }
}
