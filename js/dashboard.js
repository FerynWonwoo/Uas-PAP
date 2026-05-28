// ==========================
// DASHBOARD JS
// ==========================



// ===== MENU ACTIVE =====
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {

    item.addEventListener("click", () => {

        menuItems.forEach((menu) => {
            menu.classList.remove("active");
        });

        item.classList.add("active");

    });

});



// ===== BUTTON BELAJAR =====
const btnBelajar = document.getElementById("btnBelajar");

btnBelajar.addEventListener("click", () => {

    btnBelajar.innerText = "Loading...";

    setTimeout(() => {

        btnBelajar.innerText = "Mulai Belajar";

        alert("Materi berhasil dibuka 🚀");

    }, 1200);

});



// ===== LOGOUT =====
const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", () => {

    const konfirmasi = confirm("Yakin ingin keluar?");

    if(konfirmasi){

        alert("Berhasil logout");

        window.location.href = "login.html";

    }

});



// ===== PROFILE =====
const profile = document.querySelector(".profile");

profile.addEventListener("click", () => {

    alert(
        "👤 Profile User\n\n" +
        "Nama : Andi\n" +
        "Status : Donatur Premium\n" +
        "Poin : 320"
    );

});



// ===== CARD CLICK =====
const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        if(index === 0){
            alert("Menampilkan materi yang dipelajari");
        }

        else if(index === 1){
            alert("Menampilkan total donasi");
        }

        else if(index === 2){
            alert("Menampilkan kampanye yang didukung");
        }

        else if(index === 3){
            alert("Menampilkan detail poin pengguna");
        }

    });

});



// ===== ACTIVITY CLICK =====
const activities = document.querySelectorAll(".activity");

activities.forEach((activity) => {

    activity.addEventListener("click", () => {

        const isi = activity.innerText;

        alert("Detail Aktivitas\n\n" + isi);

    });

});



// ===== CAMPAIGN CLICK =====
const campaigns = document.querySelectorAll(".campaign");

campaigns.forEach((campaign) => {

    campaign.addEventListener("click", () => {

        const judul = campaign.querySelector("h4").innerText;

        alert("Membuka kampanye:\n\n" + judul);

    });

});



// ===== HOVER CARD =====
cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-5px)";
        card.style.transition = "0.3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});



// ===== HOVER CAMPAIGN =====
campaigns.forEach((campaign) => {

    campaign.addEventListener("mouseenter", () => {

        campaign.style.transform = "scale(1.02)";
        campaign.style.transition = "0.3s";

    });

    campaign.addEventListener("mouseleave", () => {

        campaign.style.transform = "scale(1)";

    });

});



// ===== AUTO GREETING =====
window.addEventListener("load", () => {

    console.log("Dashboard EduDonasi berhasil dimuat");

});



// ===== REALTIME GREETING =====
const headerText = document.querySelector(".content-header p");

function updateGreeting(){

    const sekarang = new Date();

    const jam = sekarang.getHours();

    let greeting = "";

    if(jam < 12){
        greeting = "Selamat pagi";
    }

    else if(jam < 18){
        greeting = "Selamat siang";
    }

    else{
        greeting = "Selamat malam";
    }

    headerText.innerHTML =
        greeting +
        ", pantau aktivitas belajar dan donasimu dalam satu tempat.";

}

updateGreeting();



// ===== PROGRESS ANIMATION =====
const progressBars = document.querySelectorAll(".progress div");

progressBars.forEach((bar) => {

    const width = bar.style.width;

    bar.style.width = "0%";

    setTimeout(() => {

        bar.style.width = width;
        bar.style.transition = "1.5s";

    }, 300);

});