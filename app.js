let state = {
    firstNumber: '',
    secondNumber: '',
    action: ''
}

// ########################

const output = document.getElementById('output');


// #######################

function numbers(target) {
    if(/[/*+-]/.test(target)) {
        state.action = target;
        output.innerText +=  state.action;
        return;
    }
    if (!state.action) {
        if (output.innerText == '0') output.innerText = '';
        state.firstNumber += target;
        output.innerText +=  target;
    } else {

        state.secondNumber += target;
        output.innerText +=  target;
    }
}

function clearS() {
    output.innerText =  '';
    state.firstNumber = '';
    state.secondNumber = '';
    state.action = '';
}

function equals() {
  //cosnole.log(state.action);
    switch(state.action) {
        case '/': output.innerText = state.firstNumber = Number(state.firstNumber) / Number(state.secondNumber); 
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
       numbers(target.innerText);
    }

    if (target.innerText == 'C') {
        clearS();
    }

    if(target.innerText == '=') {
       equals();
       console.log(state.action);
    }

}

// ###########################