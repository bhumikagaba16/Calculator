let display = document.getElementById("display");

// Number/operator add karne ke liye
function addValue(value) {
  display.value += value;
}

// Sab clear karne ke liye
function clearDisplay() {
  display.value = "";
}

// Last character delete karne ke liye
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Final result nikalne ke liye
function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}