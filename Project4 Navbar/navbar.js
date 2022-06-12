const btn = document.querySelector(".btn");
const link = document.querySelector(".square-box");
btn.addEventListener('click',function()
{
    if(link.classList.contains("links"))
    {
        
        link.classList.remove("links");
        link.classList.add("square-box");
    }
    else
    {
        link.classList.remove("square-box");
        link.classList.add("links");
    }
})


/* BY DEFAULT LINK MUST BE HIDDEN BUT MY LINK BY DEFAULT IS SHOWING WHICH IS A MISTAKE HERE */ 