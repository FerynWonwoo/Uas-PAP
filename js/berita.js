const filters = document.querySelectorAll(".filter");
const articles = document.querySelectorAll(".article-card");
const searchInput = document.getElementById("searchInput");

let currentFilter = "all";



// FILTER BUTTON
filters.forEach(button => {

    button.addEventListener("click", () => {

        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        currentFilter = button.getAttribute("data-filter");

        filterArticles();

    });

});



// SEARCH REALTIME
searchInput.addEventListener("input", () => {
    filterArticles();
});



// FILTER FUNCTION
function filterArticles(){

    const searchValue = searchInput.value.toLowerCase();

    articles.forEach(article => {

        // CATEGORY
        const category = article.getAttribute("data-category");

        // TITLE
        const title = article.querySelector("h2")
            .textContent
            .toLowerCase();

        // DESCRIPTION
        const description = article.querySelector("p")
            .textContent
            .toLowerCase();

        // TAG
        const tag = article.querySelector(".tag")
            .textContent
            .toLowerCase();

        // MATCH FILTER
        const matchCategory =
            currentFilter === "all" ||
            currentFilter === category;

        // MATCH SEARCH
        const matchSearch =
            title.includes(searchValue) ||
            description.includes(searchValue) ||
            tag.includes(searchValue);

        // SHOW / HIDE
        if(matchCategory && matchSearch){
            article.style.display = "flex";
        } else {
            article.style.display = "none";
        }

    });

}

// ===== LOGOUT =====
const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", () => {

    const konfirmasi = confirm("Yakin ingin keluar?");

    if(konfirmasi){

        alert("Berhasil logout");

        window.location.href = "index.html";

    }

});