var sidenavbar=document.querySelector(".side-navbar")

function shownav(){
sidenavbar.style.left="0"
}
function closenav(){
sidenavbar.style.left="-60%"
}

// searchcollection
var searchedinp=""
var productsec=document.querySelector(".productimg")
var productcon=productsec.querySelectorAll("div")
function searchproduct(event){
    searchedinp=event.target.value.toUpperCase()
    for(var i=0;i<productcon.length;i++){
        if(productcon[i].textContent.toUpperCase().indexOf(searchedinp)<0){
            productcon[i].style.display="none"
        }
        else{
            productcon[i].style.display="block"
        }
    }
}


    

