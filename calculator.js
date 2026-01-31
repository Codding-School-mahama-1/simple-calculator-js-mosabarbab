
function calculate ( num1, operator, num2 ) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "error";
    }
    return num1 / num2;
  } else if (operator === "%") {
    if (num2 === 0) {
      return "error ";
    }
    return num1 % num2;
  } else {``
    return "nvlid operator";
  }
}
function isEven(num) {
  if (typeof num !== "number") 
    return null; 
  return num % 2 === 0;
}
while (true) {
  let firstnumbers = prompt("enter the first number:");
  if (firstnumbers === null)
     break;
  let num1 = parseFloat(firstnumbers);

  let operator = prompt("enter an operator (+, -, *, /, %):");
  if (operator === null) 
    break;

  let secondnumbers = prompt("enter the second number:");
  if (secondnumbers === null) 
    break;
  let num2 = parseFloat(secondnumbers);

  let result = calculate(num1, operator, num2);
  console.log("Result :", result);

  if (typeof result === "number") {
    if (isEven(result)) {
      console.log("the result is even.");
    } else {
      console.log("the result is odd.");
    }
  }

  let again = prompt("do you want to calculate again? Type 'no' to stop.");
  if (again === "no") {
    break;
  }else {
    continue;
}
  }
console.log("Goodbye!");



