let calculate = document.getElementById("cal");

calculate.addEventListener("click", function () {
  let num = document.getElementById("num");
  let f_ans = 1;

  if (isNaN(num.value)) {
    alert("Error!!! Please insert a valid number");
    location.reload();
  } else {
    for (let i = 1; i <= num.value; i++) {
      f_ans *= i;
    }
    alert("Factorial (" + num.value + ") = " + f_ans);
  }
});
