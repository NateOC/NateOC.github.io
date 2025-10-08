let operator = '';
let previousValue = '';
let currentValue = '';

let clear = document.querySelector('#clear-btn');
let equal = document.querySelector('.equ');
let decimal = document.querySelector('.dec');

let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.opp');

let previousScreen = document.querySelector('.prev');
let currentScreen = document.querySelector('.curr');

numbers.forEach((number) => number.addEventListener("click", function(tx){
    handleNumber(tx.target.textContent)
    currentScreen.textContent=currentValue;
}));

operators.forEach((opp) => opp.addEventListener("click", function(tx){
    handleOperator(tx.target.textContent)
    previousScreen.textContent = previousValue + "" + operator;
    currentScreen.textContent = currentValue;
}));

clear.addEventListener("click", function(){
    previousValue = '';
    currentValue = '';
    operator = '';
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;


});

equal.addEventListener("click", function(){
    calculate();
    previousScreen.textContent = '';
    if(previousValue.textContent = ''){
        currentScreen.textContent = previousValue;
    } else{
        currentScreen.textContent = previousValue;
    }
});

decimal.addEventListener("click", function(){
    addDec();
})
function handleNumber(num){
    if(currentValue.length <= 5){
        currentValue += num;
    }
}

function handleOperator(opp){
    operator = opp;
    previousValue = currentValue;
    currentValue = '';
}

function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue += currentValue;
    } else if(operator === "-"){
        previousValue -= currentValue;
    } else if(operator === "x"){
        previousValue *= currentValue;
    } else if(operator === "/"){
        previousValue /= currentValue;
    }

    previousValue = round(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();
}

function round(num){
    return Math.round(num*1000)/1000;
}

function addDec(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}