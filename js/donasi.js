document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // SEARCH KAMPANYE
    // =========================
    const searchInput = document.querySelector(".search-box input");
    const campaignCards = document.querySelectorAll(".campaign-card");

    searchInput.addEventListener("keyup", function () {

        const keyword = searchInput.value.toLowerCase();

        campaignCards.forEach(card => {

            const title = card.querySelector("h2").textContent.toLowerCase();
            const desc = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(keyword) || desc.includes(keyword)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });



    // =========================
    // FILTER KATEGORI
    // =========================
    const filterBtn = document.querySelector(".filter-btn");

    let currentCategory = "semua";

    filterBtn.addEventListener("click", function () {

        // Ganti kategori setiap klik
        if (currentCategory === "semua") {

            currentCategory = "pendidikan";
            filterBtn.innerHTML = `
                <i class="fa-solid fa-graduation-cap"></i>
                Pendidikan
            `;

        } else if (currentCategory === "pendidikan") {

            currentCategory = "kemanusiaan";
            filterBtn.innerHTML = `
                <i class="fa-solid fa-user-group"></i>
                Kemanusiaan
            `;

        } else if (currentCategory === "kemanusiaan") {

            currentCategory = "bencana";
            filterBtn.innerHTML = `
                <i class="fa-solid fa-cloud-showers-heavy"></i>
                Bencana
            `;

        } else {

            currentCategory = "semua";
            filterBtn.innerHTML = `
                <i class="fa-solid fa-sliders"></i>
                Semua Kategori
            `;

        }

        // Filter card
        campaignCards.forEach(card => {

            const tag = card.querySelector(".tag").textContent.toLowerCase();

            if (currentCategory === "semua") {

                card.style.display = "block";

            } else if (tag.includes(currentCategory)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });



    // =========================
    // ALERT DONASI
    // =========================
    const donateButtons = document.querySelectorAll(".card-footer button");

    donateButtons.forEach(button => {

        button.addEventListener("click", function () {

            const title = this.closest(".campaign-card")
                .querySelector("h2")
                .textContent;

            alert("Terima kasih sudah berdonasi untuk:\n" + title);

        });

    });



    // =========================
    // LOGOUT
    // =========================
    const logoutBtn = document.querySelector(".logout");

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        const confirmLogout = confirm("Yakin ingin logout?");

        if (confirmLogout) {

            alert("Berhasil logout!");

            window.location.href = "login.html";

        }

    });

});