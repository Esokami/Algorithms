function fizzBuzz(n)
{
    var arr = [];
    
    for (var i = 1; i <= n; i++){
        var string = "";
        
        if (i % 3 == 0 && i % 5 !=0){
            string += "Fizz";
        }
        else if (i % 5 == 0 && i % 3 != 0){
            string += "Buzz";
        }
        else if (i % 3 == 0 && i % 5 == 0){
            string += "FizzBuzz";
        }
        else {
            string += String(i);
        }
        arr.push(string);
    }
    console.log(arr);
}

fizzBuzz(3);