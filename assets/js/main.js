//add hovered class to selected list item
let list=document.querySelectorAll(".navigation li");

function activeLink(){
    //remove all 'hovered' class from li elements
    list.forEach((item)=>{
        item.classList.remove("hovered");
    });
    //add 'hovered' class to the current hovered li element
    this.classList.add("hovered");
}

list.forEach(item=>item.addEventListener("mouseover",activeLink));


// =======Menu Toggle=========
let toggle=document.querySelector(".toggle");
let navigation=document.querySelector(".navigation");
let main=document.querySelector(".main");

toggle.onclick=function (){
    //Making 'navigation' and 'main' active
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
