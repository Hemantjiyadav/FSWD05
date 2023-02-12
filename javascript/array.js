
let arr = [1,2,3,4,5,6,7];
 
let sum = arr.reduce((accum, curr) => {
    return accum + curr;
})
 
 console.log(sum);