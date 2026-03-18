import { htmlData } from "./data/html-data.js";

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");
const menuButtons = document.querySelectorAll(".menu-btn");
const mainLogo = document.getElementById("mainLogo");

/**
 * Natijalarni ekranga chiqarish funksiyasi
 */
function displayResults(data, term = "") {
  resultsDiv.innerHTML = "";

  if (data.length === 0) {
    resultsDiv.innerHTML = `
      <div class="no-result" style="width:100%; text-align:center; padding: 50px;">
        <i class='bx bx-search-alt' style='font-size: 3rem; color: #64748b;'></i>
        <p style="color: #64748b; margin-top: 10px;">Hech narsa topilmadi...</p>
      </div>`;
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    // Qidirilgan so'zni ajratib ko'rsatish (Highlight)
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

/**
 * Qidiruv va Filtratsiya logikasi
 */
function handleSearch(term) {
  const normalizedTerm = term.toLowerCase().trim();

  const filtered = htmlData.filter((item) => {
    return (
      item.title.toLowerCase().includes(normalizedTerm) ||
      item.category.toLowerCase().includes(normalizedTerm) || // Kategoriya bo'yicha qidiruv qo'shildi
      item.reja.toLowerCase().includes(normalizedTerm) ||
      item.vazifa.toLowerCase().includes(normalizedTerm)
    );
  });

  displayResults(filtered, normalizedTerm);
}

/**
 * Menyu tugmalari (Category Filter)
 */
menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Oldingi active tugmani o'chirish va yangisini yoqish
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    if (category === "all") {
      searchInput.value = ""; // Qidiruvni tozalash
      displayResults(htmlData, ""); // Hamma ma'lumotni chiqarish
    } else {
      searchInput.value = category; // Tanlangan kategoriyani inputga yozish
      handleSearch(category); // Filtrni ishga tushirish
    }
  });
});

/**
 * Qidiruv maydoniga yozganda ishlaydi
 */
searchInput.addEventListener("input", (e) => {
  const term = e.target.value;

  // Agar input bo'shatilsa, "Hammasi" tugmasini active qilish
  if (term.trim() === "") {
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    document.querySelector('[data-category="all"]').classList.add("active");
    displayResults(htmlData, "");
  } else {
    handleSearch(term);
  }
});

/**
 * Logotip bosilganda hammasini asl holiga qaytarish
 */
mainLogo.addEventListener("click", () => {
  searchInput.value = "";
  document.querySelector(".menu-btn.active")?.classList.remove("active");
  document.querySelector('[data-category="all"]').classList.add("active");
  displayResults(htmlData, "");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/**
 * Sayt ilk bor ochilganda
 */
function init() {
  // "Hammasi" tugmasini active qilib qo'yamiz
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.classList.add("active");

  displayResults(htmlData, "");
}

init();
