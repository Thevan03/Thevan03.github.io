let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click", function () {
  let userName = document.getElementById("userName");
  let userNameVal = userName.value;
  userNameVal = userNameVal.charAt(0).toUpperCase() + userNameVal.slice(1);

  let userEmail = document.getElementById("userEmail");
  let userEmailVal = userEmail.value;

  let userRoom = document.getElementById("userRoom");
  let userRoomVal = userRoom.value;

  let userRemarks = document.getElementById("userRemarks");
  let userRemarksVal = userRemarks.value;

  let userLocation = document.getElementById("userLocation");
  let userLocationVal = userLocation.value;
  userLocationVal =
    userLocationVal.charAt(0).toUpperCase() + userLocationVal.slice(1);

  if (userRemarksVal == "") {
    userRemarksVal = "-";
  }

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
    } else if (userLocationVal == "") {
      alert("Please provide your booking location");
      userLocation.style.border = "1px solid red";
      document.getElementById("emptyLocation").innerHTML =
        "<small><span style='color: red;'>Location Required</span></small>";
    } else {
      document.getElementById("emptyName").innerHTML = "";
      document.getElementById("emptyEmail").innerHTML = "";
      document.getElementById("emptyLocation").innerHTML = "";

      userName.style.border = "1px solid lime";
      userEmail.style.border = "1px solid lime";
      userLocation.style.border = "1px solid lime";
      BookNow(
        userNameVal,
        userEmailVal,
        userRoomVal,
        userLocationVal,
        userRemarksVal
      );
    }
  }
});

function BookNow(userName, userEmail, userRoom, userLocation, userRemarks) {
  let url =
    "https://api.sheety.co/153f5d805457d71cf25bd7930cdae11e/bookingApp/bookings";
  let body = {
    booking: {
      name: userName,
      email: userEmail,
      room: userRoom,
      location: userLocation,
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
