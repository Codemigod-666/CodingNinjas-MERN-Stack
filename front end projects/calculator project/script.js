
"use  strict"

// const jsdom = require("jsdom");
// const{ JSDOM } = jsdom;
// const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
// const document = dom.window.document;


// var res = document.getElementById('display-box');
// value = "";
// res.style.fontSize = "40px";


function insertValue(value){
    document.getElementById('result').value += value;
}

function clearResult(){
    document.getElementById('result').value = "";
}

function backSpace(){
    var result =  document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0,result.length-1);
}

function calculate(){
    var result = document.getElementById("result").value;
    if(result){
        document.getElementById('result').value = eval(result);
    }
}

function signChange(){
    const number = parseInt(document.getElementById('result').value);
    const changedNumber = number * -1;

    document.getElementById('result').value = changedNumber;

}