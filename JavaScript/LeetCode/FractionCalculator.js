function calculator(num1, den1, num2, den2, operator){
    var fraction1 = (num1 / den1);
    var fraction2 = (num2 / den2);
    var value = 0;

    if (operator === "+"){
        value = fraction1 + fraction2;
        console.log(value);
        return value;
    }
    else if (operator === "-"){
        value = fraction1 - fraction2;
        console.log(value);
        return value;
    }
    else if (operator === "*"){
        value = fraction1 * fraction2;
        console.log(value);
        return value;
    }
    else if (operator === "/"){
        value = fraction1 / fraction2;
        console.log(value);
        return value;
    }
    else{
        console.log("Incorrect operator value");
        return null;
    }
}

calculator(1, 4, 2, 3, "+");
calculator(5, 7, 2, 9, "-");
calculator(3, 6, 1, 12, "*");
calculator(7, 9, 3, 8, "/");

var gcd = function(a, b) {
    if (!b) return a;

    var num = gcd(b, a % b);
    console.log(num);
}

gcd(100, 916);