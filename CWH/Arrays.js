// var text = "Hello World";
// console.log(text);

let marksClass12 = [91,82,93,84,null,"Not present"];
marksClass12[6] = 89 // adding a new value to the array
marksClass12[0] = 96 // changing the value of an array
console.log(marksClass12[0]);
console.log(marksClass12[1]);
console.log(marksClass12[2]);
console.log(marksClass12[3]);
console.log(marksClass12[4]);
console.log(marksClass12[5]);
console.log(marksClass12[6]);
console.log(marksClass12[7]);
console.log(marksClass12.length);
console.log(marksClass12);
console.log(typeof marksClass12); // checking the type fo array  and array is an Object

console.log("Using for loop")
for (let i = 0; i<=marksClass12.length; i++) {
console.log(marksClass12[i])   
}


