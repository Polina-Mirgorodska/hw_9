function logItems(array) {
  for (let i = 0; i < array.length; i+= 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

logItems(['Mango', 'Poly', 'Ajax']);


function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  return words.length * pricePerWord;
}

console.log(calculateEngravingPrice('Добро і зло', 100)); 


function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = '';

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('Сьогодні чудовй день'));


function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...';
}

console.log(formatString('Коротке речення'));
console.log(formatString('Довге речення повинно мати не менше ніж сорок букв'));



function checkForSpam(message) {
  const lowerCaseMessage = message.toLowerCase();
  return lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale');
}

console.log(checkForSpam('Що таке Sale')); 
console.log(checkForSpam('Привіт!'));    



let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введіть число:');
  
  if (input === null) {
    break;
  }
  
  const number = Number(input);
  numbers.push(number);
}

for (const num of numbers) {
  total += num;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
}