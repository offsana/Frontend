function start_game () {
   /* console.log("start_game()works")*/
   object.classList.add('start')
}
function miss (event) {
    if (event.target.id == "area") {
    score--;
//console.log("miss()works")
console.log(score)}
document.title = `Score ${score}`
}

function hit () {
score++;
   // console.log("hit()works")
   console.log(score)
   document.title = `Score ${score}`;
   object.classList.remove('start');/*при нажатии на обьект она удаляется*/ 
   void object.offsetWidth; /*магия :) */

   object.classList.add('start'); /*запускается дальше играем дальше */
   change_object_background();
}
function change_object_background() { const colors = ['#f72500', '#fefd00', '#1b7e00','#fd0d71','#671bf5']; const index = Math.floor(Math.random() * colors.length);  
object.style.background = colors[index];} 


let score = 0;
let object = document.querySelector  ('#object');

