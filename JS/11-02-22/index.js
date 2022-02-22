// loop syntax

// for(i = 1 ; i<5 ; i++){
//     document.write(i);
// }


// for loop examle

// var sum = 0;
// for(var i = 0; i<5;i++){
//     sum=sum+i;
// }
// document.write("Sum",sum);






// table generator

// var inp = Number(prompt("Enter your number"))

// for(var i = 1 ; i<10; i++){
//     var res = inp*i;
//     document.write(res)
// }




// Sweeping Method

// var a = Number(prompt("Enter number"));
// var b = Number(prompt("Enter number"));
// var c;
// c = a;
// a = b;
// b = c;
// document.write(a);
// document.write(b);


// nested for loop

for(var i=1;i<5;i++){
    for(var j=1;j<5;j++){
        var k = i*j;
        document.write(k + "</br>")
    }
}