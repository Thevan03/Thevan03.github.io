function transformUppercase(_val) {
  return _val.toUpperCase();
}

// DOM event listener
let elNamaPengguna = document.getElementById("namaPengguna");
elNamaPengguna.addEventListener("keyup", function () {
  elNamaPengguna.value = transformUppercase(elNamaPengguna.value);
});

function checkPassword() {
  let elKatalaluan = document.getElementById("katalaluan");
  let pass_val = elKatalaluan;

  if (pass_val.length > 5) {
    alert("Password check....OK!");
  } else {
    alert("Password too short!");
  }
}

// Traditional DOM event handler
let elKL = document.getElementById("katalaluan");
elKL.onblur = checkPassword;
