function call(){
    let oil = 400;
    let rice = 140;
    let sugar = 100;

    let oil_input = document.getElementById("oil_input").value;
    let rice_input = document.getElementById("rice_input").value;
    let sugar_input = document.getElementById("sugar_input").value;

    let total = (oil*oil_input) + (rice*rice_input) + (sugar*sugar_input);
    let discount;
    let dis_total;
    let dis_sum;

    if(total>=1000){
        discount = "25%"
        dis_sum = (total/100)*25
        dis_total = total-dis_sum;
    }
    else if(total>=800){
        discount = "10%"
        dis_sum = (total/100)*10
        dis_total = total-dis_sum;

    }
    else if(total>=300){
        discount = "5%"
        dis_sum = (total/100)*5
        dis_total = total-dis_sum;
        }
    else{
        discount = "NIL"
        dis_sum = 0
        dis_total = total-dis_sum;
    }


    document.getElementById("sub_total").innerHTML = `${total}`;
    document.getElementById("discount").innerHTML = `${discount}`;
    document.getElementById("dis_total").innerHTML = `${dis_total}`;
}