const buttons = document.querySelectorAll('button[type="button"]');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultInput = document.getElementById('result');

const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => b === 0 ? NaN : a / b
};

buttons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const action = event.currentTarget.dataset.action;
    const a = parseFloat(num1Input.value);
    const b = parseFloat(num2Input.value);
    
    if (isNaN(a) || isNaN(b)) {
      resultInput.value = '';
      console.log('Please enter valid numbers in both fields.');
      return;
    }
    
    const compute = operations[action];
    const result = compute(a, b);
    
    resultInput.value = isNaN(result) ? 'Error' : result;
    console.log(`Action: ${action}. Result: ${result}`);
  });
});