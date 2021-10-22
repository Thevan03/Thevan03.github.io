let calculate = document.getElementById("cal");
let refresh = document.getElementById("refresh");

calculate.addEventListener("click", function () {
  let num = document.getElementById("num");
  let ans = document.getElementById("ans");
  let f_ans = 1;

  if (isNaN(num.value)) {
    alert("Error!!! Please insert a valid number");
    location.reload();
  } else {
    for (let i = 1; i <= num.value; i++) {
      f_ans *= i;
      document.getElementById("ans").innerHTML =
        "Factorial (" +
        num.value +
        ") = " +
        f_ans +
        "<br><br> Have a nice day!!";
    }
  }
});

refresh.addEventListener("click", function () {
  location.reload();
});
