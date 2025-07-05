function sum(a, b) {
    return a + b;
}

let operator = parseInt(prompt("Enter your operator: \n1: sum"));

if (operator >= 0 && operator <= 100) {
    let num1 = parseFloat(prompt("Enter your first number:"));
    let num2 = parseFloat(prompt("Enter your second number:"));
    let result;

    if (operator === 1) {
        result = sum(num1, num2);
        alert("Result: " + result);
    } else {
        alert("Only '1: sum' is supported right now.");
    }
} else {
    alert("Enter Correct value");
}
