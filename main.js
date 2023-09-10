const date = document.querySelector("input");
const submitButton = document.querySelector("button");
const targetDiv = document.querySelector(".target");

let enteredYear = null;

const checkPrimeYear = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

submitButton.addEventListener("click", () => {
  enteredYear = parseInt(date.value.split("-")[0]);

  if (isNaN(enteredYear)) {
    alert("Please pick a date first.");
    return;
  }

  const isPrimeYear = checkPrimeYear(enteredYear);
  if (isPrimeYear) {
    targetDiv.innerText = "Yayy your birth year is a prime number year 😁";
  } else {
    targetDiv.innerText = "Oops your birth year is not a prime number year 😣";
  }
});
