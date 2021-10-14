console.log("page loaded...");

function playOnHover(element){
let videoClip = document.getElementById("video-clip");

videoClip.addEventListener('mouseover', ()=> {
    element.play()
})
}
