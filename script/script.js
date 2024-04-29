const button_1 = document.querySelector('#button1');
const button_2 = document.querySelector('#button2');
const button_3 = document.querySelector('#button3');

const description = document.querySelector('.description');
const question = document.querySelector('.question');
const question_number = document.querySelector('.problem-number');

button_1.onclick = problem_1;
button_2.onclick = problem_2;
button_3.onclick = problem_3;

function problem_1() 
{
  question.innerText = "Multiples of 3 of 5";
  question_number.innerText = "Problem 1";
  description.innerText = "If we list all the natural numbers below 10 that are multiples" +
  "of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.\n\n" +
  "Find the sum of all the multiples of 3 or 5 below 1000";
}

function problem_2() 
{
  question.innerText = "Even Fibonacci Numbers";
  question_number.innerText = "Problem 2";
  description.innerText = "Each new term in the Fibonacci sequence is generated by adding" + 
  "the previous two terms. By starting with 1 and 2, the first 10 terms will be:\n\n" +
    "1, 2, 3, 5, 8, 13, 21, 34, 55, 89,...\n\n" +
  "By considering the terms in the Fibonacci sequence whose values do not exceed four million," +
  " find the sum of the even-valued terms.";
  
}

function problem_3() 
{
  question.innerText = "Largest Prime Factor";
  question_number.innerText = "Problem 3";
  description.innerText = "The prime factors of 13195 are 5, 7, 13 and 29.\n\n" +
  "What is the largest prime factor of the number 600851475143 ?";
  
}