const submitBtn = document.querySelector('#submit');


function returnInput(inputPar) {
    return console.log(inputPar);
}

submitBtn.onclick = () => {
    let input = document.querySelector('#input').value;
    returnInput(input);
}