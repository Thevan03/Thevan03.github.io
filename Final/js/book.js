let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName");
  let userNameVal = userName.value;

  let userEmail = document.getElementById("userEmail");
  let userEmailVal = userEmail.value;

  let userPax = document.getElementById("userPax");
  let userPaxVal = userPax.value;

  let userRemarks = document.getElementById("userRemarks");
  let userRemarksVal = userRemarks.value;

  let emptyName = document.getElementById("emptyName");
  let emptyEmail = document.getElementById("emptyEmail");

  if (userNameVal == "") {
    alert("Please provide your name");
    userName.style.border = "1px solid red";
    document.getElementById("emptyName").innerHTML =
      "<small><span style='color: red;'>Name Required</span></small>";
  } else {
    if (userEmailVal == "") {
      alert("Please provide your email");
      userEmail.style.border = "1px solid red";
      document.getElementById("emptyEmail").innerHTML =
        "<small><span style='color: red;'>Email Required</span></small>";
    } else {
      document.getElementById("emptyName").innerHTML = "";
      document.getElementById("emptyEmail").innerHTML = "";
      userName.style.border = "1px solid lime";
      userEmail.style.border = "1px solid lime";
      BookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
    }
  }
});

function BookNow(userName, userEmail, userPax, userRemarks) {
  let url =
    "https://api.sheety.co/153f5d805457d71cf25bd7930cdae11e/bookingApp/bookings";
  let body = {
    booking: {
      name: userName,
      email: userEmail,
      pax: userPax,
      remarks: userRemarks,
    },
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.booking);
      alert(json.booking.name + " added in the list");
    });
}
