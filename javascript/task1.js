function randomNumberGenerator(start,end){
    let randNum = Math.random()*end;
    while(start>randNum){
        randNum = Math.random()*end;
    }
    return Math.round(randNum);
}
console.log( randomNumberGenerator(10,100));


console.log(Math.floor(1.99))
console.log(math.min([10,3,6,45]));
let arr=[6,6,76,9]
console.log(math.min([...arr]));
console.log(math.max([...arr]));
console.log(-3);

