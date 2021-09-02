const price = document.querySelector("#price-input");
const quantity = document.querySelector("#quantity-input");
const quantity_price = document.querySelector("#show-quantity-price");
const form = document.querySelector("#totalizer-form");

/*for (i=1; i<=6; i++) {
    let x = "<input type='text' id='quantityP"+i+"'/><input type='text' id='priceP"+i+"'/><br>";
    document.getElementById("products").innerHTML = x;
}*/
/*

document.getElementById("demo").innerHTML = "Hello JavaScript!
*/

form.addEventListener("submit",event=>{
    event.preventDefault();
    x = "La cantidad " + quantity.value + ", el precio " + price.value + ": " + (price.value*quantity.value);
    alert(x);
    quantity_price.innerHTML = x;
})

/*
function greetingSelector(name,age,gender){
    var greetings = {
        0:{
            "male":"Hola amigo",
            "female":"Hola amiga"
        },
        1:{
            "male":"Que tal",
            "female":"Que tal"
        },
        2:{
            "male":"Como esta Don",
            "female":"Como esta Sra."
        }
    }
    var greetings_by_time = {
        0:"Buen día",
        1:"Buenas tardes",
        2:"Buena noche"
    }
    var limits = [20,45]
    group = valueIntervalFinder(age,limits);
    var current_time = new Date(); 
    var time_limits = [new Date().setHours(12,0),new Date().setHours(18,0)]
    time_group = valueIntervalFinder(current_time,time_limits)
    //alert(current_time)
    return greetings[group][gender] + " " + name + ". "+greetings_by_time[time_group]+"."
}

function isAnIndex(index,lenght){
    var ans = false;
    if (index<lenght && index>0){
        ans = true;
    }
    return ans;
}

function valueIntervalFinder(value,limits)
{
    var interval;
    if (value<limits[0])
    {
        interval = 0
    }
    else if (value >limits[limits.length-1])
    {
        interval = limits.length
    }
    else
    {
        for(var i=0;i<limits.length;i=i+1)
        {
            if (limits[i]<=value && value<=limits[i+1])
            {
                interval = i + 1;
            }
        }
    }
    return interval;
}
*/