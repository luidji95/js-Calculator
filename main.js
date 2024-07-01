import './style.css'

'use strict';

let calcResult1 = document.getElementById('calc-result1');
let calcResult2 = document.getElementById('calc-result2');
let numbers = document.querySelectorAll('.numbers');
let sign = document.getElementById('sign');
let num = document.getElementById('num');
let operations = document.querySelectorAll('.operations');
let equal = document.getElementById('equal');
let clear = document.getElementById('clear');
let deletebtn = document.getElementById('delete');
let head = document.getElementById('head');

class Calculator {
    constructor() {
        this.firstNum = "";
        this.secondNum = "";
        this.action = "";
        this.title = 'Calculator JS Project';
        this.count = 0;
    }

    getFirstNum() {
        return this.firstNum;
    }

    setFirstNum(value) {
        this.firstNum = value;
    }

    getSecondNum() {
        return this.secondNum;
    }

    setSecondNum(value) {
        this.secondNum = value;
    }

    setSecondNumToDefault() {
        this.secondNum = "";
    }

    getAction() {
        return this.action;
    }

    setAction(value) {
        this.action = value;
    }

    setActionToDefault() {
        this.action = "";
    }

    getTitle() {
        return this.title;
    }

    getCount() {
        return this.count;
    }

    setCount(value) {
        this.count = value;
    }

    increaseCount() {
        this.count++;
    }
}

const game = new Calculator();

let interval = setInterval(() => {
    let headline = game.getTitle(); 
    if(game.getCount() === headline.length){ 
        game.setCount(0);
        head.textContent = "";
    } else {
        head.textContent += headline.charAt(game.getCount()); 
        game.increaseCount();
    }
}, 200);

numbers.forEach(function (number) {
    number.addEventListener('click', function () {
        if (game.getAction() === "") {
            game.setFirstNum(game.getFirstNum() + number.textContent); 
            calcResult2.textContent = game.getFirstNum();
        } else {
            game.setSecondNum(game.getSecondNum() + number.textContent); 
            calcResult2.textContent = game.getSecondNum();
        }
    });
});

operations.forEach(function (operation) {
    operation.addEventListener('click', function (ev) {
        if (game.getFirstNum() !== "" && game.getSecondNum() !== "" && game.getAction() !== "") {
          calculate();
        } 
        game.setAction(ev.target.textContent);
        sign.textContent = game.getAction();
        num.textContent = calcResult2.textContent;
        calcResult2.textContent = "";
    });
});

equal.addEventListener('click', function () {
    if (game.getFirstNum() !== "" && game.getSecondNum() !== "" && game.getAction() !== "") {
        calculate();
        game.setActionToDefault();
        sign.textContent = "";
        num.textContent = "";
    }
});

function calculate() {
    let result;
    switch (game.getAction()) {
        case "+":
            result = Number(game.getFirstNum()) + Number(game.getSecondNum());
            break;
        case "-":
            result = Number(game.getFirstNum()) - Number(game.getSecondNum());
            break;
        case "*":
            result = Number(game.getFirstNum()) * Number(game.getSecondNum());
            break;
        case "/":
            result = Number(game.getFirstNum()) / Number(game.getSecondNum());
            break;
    }

    calcResult2.textContent = result;
    sign.textContent = "";
    num.textContent = "";
    game.setFirstNum(result.toString());
    game.setSecondNumToDefault();
}

clear.addEventListener('click', function() {
    location.reload();
});

deletebtn.addEventListener('click', function() {
    let currentNumber = calcResult2.textContent;
    if (currentNumber.length > 0) {
        if(game.getAction() === ""){
            game.setFirstNum(currentNumber.slice(0, -1));
            calcResult2.textContent = game.getFirstNum();
        } else if(game.getAction() != ""){
            game.setSecondNum(currentNumber.slice(0, -1));
            calcResult2.textContent = game.getSecondNum();
        }
    }
});



    
       




















