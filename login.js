function handleRegister(event){
    event.preventDefault(); 
    let user = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    let  userDetails;
    let arr=[];
    if (!uname) {
        alert("Enter your Username");
    } else if (!pass) {
        alert("Enter your Password");
    }
    else{
         userDetails={
            uname:user, 
            pass:pass
        }
    
    let arrobj = localStorage.getItem("userDetails");
    if(arrobj){
        arrobj = JSON.parse(arrobj)
        arr = arr.concat(arrobj);
        arr.push(userDetails)
        localStorage.setItem("userDetails",JSON.stringify(arr))
    }else{
    localStorage.setItem("userDetails",JSON.stringify([userDetails]));
    }
    window.location.replace=("http://127.0.0.1:5500/login.html")
}
}

function handleLogin(event){
       let user=document.getElementById("uname").value
    let pass=document.getElementById("pass").value

    if (!uname) {
        alert("Enter your Username");
    } else if (!pass) {
        alert("Enter your Password");
    }else{
        let arrobj=localStorage.getItem("userDetails");
        arrobj=JSON.parse(arrobj);
        console.log(arrobj);
        let correctuser = false ;
        let correctpass = false ;
        arrobj.map((value)=>{
           if(value.username==user){
            correctuser = true;
            if(value.password==pass){
                correctpass = true;
            }
           }
        })
        if(correctuser && correctpass){
            alert("Login Successfully");
        }else if(correctuser){
            alert("enter correct password");
        }
        else{
            alert("enter correct username");
        }
    }
}
