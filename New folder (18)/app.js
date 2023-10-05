//chapter 35 - 38
//Q1
function displayCurrentDateTime() {
    const currentDate = new Date();
    const dateTimeString = currentDate.toLocaleString();
    document.getElementById('datetime-container').textContent = dateTimeString;
}
  
//Q2
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    alert(`Hello, ${fullName}! Welcome!`);
}

//Q3
function addNumbers() {
    const num1 = parseFloat(prompt('Enter the first number:'));
    const num2 = parseFloat(prompt('Enter the second number:'));
    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      return sum;
    } else {
      return 'Invalid input. Please enter valid numbers.';
    }
}
  
//Q4
function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Division by zero is not allowed.';
        }
      default:
        return 'Invalid operator. Please use +, -, *, or /.';
    }
}
  
//Q5
function square(number) {
    return number * number;
}
  
//Q6
function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    return number * factorial(number - 1);
}
  
//Q7
function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
      console.log(i);
    }
}
  
//Q8
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
      return x * x;
    }  
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuseSquare = baseSquare + perpendicularSquare;
    const hypotenuse = Math.sqrt(hypotenuseSquare);
    return hypotenuse;
}
  const baseLength = 3;
  const perpendicularLength = 4;
  const hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
  
  console.log(`The hypotenuse of the right triangle is: ${hypotenuse}`);
  
//Q9
//Argument as Value
function calculateRectangleArea(width, height) {
    return width * height;
}

  const area1 = calculateRectangleArea(5, 10);
  console.log(`The area of the rectangle is: ${area1}`);
  
//Argument as variables
function calculateRectangleAreaWithVariables() {
    const width = 5;
    const height = 10;
    const area = width * height;
    return area;
}
  
  const area2 = calculateRectangleAreaWithVariables();
  console.log(`The area of the rectangle is: ${area2}`);
  
//Q10
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
  
  const inputString = "madam";
  if (isPalindrome(inputString)) {
    console.log(`${inputString} is a palindrome.`);
} else {
    console.log(`${inputString} is not a palindrome.`);
}
  
//Q11
function capitalizeFirstLetterOfEachWord(inputString) {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
}
  
  const inputstring = 'the quick brown fox';
  const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
  console.log(capitalizedString); 
  
//Q12
function findLongestWord(inputString) {
    const words = inputString.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
      return longestWord;
}
  
  const Inputstring = 'Web Development Tutorial';
  const longestWord = findLongestWord(inputString);
  console.log(`The longest word is: ${longestWord}`); 
  
//Q13
function countOccurrencesOfLetter(inputString, letter) {
    let count = 0;
  
    for (let i = 0; i < inputString.length; i++) {
      if (inputString.charAt(i) === letter) {
        count++;
      }
    }
      return count;
}
  
  const InputString = 'JSResourceS.com';
  const letterToCount = 'o';
  const occurrences = countOccurrencesOfLetter(inputString, letterToCount);
  console.log(`The letter '${letterToCount}' appears ${occurrences} times in the string.`);

//Q14
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
  }
  
  function calcArea(radius) {
    const area = Math.PI * Math.pow(radius, 2);
    console.log(`The area is ${area.toFixed(2)}`);
}
  
  const radius = 5;
  calcCircumference(radius); 
  calcArea(radius); 
  



























































