// Function for calculating grades
const calculate = () => {
  // Getting input from user into height variable.
  let chemistry = document.getElementById("chemistry").value;
  let urdu = document.getElementById("urdu").value;
  let maths = document.getElementById("maths").value;
  let phy = document.getElementById("phy").value;
  let islamic = document.getElementById("islamic").value;
  let pst = document.getElementById("pst").value;
  let grades = "";

  // Input is string so typecasting is necessary. */
  let totalgrades =
    parseFloat(chemistry) +
    parseFloat(urdu) +
    parseFloat(maths) +
    parseFloat(phy) +
    parseFloat(islamic) +
    parseFloat(pst);

  // Checking the condition for the providing the
  // grade to student based on percentage
  let percentage = (totalgrades / 500) * 100;
  if (percentage <= 100 && percentage >= 78) {
    grades = "A";
  } else if (percentage <= 77 && percentage >= 41) {
    grades = "B";
  } else if (percentage <= 40 && percentage >= 23) {
    grades = "C";
  } else {
    grades = "F";
  }
  // Checking the values
  if (
    chemistry == "" ||
    chemistry < 1 ||
    chemistry > 100 ||
    urdu == "" ||
    urdu < 1 ||
    urdu > 100 ||
    maths == "" ||
    maths < 1 ||
    maths > 100 ||
    phy == "" ||
    phy < 1 ||
    phy > 100
  ) {
    document.getElementById(
      "showdata"
    ).innerHTML = `Enter correct value from 1-100`;
  } else if (
    islamic == "" ||
    islamic < 1 ||
    islamic > 50 ||
    pst == "" ||
    pst < 1 ||
    pst > 50
  ) {
    document.getElementById(
      "showdata"
    ).innerHTML = `Enter correct value from 1-50 (PST & Islamiat)`;
  } else {
    // Checking the condition for the fail and pass
    if (percentage >= 23) {
      document.getElementById(
        "showdata"
      ).innerHTML = ` Out of 500 your total is ${totalgrades}
                  and your percentage is ${percentage}%. <br>
                  Your grade is ${grades}. You have Passed your exam. `;
    } else {
      document.getElementById(
        "showdata"
      ).innerHTML = ` Out of 500 your total is ${totalgrades}
                  and your percentage is ${percentage}%. <br>
                  Your grade is ${grades}. You have Failed your exam. `;
    }
  }
};
