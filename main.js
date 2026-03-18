import { htmlData } from "./data/html-data.js";

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const menuButtons = document.querySelectorAll(".menu-btn");
const mainLogo = document.getElementById("mainLogo");

function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    resultsDiv.innerHTML =
      "<p class='no-result' style='width:100%; text-align:center;'>Hech narsa topilmadi...</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    const highlight = (text) => {
      if (!term || term.trim() === "") return text;
      const regex = new RegExp(`(${term})`, "gi");
      return text.replace(regex, (match) => `<mark>${match}</mark>`);
    };

    card.innerHTML = `
            <h3>${highlight(item.title)} <span class="badge">${item.category}</span></h3>
            <p>${item.desc}</p>
            <p class="reja"><strong>📌 Reja:</strong> ${item.reja}</p>
            <p class="vazifa"><strong>📝 Vazifa:</strong> ${item.vazifa}</p>
            <pre><code>${item.example}</code></pre>
        `;
    resultsDiv.appendChild(card);
  });
}

function handleSearch(term) {
  const filtered = htmlData.filter((item) => {
    return (
      item.title.toLowerCase().includes(term) ||
      item.reja.toLowerCase().includes(term) ||
      item.vazifa.toLowerCase().includes(term)
    );
  });
  displayResults(filtered, term);
}

// Menyu tugmalari
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");
    const category = btn.getAttribute("data-category");

    if (category === "all") {
      searchInput.value = "";
      displayResults(htmlData, "");
    } else {
      searchInput.value = category;
      handleSearch(category.toLowerCase());
    }
  });
});

// Qidiruv maydoni
searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase().trim();
  if (term === "") {
    displayResults(htmlData, "");
  } else {
    handleSearch(term);
  }
});

// Logo bosilganda
mainLogo.addEventListener("click", () => {
  searchInput.value = "";
  displayResults(htmlData, "");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Sayt yuklanganda hammasini ko'rsatish
displayResults(htmlData, "");
