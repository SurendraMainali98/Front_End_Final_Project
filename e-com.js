let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})

// navbar
let shops = doucument.getElementById("shops");
let reviews = doucument.getElementById("reviews");
let blogs = doucument.getElementById("blogs");
let contacts = doucument.getElementById("contacts");
 
shops.addEventsListner("click", ()=>{
    shops.style.color="rgb(4, 219, 219)"
    reviews.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})

reviews.addEventsListner("click", ()=>{
    reviews.style.color="rgb(4, 219, 219)"
    shops.style.color="white"
    blogs.style.color="white"
    contacts.style.color="white"
})

blogs.addEventsListner("click", ()=>{
    blogs.style.color="rgb(4, 219, 219)"
    reviews.style.color="white"
    shops.style.color="white"
    contacts.style.color="white"
})

contacts.addEventsListner("click", ()=>{
    contacts.style.color="rgb(4, 219, 219)"
    reviews.style.color="white"
    blogs.style.color="white"
    shops.style.color="white"
})


// card js
 
let crd = document.querySelectorAll(".crd");
let itemPage = document.querySelector(".itemPage");
let container = document.querySelector(".container");
console.log(crd);

crd.forEach(function(curValue){
    curValue.addEventListener("click", function(){
       itemPage.style.display="flex";
       container.style.display="none";
       
    })
})


