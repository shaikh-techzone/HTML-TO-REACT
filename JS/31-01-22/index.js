const add = "Addition"
const sub = "Subtraction"
const mul = "Multiply"
const div = "Divide"
const inc = "Increment"
const dec = "Decrement"
const mod = "Modulus"
const exp = "Exponential"

var a = 22;
var b = 33;

let res1 = a+b;
let res2 = a-b;
let res3 = a*b;
let res4 = a/b;
let res5 = ++b;
let res6 = --a;
let res7 = a%b;
let res8 = a**b;

let x = 50;
let res9 = x+=5;
let res10 = x-=5;
let res11 = x*=5;
let res12 = x/=5;
let res13 = x%=5;

document.write(`<h1 style="text-align: center;" >JavaScript Arithmetic Operators</h1>`)
document.write(`<h1>a = ${a}</h1>`)
document.write(`<h1>b = ${b}</h1>`)
document.write(`<h1> ${add} </h1>`, `<h2> a + b = ${res1}</h2>`)
document.write(`<h1> ${sub} </h1>`, `<h2> a - b = ${res2}</h2>`)
document.write(`<h1> ${mul} </h1>`, `<h2> a * b = ${res3}</h2>`)
document.write(`<h1> ${div} </h1>`, `<h2> a / b = ${res4}</h2>`)
document.write(`<h1> ${inc} </h1>`, `<h2> ++ b  = ${res5}</h2>`)
document.write(`<h1> ${dec} </h1>`, `<h2> -- a = ${res6}</h2>`)
document.write(`<h1> ${mod} </h1>`, `<h2> a % b = ${res7}</h2>`)
document.write(`<h1> ${exp} </h1>`, `<h2> a ** b = ${res8}</h2>`)

document.write(`<h1 style="text-align: center;" >JavaScript Assignment Operators</h1>`)
document.write(`<h1>x = ${x}</h1>`)
document.write("<h1> += </h1>", `<h2> x += 5 = ${res9}</h2>`)
document.write(`<h1> -= </h1>`, `<h2> x -= 5 = ${res10}</h2>`)
document.write(`<h1> *= </h1>`, `<h2> x *= 5 = ${res11}</h2>`)
document.write(`<h1> /= </h1>`, `<h2> x /= 5 = ${res12}</h2>`)
document.write(`<h1> %= </h1>`, `<h2> x %= 5  = ${res13}</h2>`)