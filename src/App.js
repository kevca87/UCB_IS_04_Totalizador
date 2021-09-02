const price = document.querySelector("#price-input");
const quantity = document.querySelector("#quantity-input");
const total = document.querySelector("#show-total");
const total_with_taxes = document.querySelector("#show-total-with-taxes");
const name_item = document.querySelector("#product-input");

const name_output= document.querySelector("#product-output");
const quantity_output= document.querySelector("#quantity-output");
const price_output= document.querySelector("#price-output");

const state_input= document.querySelector("#State");

const form = document.querySelector("#totalizer-form");

var taxes = {
    "UT":0.0665,
    "NV":0.08,
    "TX":0.0625,
    "AL":0.04,
    "CA":0.0825
}


form.addEventListener("submit",event=>{
    event.preventDefault();
    let total_price = (price.value * quantity.value)
    total.innerHTML = "Total: " + total_price;
    name_output.innerHTML = name_item.value;
    quantity_output.innerHTML = quantity.value;
    price_output.innerHTML = price.value;
    alert ("State Selected: " + state_input.value + " tax: " + taxes[state_input.value] );//TAXES
    let total_with_taxes_var = total_price +taxes[state_input.value] * total_price;
    total_with_taxes.innerHTML = "Total with taxes: "+ total_with_taxes_var
    // alert ( "Precio total con descuento: " + total_withDiscount );
})

/*
function tableCreate() {
  var body = document.getElementsByTagName('body')[0];
  var tbl = document.createElement('table');
  tbl.style.width = '100%';
  tbl.setAttribute('border', '1');
  var tbdy = document.createElement('tbody');
  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 2; j++) {
      if (i == 2 && j == 1) {
        break
      } else {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode('\u0020'))
        i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
        tr.appendChild(td)
      }
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}
tableCreate();
*/
