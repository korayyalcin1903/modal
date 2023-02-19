let modal = document.querySelector(".modal");
let more = document.querySelector(".more");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
let navLeftMenu = document.querySelector(".nav-left-items");
let navCenterMenu = document.querySelector(".nav-center-items");
let container = document.querySelector(".container");

more.addEventListener("click",function(){
    modal.style.display = "block";
    modal.style.opacity = "1";
    modal.style.transition = "all 1s ease-in";
})

close.addEventListener("click", function(){
    modal.style.display = "none";
})

let sayac = 0;

menu.addEventListener("click", function(){
    sayac = sayac + 1;
    if(sayac==1){
        navLeftMenu.style.display = "block";
        navCenterMenu.style.display = "block";
        container.style.display = "block";
        sayac = sayac + 1;
    }
    if(sayac==3){
        navLeftMenu.style.display = "none";
        navCenterMenu.style.display = "none";
        container.style.display = "flex";
        sayac = 0;
    }
    console.log(sayac);
})