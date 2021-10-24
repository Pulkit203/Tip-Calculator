// claculate Tip
function claculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numofPeople = document.getElementById("peopleamt").value;

  // validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }

  // check to see if the input is empty or less than or equal to 1
  if (numofPeople === "" || numofPeople <= 1) {
    numofPeople = 1;
    document.getElementById("each").style.display = "none";
    document.getElementById("each2").style.display = "none";
  } else {
    document.getElementById("each").style.display = "flex";
    document.getElementById("each2").style.display = "flex";
  }

  // Claculate Tip
  var total = (billAmt * serviceQual) / numofPeople;
  total = Math.round(total);

//   Display the tip 
  document.getElementById("totalTip").style.display = "flex";
  document.getElementById("tip").innerHTML = total;
  document.getElementById("totalbill").style.display = "flex";
  document.getElementById("bill").innerHTML = Math.ceil(billAmt/numofPeople)+total;
}
// Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("totalbill").style.display = "none";
document.getElementById("each2").style.display = "none";

// click to call function
document.getElementById("calculate").onclick = function () {
  claculateTip();
};
