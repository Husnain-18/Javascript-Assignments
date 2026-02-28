var fullName = "Muhammad Husnain Razzaq";

document.getElementById("clearstatement").onclick = function() {
    document.getElementById("statement").innerHTML = "";
}
document.getElementById("clearoutput").onclick = function() {
    document.getElementById("outputresult").innerHTML = "";
}

document.getElementById("alertname").onclick = function() {
    alert(fullName);
}
document.getElementById("statement").innerHTML = 'alert(fullName)';

document.getElementById("alertnumber").onclick = function() {
    alert(805023);
}
document.getElementById("statement").innerHTML = 'alert(805023)';

document.getElementById("sum2number").onclick = function sumNumbers() {
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;
    alert(sum);
    document.getElementById("statement").innerHTML = "num1 = 10 <br/> num2 = 20 <br/> sum = num1 + num2";
    document.getElementById("outputresult").innerHTML = sum;
}
document.getElementById("subtract2number").onclick = function subtractNumbers() {
    let num1 = 10;
    let num2 = 20;
    let subtract = num2 - num1;
    alert(subtract);
    document.getElementById("statement").innerHTML = "num1 = 10 <br/> num2 = 20 <br/> subtract = num2 - num1";
    document.getElementById("outputresult").innerHTML = subtract;
}
document.getElementById("multiply2number").onclick = function multiplyNumbers() {
    let num1 = 10;
    let num2 = 20;
    let multiply = num2 * num1;
    alert(multiply);
    document.getElementById("statement").innerHTML = "num1 = 10 <br/> num2 = 20 <br/> multiply = num2 * num1";
    document.getElementById("outputresult").innerHTML = multiply;
}
document.getElementById("divide2number").onclick = function divideNumbers() {
    let num1 = 10;
    let num2 = 20;
    let divide = num2 / num1;
    alert(divide);
    document.getElementById("statement").innerHTML = "num1 = 10 <br/> num2 = 20 <br/> sum = num2 / num1";
    document.getElementById("outputresult").innerHTML = divide;
}
document.getElementById("showvariable").onclick = function variable() {
let shtml = "<ul><li>A variable name can't contain any spaces.</li><li>A variable can contain only letters, dollar sign, numbers and underscore.</li><li>Though a variable cannot be any of javascript keywords. For Example <code>userAlert</code> and <code>myVar</code> are illegal.</li></ul>";
 document.getElementById("outputresult").innerHTML = shtml;
 document.getElementById("statement").innerHTML = 'show variable rules';
}
document.getElementById("showcamel").onclick = function camelCase() {
 let camel = "<ul><li>user</li><li>userResponse</li><li>userResponseTime</li></ul>";
 document.getElementById("outputresult").innerHTML = camel;
document.getElementById("statement").innerHTML = 'show camelcase examples';}

document.getElementById("calculatenumber").onclick = function calculateNumbers() {
    let someCalculation = 36 / 6 * 3 + 2**4 - (3 + 5);
    document.getElementById("statement").innerHTML = "someCalculation = 36 / 6 * 3 + 2**4 - (3 + 5)";
    document.getElementById("outputresult").innerHTML = someCalculation;
}