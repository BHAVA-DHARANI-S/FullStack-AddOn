function add(num1,num2) {
    let result = num1+num2;
    console.log(result);

}
function sub(num1,num2) {
    let result = num1-num2;
    console.log(result);
}
function mul(num1,num2) {
    let result = num1*num2;
    console.log(result);
}
function div(num1,num2) {
    let result = num1/num2;
    console.log(result);
}
function mod(num1,num2) {
    let result = num1%num2;
    console.log(result);
}
function calculation(num1, num2, callback){
    
    callback(num1,num2);
}

calculation(10,20,mul)



//regressive function

function add(num){
    console.log(num);
    if(num<10){
        add(++num);
    }
}
add(1);


//set timeout

function start(){
    console.log("start");
}
setTimeout(start,5000)

function running(){
    console.log("running");
}
running();

//set interval

function start(){
    console.log("start");
}
setInterval(start,5000)

function running(){
    console.log("running");
}
running();

// set date
let num=1;
function start(){
   let d=new Date();
   document.getElementById("time").innerHTML =d //.toLocaleTimeString(); //time mattu diplay agurathukagaa
}
setInterval(start,1000)




//set time
// let number =1;
// function start(){
    // document.getElementById("time").innerHTML=++num;
// }
// setInterval(start,1000)

// function run(){
   // console.log("running");
// }
// running();


//async funstion
async function data(){
    await fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
}
data();