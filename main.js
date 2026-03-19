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

    // HAR BIR KARTOCKA ICHIDAGI STRUKTURA (KOD VA NATIJA BILAN)
    card.innerHTML = `
            <h3>${highlight(item.title)} <span class="badge">${item.category}</span></h3>
            <p>${item.desc}</p>
            
            <div class="code-box" style="margin-top:20px;">
                <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:8px;">💻 Kod:</span>
                <pre style="background:#000; padding:20px; border-radius:12px; border:1px solid #1e293b; overflow-x:auto;"><code style="color:#fb7185; font-family:'JetBrains Mono', monospace; font-size:14px; line-height:1.5;">${item.code}</code></pre>
            </div>

            <div class="result-box" style="margin-top:20px; margin-bottom:20px;">
                <span style="font-size:12px; color:#94a3b8; display:block; margin-bottom:8px;">👀 Natija:</span>
                <div style="background:white; color:black; padding:15px; border-radius:10px; border:2px dashed #e34f26; min-height:40px;">
                    ${item.result}
                </div>
            </div>

            <p class="reja" style="margin-top:10px;"><strong>📌 Reja:</strong> ${item.reja}</p>
            <p class="vazifa" style="color:#10b981;"><strong>📝 Vazifa:</strong> ${item.vazifa}</p>
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
      item.category.toLowerCase().includes(normalizedTerm) ||
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
    document.querySelector(".menu-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");

    if (category === "all") {
      searchInput.value = "";
      displayResults(htmlData, "");
    } else {
      searchInput.value = category;
      handleSearch(category);
    }
  });
});

/**
 * Qidiruv maydoniga yozganda ishlaydi
 */
searchInput.addEventListener("input", (e) => {
  const term = e.target.value;

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
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.classList.add("active");
  displayResults(htmlData, "");
}

init();
