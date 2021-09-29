const dateOfBirth = document.querySelector('#date-of-birth');
const luckyNumber = document.querySelector('#lucky-number');
const checkNumberButton = document.querySelector('#check-number');
const outputBox = document.querySelector('#output-box');

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {

    outputBox.textContent = "Your birthday is lucky 😍";
  }
  else {
    outputBox.textContent = "Your birthday is not lucky 😭";
  }
}

function checkBirthDateIsLucky() {

  const dob = dateOfBirth.value;
  if (dob == "" || luckyNumber.value == "") {
    outputBox.style.color = "red";
    outputBox.textContent = "Both the fields are mandatory 😠";
  }
  else if(Number(luckyNumber.value)===0){
     outputBox.textContent = "Value cannot be zero"; 
  }
  else {
    const sum = calculateSum(dob);
    compareValues(sum, luckyNumber.value);
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i = i + 1) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky)

