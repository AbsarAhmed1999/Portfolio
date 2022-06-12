const colors = ["green","blue","red","rgba(150,20,35)","#f10525","#f1f5f8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    // get Random number between 0-3
    const randomNumber = getRandomNumbers();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];    

})

function getRandomNumbers(){
    return  Math.floor(Math.random()*colors.length);
}