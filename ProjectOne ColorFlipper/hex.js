const colors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function(){
    let hexColor = "#";
    for(let i =0; i<6; i++){
        hexColor += colors[getRandomNumbers()]; // getRandomNumber will return number till length of colors
        // for instance till 16 randomIntegers will be provided to colors array
        // so it will be 'colors[6]' = which is equal to 6 . it will run 6 times to fetch those numbers 
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor=hexColor;
})

function getRandomNumbers(){
    return Math.floor(Math.random()*colors.length);
}


const a = getRandom(30,20)
console.log(a)
function getRandom(max,min)
{
    return Math.random()*(max-min)+min ;
}