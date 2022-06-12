// Local Reviews Data
const reviews=[
    {
        id:1,
        name:"Susan Smith", 
        job: "web developer",
        img:"D:/JAVASCRIPT PROJECTS PRACTICE/ProjectThree Reviews/face.jpg",
        text:"On the Australian continent several tribes of indigenous people played kicking and catching games with stuffed balls which have been generalised by historians as Marn Grook (Djab Wurrung for ",
      },
    {
        id:1,
        name:"Messi", 
        job: "Footballer",
        img:"D:/JAVASCRIPT PROJECTS PRACTICE/ProjectThree Reviews/face1.jpg",
        text:"There are a number of references to traditional, ancient, or prehistoric ball games played in many different parts of the world.[2][3][4] Contemporary codes of football can be traced back to the codification m",
    },
    {
        id:1,
        name:"Anna jhonson", 
        job: "Cricketer",
        img:"D:/JAVASCRIPT PROJECTS PRACTICE/ProjectThree Reviews/face2.jpg",
        text:"Text messaging, or texting, is the act of composing and sending electronic messages, typically consisting of alphabetic and numeric characters, between two or more users of mobile devices, desktops/laptops, or",
    },
    {
        id:1,
        name:"will smith", 
        job: "Hacker",
        img:"D:/JAVASCRIPT PROJECTS PRACTICE/ProjectThree Reviews/face3.jpg",
        text:"Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football normally means the form of football that is the most popular where.",
    },
    {
        id:1,
        name:"loren jackson", 
        job: "Engineer",
        img:"D:/JAVASCRIPT PROJECTS PRACTICE/ProjectThree Reviews/face4.jpg",
        text:"The Middle Ages saw a huge rise in popularity of annual Shrovetide football matches throughout Europe, particularly in England.o varying degrees, kicking a ball to score a g",
    }
];

// select Items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");


//set Starting item
let currentItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length-1;
    }
    showPerson(currentItem);
})