// Function for calculating grades
const calculate = () => {
  // Getting input from user into height variable.
  let Mathematics = document.getElementById("Mathematics").value;
  let Physics = document.getElementById("Physics").value;
  let Chemistry = document.getElementById("Chemistry").value;
  let Biology = document.getElementById("Biology").value;
  let Computer = document.getElementById("Computer").value;
  let Urdu = document.getElementById("Urdu").value;
  let English = document.getElementById("English").value;
  let Islamiat = document.getElementById("Islamiat").value;
  let PST = document.getElementById("PST").value;
  let grades = "";
  let remarks = "";

  // Input is string so typecasting is necessary. */
  let totalgrades =
    parseFloat(Mathematics) +
    parseFloat(Physics) +
    parseFloat(Chemistry) +
    parseFloat(Biology) +
    parseFloat(Computer) +
    parseFloat(Urdu) +
    parseFloat(English) +
    parseFloat(Islamiat) +
    parseFloat(PST);

  // Checking the condition for the providing the
  // grade to student based on percentage
  let percentage = (totalgrades / 800) * 100;
  if (percentage <= 100 && percentage >= 78) {
    grades = "A";
    remarks = "Excellent";
  } else if (percentage <= 77 && percentage >= 41) {
    grades = "B";
    remarks = "Average";
  } else if (percentage <= 40 && percentage >= 23) {
    grades = "C";
    remarks = "Satisfactory";
  } else {
    grades = "F";
    remarks = "Fail";
  }
  // Checking the values
  if (
    Mathematics == "" ||
    Mathematics < 1 ||
    Mathematics > 100 ||
    Physics == "" ||
    Physics < 1 ||
    Physics > 100 ||
    Chemistry == "" ||
    Chemistry < 1 ||
    Chemistry > 100 ||
    Biology == "" ||
    Biology < 1 ||
    Biology > 100 ||
    Computer == "" ||
    Computer < 1 ||
    Computer > 100 ||
    Urdu == "" ||
    Urdu < 1 ||
    Urdu > 100 ||
    English == "" ||
    English < 1 ||
    English > 100
  ) {
    document.getElementById(
      "error"
    ).innerHTML = `Enter correct value from 1-100`;
  } else if (
    Islamiat == "" ||
    Islamiat < 1 ||
    Islamiat > 50 ||
    PST == "" ||
    PST < 1 ||
    PST > 50
  ) {
    document.getElementById(
      "error"
    ).innerHTML = `Enter correct value from 1-50 (PST & Islamiat)`;
  } else {
    // Checking the condition for the fail and pass
    if (percentage >= 23) {
      document.getElementById("total").innerHTML = ` ${totalgrades} `;
      document.getElementById("per").innerHTML = `${percentage} `;
      document.getElementById("grade").innerHTML = ` ${grades} `;
      document.getElementById("remarks").innerHTML = `${remarks}`;
    } else {
      document.getElementById("total").innerHTML = ` ${totalgrades} `;
      document.getElementById("per").innerHTML = ` ${percentage} `;
      document.getElementById("grade").innerHTML = ` ${grades} `;
      document.getElementById("remarks").innerHTML = `${remarks}`;
    }
  }
};
