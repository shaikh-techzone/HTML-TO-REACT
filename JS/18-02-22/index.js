// if else function

// function Cal(){

//     let price = Number(document.getElementById("price").value);
//     let years = Number(document.getElementById("years").value);
//     let month = years * 12;
//     let down = (price*20)/100;
//     let rem = price - down;
//     let ins;
//     document.getElementById("down").value = down;
//     document.getElementById("rem").value = rem;
//     // document.getElementById("ins").value = ins;

//     if(years == 3){
//         ins = rem / month
//         document.getElementById("ins").value = ins;
//     }
//     else if(years == 5){
//         ins = rem / month
//         document.getElementById("ins").value = ins;
//     }
//     else if(years == 7){
//         ins = rem / month
//         document.getElementById("ins").value = ins;
//     }
//     else{
//         alert("Not Available")
//     }

// }

// switch case function

function Cal(){

    let price = Number(document.getElementById("price").value);
    let years = Number(document.getElementById("years").value);
    let month = years * 12;
    let down = (price*20)/100;
    let rem = price - down;
    let ins;
    document.getElementById("down").value = down;
    document.getElementById("rem").value = rem;

    switch(years){
        case 3 :
            ins = rem / month
            document.getElementById("ins").value = ins;
            break
        case 5 :
            ins = rem / month
            document.getElementById("ins").value = ins;
            break
        case 7 :
            ins = rem / month
            document.getElementById("ins").value = ins;
            break
        default:
            alert("Not Available")
        
    }

}