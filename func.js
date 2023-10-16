// Get DOM elements
const form = document.getElementById("form");
const resultContainer = document.getElementById("container-result");
const bmiResult = document.getElementById("result");
const classification = document.getElementById("classification");
const minWeight = document.getElementById("min-weight");
const maxWeight = document.getElementById("max-weight");

// Add event listener to the form
form.addEventListener("input", calculateBMI);

// Function to calculate BMI
function calculateBMI() {
  // Get user input values
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const feet = parseFloat(document.getElementById("feet").value);
  const inch = parseFloat(document.getElementById("inch").value);
  const st = parseFloat(document.getElementById("st").value);
  const lbs = parseFloat(document.getElementById("lbs").value);

  // Calculate BMI
  let bmi = 0;
  if (form.querySelector(".active").value === "metric") {
    bmi = weight / ((height / 100) ** 2);
  } else {
    const totalInches = feet * 12 + inch;
    bmi = (lbs / (totalInches ** 2)) * 703;
  }

  // Display BMI result
  resultContainer.style.display = "block";
  bmiResult.textContent = bmi.toFixed(1);

  // Determine classification
  if (bmi < 18.5) {
    classification.textContent = "Underweight";
  } else if (bmi < 24.9) {
    classification.textContent = "Healthy";
  } else if (bmi < 29.9) {
    classification.textContent = "Overweight";
  } else {
    classification.textContent = "Obese";
  }

  // Display ideal weight range
  const idealMin = 18.5 * ((height / 100) ** 2);
  const idealMax = 24.9 * ((height / 100) ** 2);
  minWeight.textContent = idealMin.toFixed(1);
  maxWeight.textContent = idealMax.toFixed(1);
}