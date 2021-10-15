/* CLICK HANDLER FOR LIKE BUTTON 1 */
let likeOne = document.querySelector("#counter1")
let buttonOne = document.getElementById("like-button1")
let counterOne = 0;

buttonOne.addEventListener('click', function() {
    counterOne += 1;
    likeOne.innerHTML = counterOne;
})

/* CLICK HANDLER FOR LIKE BUTTON 2 */
let likeTwo = document.getElementById("counter2");
let buttonTwo = document.getElementById("like-button2");
let counterTwo = 0;

buttonTwo.addEventListener('click', function(){
    counterTwo += 1;
    likeTwo.innerHTML = counterTwo;
})

/* CLICK HANDLER FOR LIKE BUTTON 3 */
let likeThree = document.getElementById("counter3");
let buttonThree = document.getElementById("like-button3");
let counterThree = 0;

buttonThree.addEventListener('click', function(){
    counterThree += 1;
    likeThree.innerHTML = counterThree;
})
