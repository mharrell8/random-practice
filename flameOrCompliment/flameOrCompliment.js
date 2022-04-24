// function that accepts two arguments of strings that are the names of person to flame and person to compliment
// log statements with the name of each. One being a flame other beign a compliment 
//  the statment that is logged is based on if random role of 0 or 1
// possible add some console styling with emojis



const flameOrCompliment = (flamed,complimented) => {
    // a random number generator of 1 or 0;
   const randomNumber = Math.round(Math.random());

// target the h1 element in DOM
   const theStatement = document.querySelector('#theStatement');


// 
   const statementMessage = () => {
    if (randomNumber === 1) {
      return `${flamed} licks &#128069 rocks &#128511;`;
    } else {
      return `${complimented} is da best &#128526;`;
    }
   }

   function writeStatement(statement,loadingMessage = 'Rolling') {
//    append ... to loading message
       theStatement.innerHTML = `${loadingMessage}...`;
    setTimeout(() => {
        theStatement.innerHTML = statement;
    }, 800);
       
   }

   writeStatement(statementMessage(),'wait')

}


