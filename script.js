console.log('Milan');
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("                              ");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("                              ");
for (let i = 0; i <= 20; i++) {
    console.log(i);
}
let printNumbersTill = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log (i);
    }
}
console.log("                              ");
printNumbersTill(15);
console.log("                              ");
printNumbersTill(38);
let greeting = (String) => {
    return "Greetings to " + String + "!"
}
console.log("                              ");
console.log("                              ");
console.log(greeting("Viki"));
values = [1, 4, 23, 7, 8, 99, 654];
let printArayValues = (Array) => {
    for ( let i = 0; i < Array.length; i++){
        console.log(Array[i]);
    }
}
console.log("                              ");
console.log("                              ");
printArayValues(values);
console.log("                              ");
console.log("                              ");
values.forEach((x) => {
    console.log(x);
});