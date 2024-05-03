const button_1 = document.querySelector('#button1');
const button_2 = document.querySelector('#button2');
const button_3 = document.querySelector('#button3');
const checkButton = document.querySelector('.check-button');

const description = document.querySelector('.description');
const question = document.querySelector('.question');
const question_number = document.querySelector('.problem-number');
const answerInput = document.querySelector('.input-answer');
const card = document.querySelector('#cards');

let number;

const hide = document.querySelector('.answer');
const hideMain = document.querySelector('.main-content');
const card2 = document.querySelector('.replacer');

card2.style.display = 'none';

button_1.onclick = problem_1;
button_2.onclick = problem_2;
button_3.onclick = problem_3;

function problem_1() 
{
  question.innerHTML = "<b>Multiples of 3 of 5</b>";
  question_number.innerHTML = "<b>Problem 1</b>";
  description.innerHTML = "If we list all the natural numbers below <b>10</b> that are multiples " +
  "of <b>3</b> or <b>5</b>, we get <b>3</b>, <b>5</b>, <b>6</b> and <b>9</b>. The sum of these multiples is <b>23</b>.<br><br>" +
  "Find the sum of all the multiples of <b>3</b> or <b>5</b> below <b>1000</b>";

  hideMain.classList.remove('d-none');
  hide.classList.remove('d-none');
  card2.style.display = 'none';
}

function problem_2() 
{
  question.innerHTML = "<b>Even Fibonacci Numbers</b>";
  question_number.innerHTML = "<b>Problem 2</b>";
  description.innerHTML = "Each new term in the Fibonacci sequence is generated by adding " +
    "the previous two terms. By starting with <b>1</b> and <b>2</b>, the first <b>10</b> terms will be:<br><br>" +
    "<b>1, 2, 3, 5, 8, 1, 21, 34, 55, 89</b>,...<br><br>" +
    "By considering the terms in the Fibonacci sequence whose values do not exceed four million," +
    " find the sum of the even-valued terms.";

  hideMain.classList.remove('d-none');
  hide.classList.remove('d-none');
  card2.style.display = 'none';
}

function problem_3() 
{
  question.innerHTML = "<b>Largest Prime Factor</b>";
  question_number.innerHTML = "<b>Problem 3</b>";
  description.innerHTML = "The prime factors of <b>13195</b> are <b>5, 7, 13</b> and <b>29</b>.<br><br>" +
  "What is the largest prime factor of the number <b>600851475143</b>?";

  hideMain.classList.remove('d-none');
  hide.classList.remove('d-none');  
  card2.style.display = 'none';
}


function checkAnswer(number) 
{
   const answer = answerInput.value; 

  if (answer == number) 
  {
    // swal("Good job!", "Congratulation!", "success");
    Swal.fire("Good job!", "Congratulations!", "success");
    hide.classList.add('d-none');
    card2.style.display = 'block';
    card.innerHTML = number;

     // Create and position balloons

    for (let i = 1; i <= 20; i++) 
    { // Adjust the number of streamers as needed
      createPaper();
    }
  } 
  else 
  {
    // swal("Incorrect!", "Wrong Answer!", "error");
    Swal.fire("Oops!", "That's the wrong answer. Try Again", "error");
  }

  // clear the input field

  answerInput.value = '';
}

button_1.addEventListener('click', function() 
{
  let totalSum = 0;

  for (let i = 1; i < 1000; i++) 
  {
    if (i % 3 === 0 || i % 5 === 0) 
    {
      totalSum = totalSum + i;
    }
  }


  // 233168
  number = totalSum;

});

button_2.addEventListener('click', function() {
  var sum = 0;
  var a = 1;
  var b = 2;
  var temp;

  while (a <= 4000000) 
  {
    if (a % 2 === 0) 
    {
        sum += a;
    }
      temp = a;
      a = b;
      b = temp + b;
  }

  // 4613732
  number = sum;
});

button_3.addEventListener('click', function() 
{
  var primeFactor = 600851475143;
  var largestPrimeFactor = 0;
  var i = 2;

  while (primeFactor !== 1) 
  {
    if (primeFactor % i === 0) 
    {
      largestPrimeFactor = i;
      primeFactor /= i;
    } 
    else 
    {
      i++;
    }
  }

  // 6857
  number = largestPrimeFactor;
});

checkButton.addEventListener('click', function()
{
  checkAnswer(number);
});


function createPaper() 
{
  const paper = document.createElement('div');
  paper.classList.add('paper');

  // Define an array of colors
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  // Randomly select a color
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  paper.style.backgroundColor = color;

  // Randomly position paper
  const screenWidth = window.innerWidth;
  const randomLeft = Math.floor(Math.random() * screenWidth);
  paper.style.left = randomLeft + 'px';

  document.body.appendChild(paper);

  // Animate paper
  const animationDuration = Math.random() * 5 + 3; 
  paper.style.animation = `paperAnimation ${animationDuration}s linear`;

  // Remove paper after animation ends
  paper.addEventListener('animationend', () => 
  {
    paper.remove();
  });
}