//select popup, overlay,button(plus)
var popupb=document.querySelector(".popupbox")
var overl=document.querySelector(".overlay")
var plusbtn=document.querySelector(".add-button")
plusbtn.addEventListener("click",function(){
    popupb.style.display="Block"
    overl.style.display="Block"
})

//Selectcancel btn
var cancelbtn=document.getElementById("Cancel")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupb.style.display="none"
    overl.style.display="none"
})

//selectcontainer ,addbutton,BTitle,BAuthor,BDes
var container=document.querySelector(".container")
var addbtn=document.getElementById("NewBook")
var BTitleIp=document.getElementById("BTitle")
var BAuthorIp=document.getElementById("BAuthor")
var BDesIp=document.getElementById("BDes")
addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","Book-container")
    div.innerHTML=`<h2>${BTitleIp.value}</h2>
        <h5>${BAuthorIp.value}</h5>
    
        <p>${BDesIp.value}</p>
        <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupb.style.display="none"
    overl.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}