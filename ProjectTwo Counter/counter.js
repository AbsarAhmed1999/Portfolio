var counter = document.querySelector(".counter");
const dec = document.querySelector("#dec");
const re = document.querySelector("#re");
const inc = document.querySelector("#inc");
var a =0;
dec.addEventListener("click",function(){
    
    a = --a;
    counter.innerHTML = `<h1>${a}</h1>`;
})

inc.addEventListener("click",function(){
    a = ++a;
    counter.innerHTML = `<h1>${a}</h1>`;
})

re.addEventListener("click",function(){
    a=0;
    counter.innerHTML = `<h1>${a}</h1>`;
})
const btns = document.querySelectorAll("btn");
console.log(btns);


// ALTERNATIVE 

/* 
const counter =0;
const btns = document.querySelectorAll("btn");    // All buttons have same class known as "btn"
const value = document.querySelector(".counter");

console.log(btns);    // Prints a NodeList look like array but not an Array
                     // NodeList have some methods which can print Whole Node list . That method is forEach

btns.forEach(function (btn){                            ----> For Each/Every button function will Run . Where btn is given as parameter which Iterates over whole nodelist
    btn.addEventListener("click" , function(e)=>{       ----> The function will check the click and then runs another function . In which e is passed as Parameter/Event Object
        const styles = e.currentElement                 --->  This event object has a method called currentElemen. when clicked on particular element is prints The tag of that element    
        const styles = e.currentElement.classList       ----> That current element/tag is having multiple classes . We can get all those classes in form of Array
        if(styles.contain("decrease")){                 ----> If that classList Array contains a class "decrease" then perform counter --
            counter--;
        }
        else if (styles.contain("increase")){           ---->
            counter ++;
        }
        else {
            counter =0;
        }
    })                                                    
})

*/