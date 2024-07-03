function contManupulate() {
    let elem= document.getElementById("head");
    elem.innerHTML ="<h1>Achu</h1>";
}

function darkmode(){
document.body.style.backgroundColor ="black";
document.body.style.color="white";
let button =document.getElementById("button")
button.innerHTML=`<i class="fa-regular fa-sun"></i>`
button.innerHTML  +="lightmode";
}

function lightmode(){
    document.body.style.backgroundColor ="white";
    document.body.style.color="black";
    let button =document.getElementById("button")
    button.innerHTML=`<i class="fa-solid fa-moon"></i>`
    button.innerHTML +="darkmode";
    }

function modechange(){
    let btext=document.getElementById("button").innerText
    if(btext=="darkmode"){
        darkmode();
    }else if(btext=="lightmode"){
         lightmode();
    }
}

document.getElementById("name").setAttribute("id","Sad");