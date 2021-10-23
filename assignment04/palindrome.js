let check = document.getElementById("check");

check.addEventListener("click", function () {
  let word = document.getElementById("word");

  if (isNaN(word.value)) {
    let arrayword = word.value.split("").reverse().join("");

    if (word.value == arrayword) {
      alert("Result is " + arrayword + ". " + word.value + " is a palindrome");
    } else {
      alert(
        "Result is " + arrayword + ". " + word.value + " is not a palindrome"
      );
    }
    location.reload();
  } else {
    alert("Error!! Please enter word");
    location.reload();
  }
});
