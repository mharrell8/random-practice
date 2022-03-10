const submitBtn = document.querySelector('#submit');
const listCont = document.querySelector('#list-container');


function createParagraphs(inputPar) {
   const newP = document.createElement('p');
   const newContent = document.createTextNode(inputPar);
   newP.appendChild(newContent);
   listCont.appendChild(newP);

}

submitBtn.onclick = () => {
    let input = document.querySelector('#input').value;
    createParagraphs(input);
    document.querySelector('#input').value = '';
}