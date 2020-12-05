function duplicateEncoder(word) { 

  const charArray = word.split('');
  let charCount = 0;
  console.log(charArray);
  const answerArray = [];
  charArray.map((char) => {

    if (charArray.indexOf(char)){
      answerArray.push(')')

    } else if (!charArray.indexOf(char)) {
      answerArray.push('(');

    }

  })
  console.log('answer array: ', answerArray);
}

const testWord = "recede";
duplicateEncoder(testWord);