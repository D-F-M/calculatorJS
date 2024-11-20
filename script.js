const container = document.querySelector('.buttons');
const display = document.querySelector('.display');
const btnList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'+', '-','*','/','=', 'c']
let currentNum = "";
let num1 = null;
let num2 = null;
let operator = "";
let answer = null;

function clear(){
    currentNum = "";
    operator = "";
    num1 = null;
    num2 = null;
    display.textContent = currentNum;
}

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    if (num2 == 0){
        alert("Cannot divide by zero");
        clear();
        return;
    }

    return Math.round((num1 / num2) * 1000000000000) / 1000000000000;
}



function operate(num1, operator, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    switch(operator){
        case '+':
            answer = add(num1, num2);
            break;
        case '-':
            answer = subtract(num1, num2);
            break;
        case '*':
            answer = multiply(num1, num2);
            break;
        case '/':
            answer = divide(num1, num2);
            break;
    }

    return answer;
}

function btnPress(){

    if (Number.isInteger(Number(this.value))){
        currentNum += this.value;
        display.textContent = currentNum;
        return;
    }

    else if (this.value == 'c'){
        clear();
        return;
    }

    else if (this.value == '='){
        if(num1 != null && operator != ""){
            num2 = currentNum;
            answer = operate(num1, operator, num2);
            display.textContent = answer;
            return answer; 
        }
    }

    else{
        if(num1 != null && answer == null){
            alert("hello");
            num2 = display.textContent;
            answer = operate(num1, operator, num2);
            display.textContent = answer;
            num1 = answer;
            operator = this.value;
            currentNum = "";
            return;
        }

        else if(num1 != null){
            num1 = answer;
            operator = this.value;
            currentNum = "";
            display.textContent = 0;
            return;
        }

        else{
            operator = this.value;
            num1 = display.textContent;
            currentNum = "";
            display.textContent = 0;
            return;
        }
    }
}

for(i = 0; i < 16; i++){
    const calcButton = document.createElement('button');
    calcButton.classList.add('btn');
    calcButton.textContent = btnList[i];
    calcButton.value = btnList[i];
    calcButton.addEventListener("click", btnPress);
    container.appendChild(calcButton);
}