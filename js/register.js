const registerForm =
document.getElementById("registerForm");

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

// register
registerForm.addEventListener("submit", function(e){

  e.preventDefault();

  const nama =
  document.getElementById("nama").value;

  const email =
  document.getElementById("email").value;

  const password =
  document.getElementById("password").value;

  const confirmPassword =
  document.getElementById("confirmPassword").value;

  const agree =
  document.getElementById("agree").checked;

  // validasi
  if(nama === ""){
    alert("Nama lengkap wajib diisi!");
    return;
  }

  if(email === ""){
    alert("Email wajib diisi!");
    return;
  }

  if(password.length < 6){
    alert("Password minimal 6 karakter!");
    return;
  }

  if(password !== confirmPassword){
    alert("Konfirmasi password tidak cocok!");
    return;
  }

  if(!agree){
    alert("Setujui syarat & ketentuan!");
    return;
  }

  // simpan data
  const dataUser = {
    nama: nama,
    email: email,
    password: password
  };

  localStorage.setItem(
    "user",
    JSON.stringify(dataUser)
  );

  alert("Registrasi berhasil!");

  form.reset();

  // pindah ke login
  window.location.href = "index.html";

});