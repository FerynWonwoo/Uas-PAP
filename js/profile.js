// SIMPAN DATA PROFIL
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", function () {

    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;

    localStorage.setItem("profileEmail", email);
    localStorage.setItem("profilePhone", phone);
    localStorage.setItem("profileAddress", address);

    alert("Profil berhasil disimpan!");
});

// TAMPILKAN DATA YANG SUDAH DISIMPAN
window.addEventListener("DOMContentLoaded", function () {

    const savedEmail = localStorage.getItem("profileEmail");
    const savedPhone = localStorage.getItem("profilePhone");
    const savedAddress = localStorage.getItem("profileAddress");

    if (savedEmail) {
        document.getElementById("emil").value = savedEmail;
    }

    if (savedPhone) {
        document.getElementById("phone").value = savedPhone;
    }

    if (savedAddress) {
        document.getElementById("address").value = savedAddress;
    }
});

// LOGOUT
const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", function () {

    alert("Berhasil logout!");

    window.location.href = "index.html";
});