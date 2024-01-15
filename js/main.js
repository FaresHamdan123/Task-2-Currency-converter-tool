var registerForm = document.querySelector(".registerForm");
var userss = [];
registerForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
    // console.log(e.target.elements);
    /*
    var name = elements[0].value;
    var email = elements[1].value;
    var password = elements[2].value;
    */

    amount: elements[0].value;

    var ex = elements[0].value;

    console.log(elements[0].value);
    var exchange = document.getElementById('exchange');
    console.log(exchange.value);

    if(exchange.value == "dollar"){
        ex *= 0.27;
    }
    else if(exchange.value == "dinar"){
        ex *= 0.19;
    }
    else if(exchange.value == "nis"){
        ex *= 1;
    }

    document.querySelector(".result").innerHTML=ex;

}
