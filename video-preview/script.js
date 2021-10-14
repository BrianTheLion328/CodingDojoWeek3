console.log("page loaded...");

function playOnHover(){
let videoClip = document.getElementById("video-clip");

videoClip.addEventListener('mouseover', ()=> {
    videoClip.play()
})
}
