let state = {
    firstNumber: '',
    secondNumber: '',
    action: ''
}

// ########################

const output = document.getElementById('output');


// #######################

function addSymbol(target) {
    let outputLen =  output.innerText.length;
    if (outputLen ==  13) document.getElementById('output').className = 'calc_top-output-field-min';
    if (outputLen ==  24) return;
    if(/[/*+-]/.test(target)) {
        if (state.action && outputLen - 1 == state.firstNumber.length) {
            output.innerText = output.innerText.slice(0, outputLen - 1) + target;
        } else if (!state.action) {
            output.innerText +=  target;
        } else {
            equals();
            state.firstNumber = output.innerText;
            state.secondNumber = '';
            output.innerText += target;
        }
        state.action = target;
        return;
    }
    if (!state.action) {
        if (output.innerText == '0') output.innerText = '';
        state.firstNumber += target;
    } else {
        state.secondNumber += target;
    }
    output.innerText +=  target;
} 

function clearS() {
    output.innerText =  '0';
    state.firstNumber = '';
    state.secondNumber = '';
    state.action = '';
    document.getElementById('output').className = 'calc_top-output-field';
}

function equals() {
    switch(state.action) {
        case '/': output.innerText = state.firstNumber = (Number(state.firstNumber) / Number(state.secondNumber)).toFixed(4);
            break;
        case '*': output.innerText = state.firstNumber = Number(state.firstNumber) * Number(state.secondNumber); 
            break;
        case '-': output.innerText = state.firstNumber = Number(state.firstNumber) - Number(state.secondNumber); 
            break;
        case '+': output.innerText = state.firstNumber = Number(state.firstNumber) + Number(state.secondNumber); 
            break;
    }
    state.secondNumber = ''; 
    action = '';
}

// #########################

table.onclick = function(event) {
    let target = event.target;
    if (target.tagName != 'BUTTON') return;

    if (/[0-9/*+-]/.test(target.innerText)) {
        addSymbol(target.innerText);
    }

    if (target.innerText == 'C') {
        clearS();
    }

    if(target.innerText == '=') {
       equals();
    }

    if(target.innerText == '←') {
        output.innerText = slice(0, output.innerText - 1);
     }
}

// ###########################