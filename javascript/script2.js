var age=19;
if(20<age && age<50){
    
    console.log("Your not eligible.")
}
else{
    console.log("Thank You!");
    
}

var age=19;
if(age>18 && age<25){
    console.log("not eligible")
}    
else{
    console.log("your eligible")
}    

var age=19;
if(age>18 && age<20){
    console.log("eligible")
}
else{
    console.log("not eligible")
}

var age=19;
if(age>18 && age<20){
    if(age>=19){
    console.log("thank you for your valuable time")
}
}
else{
    console.log("Thank you!")
} 



switch(7){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
         break;
    case 4:
        console.log("thursday");
         break;
     case 5:
        console.log("friday");
        break;
    case 6:
         console.log("saturday");
         break;
    case 7:
        console.log("(｡• ᵕ •｡)");
        break;

}

switch (3) {
    case 1:
        console.log("Achu");   
        break;
    case 2:
        console.log("Dharani");  
        break;
    case 3:
        console.log("⋆˚🐾˖°");     
        break;
    default:
        console.log("Dharani")
        break;
}

for(var i=3;i<7; i++){
    console.log(i);
}
    console.log(i);



    for(var i=3;i<50;i=i+3){
        console.log(i);
    }


var on = true;
let count =1;
 while(on){
        console.log("˖⁺‧₊˚♡˚₊‧⁺˖");
        if(count == 3){
            on=false;
        }
        console.log(count++);
    }

    while(on){
        console.log("˖⁺‧₊˚♡˚₊‧⁺˖");
        if(count == 3){
            break;
        }
        console.log(count++);
    }


    while(on){
        console.log("˖⁺‧₊˚♡˚₊‧⁺˖");
        console.log(count);
        if(count == 3){
            continue;
        }
        (count++);
    }  


let fullName="Dharani";
let name=[3,7,"ᵔᴗᵔ",[5,6,4[1,8,0]]];
console.log(name[2])

let FullName="Dharani";
let markobj={
    tamil:20,
    english:30,
    maths:"ᵔ-ᵔ",
}
console.log(markobj.maths)



function functionname(parameters){
    console.log("Achu");
}
functionname();





function FunctionName(a){
    ++a;
    return a;
}
console.log(FunctionName(6));


function add(a,b){
    return a+b;
}
console.log(add(b=1,a=2));



function sub(a,b){
    return a-b;
}
console.log(sub(b=10,a=7));




function mul(a,b){
    return a*b;
}
console.log(mul(b=1,a=3));



function div(a,b){
    return a/b;
}
console.log(div(b=9,a=3));



function mod(a,b){
    return a%b;
}
console.log(mod(b=12,a=35));



function add(...numbers){
    return a+b;
}
console.log(add (a=1,b=4,c=5));



function add(...numbers){
    let total=0;
    for(let i=0;i<numbers.length;i++){
        total+=numbers[i]
    }
    return total;
}
console.log(add(3,5,8,7,6))




// 1) palindrome   (string method and looping)
// 2) Armstrong   (looping)
// 3) finding vowels  (string method)
// 4) random number generator  (math function)
// 5) band name generator  (string method adding name)
// 6) number guessing game  
// 7) find highest number in array
// 8) find lowest number in array
// 9) swapn two strings using only two variables





let arr=[3,7,13,17]
function minfind() {
console.log(Math.min(...arr))
}
minfind()
function maxfind(){
console.log(Math.max(...arr))
}
maxfind()

