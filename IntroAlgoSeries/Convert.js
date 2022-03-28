// Convert Hours and Minutes into Seconds

// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples:
    // convert (1,3) -> 3780
    // convert (2, 0) -> 7200
    // convert (0,0) -> 0

function convert(hours, minutes){
    secHours = hours * 3600;    
    secMinutes = minutes * 60;
    sum = secHours + secMinutes;
    return sum;
    // return (hours * 3600) + (mintues * 60)
}

// console.log(convert(1,3));
// console.log(convert(2,0));
// console.log(convert(0,0));

// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays. Where n is variable

// Examples:
    // concat([1, 2, 3], [4, 5], [6, 7]) -> [1, 2, 3, 4, 5, 6, 7]
    // concat([1], [2], [3], [4], [5], [6], [7]) -> [1, 2, 3, 4, 5, 6, 7]
    // concat([1, 2], [3, 4]) -> [1, 2, 3, 4]
    // concat([4, 4, 4, 4]) -> [4, 4, 4, 4]

// write a function that accepts any number of arrays
// create an empty array
// iterate through the given arrays
    // append each item into the new empty array
// return the new array

function concat(){
    if (arguments.length === 1){
        return arguments[0];
    }
    else if (arguments.length === 0){
        throw "Must pass some arrays."
    }

    concatArray = []
    for (i = 0; i < arguments.length; i++){
        for (let j = 0; j < arguments[i].length; j++){
            concatArray.push(arguments[i][j])
        }
    }
    return concatArray;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1], [2], [3], [4], [5], [6], [7]))
console.log(concat([1, 2], [3, 4]))
console.log(concat([4, 4, 4, 4]))