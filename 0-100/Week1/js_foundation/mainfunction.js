// function

function calculateArithmatic(a, b, type){
    if (type == "sum"){
        const value = addition(a, b);
        return value
    }

    if (type == "minus"){
        const value =subtract(a, b);
        return value
    }
}

function addition(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}
    
result = calculateArithmatic(2, 3, "minus");
console.log(result);


// function calculateArithmatic(a, b, type){
//     if (type == "sum"){
//         return a + b;
//     }

//     if (type == "minus"){
//         return a - b;
//     }
// }

// result = calculateArithmatic(2, 3, "minus");
// console.log(result);







// // function sum(num1, num2,fntocall) {
// //     let result = num1 + num2;
// //     fntocall(result);
// // }

// // function displayResult(data) {
// //     console.log("Result of the sum is : " + data);
// // }

// // function displayResultPassive(data) {
// //     console.log("Sum's result is : " + data);
// // }

// // // You are only allowed to call one function after this
// // // How will you displayResult of a sum

// // const ans = sum(1, 2, displayResult)