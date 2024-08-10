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


