const loginForm =
document.getElementById("loginForm");

// toggle password
const togglePassword =
document.querySelectorAll(".toggle-password");

togglePassword.forEach((icon) => {

  icon.addEventListener("click", () => {

    const input = icon.previousElementSibling;

    if(input.type === "password"){

      input.type = "text";

      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");

    }else{

      input.type = "password";

      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");

    }

  });

});

// login
loginForm.addEventListener("submit", function(e){

  e.preventDefault();

  const email =
  document.getElementById("loginEmail").value;

  const password =
  document.getElementById("loginPassword").value;

  // ambil data user
  const user =
  JSON.parse(localStorage.getItem("user"));

  // cek akun
  if(user === null){

    alert("Akun belum terdaftar!");
    return;

  }

  // validasi login
  if(
    email === user.email &&
    password === user.password
  ){

    alert("Login berhasil!");

    // pindah halaman
    window.location.href = "dashboard.html";

  }else{

    alert("Email atau password salah!");

  }

});