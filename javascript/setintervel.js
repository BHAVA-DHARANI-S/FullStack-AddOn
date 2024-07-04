//slice and substring
const arr=[10,20,30,40];
const fullName="ACHU";
console.log(fullName.substring(1,4))
console.log(arr.slice(1,3))

//splice
 //const arr=[10,20,30,40];
 //const fullName="RADHA";

//console.log(arr.splice(1,4,54))

//DESTRUCTING
//for array
//let array=[10,30,23];
//let [a,b,c]=array;
//console.log(c);

//forobject
//let obj={
    //Name:  "Achu",
    //age:40
//}
//let{Name,age}=obj;
//console.log(age)

//closure 
function parent(){
    const a = 10;
    function child(){
        console.log(a);
    }
    return child;
}
const closure = parent();
closure();
