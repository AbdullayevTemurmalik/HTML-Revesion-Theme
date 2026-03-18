export const htmlData = [
  {
    id: 1,
    title: "Kirish: HTML nima o'zi?",
    category: "Kirish",
    desc: "Tasavvur qil, HTML - bu uyning fundamenti va g'ishti. Busiz sayt bo'lmaydi.",
    reja: "VS Code o'rnatish, index.html faylini ochish va asosiy strukturani tushunish.",
    vazifa:
      "VS Code-da bitta fayl ochib, ichiga ismingni yozib brauzerda ko'rib kel.",
    example:
      "<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Bu mening birinchi saytim!</h1>\n  </body>\n</html>",
  },
  {
    id: 2,
    title: "Sarlavhalar va Matnlar",
    category: "Tag va Attribute",
    desc: "Saytda sarlavhalar (h1-h6) va oddiy matnlar (p) bo'ladi.",
    reja: "Sarlavhalar turlari, matnni bezash teglari va attributlar.",
    vazifa:
      "Kitob nomi (h1), uning muallifi (h3) va qisqacha mazmuni (p) yozilgan sahifa yasa.",
    example:
      "<h1>Qiyomat (H1)</h1>\n<p>Bu <b>qalin matn</b> va bu <u>tagiga chizilgan</u>.</p>",
  },
  {
    id: 3,
    title: "Rang berish: CSS sirlari",
    category: "CSS kirish",
    desc: "Sayt qop-qora bo'lib turmasligi uchun unga rang beramiz.",
    reja: "Teg ichida 'style' yozish, ranglar (color) va matn hajmi (font-size).",
    vazifa:
      "Dunyodagi eng chiroyli gapingizni yozib, uning rangini yashil qiling.",
    example:
      "<p style='color: green; font-size: 30px;'>Yashil va katta matn</p>",
  },
  {
    id: 4,
    title: "Katta va Kichik qutilar (Block vs Inline)",
    category: "Block va Inline",
    desc: "HTML-da ba'zi teglar o'zidan keyin hech kimni sig'dirmaydi (Block), ba'zilari esa yonma-yon turaveradi (Inline).",
    reja: "div (katta quti) va span (kichik bo'lak) o'rtasidagi farqni bilish.",
    vazifa:
      "Ikkita div yozib ko'r, ular nega ustma-ust tushib qolishini tushunib ol.",
    example:
      "<div style='background: red;'>Men blockman</div>\n<span style='background: blue;'>Men inlineman</span>",
  },
  {
    id: 5,
    title: "Nomi bor elementlar (ID va Class)",
    category: "ID va Class",
    desc: "ID - bu pasport raqami (takrorlanmaydi), Class - bu kiyim (ko'pchilik kiyishi mumkin).",
    reja: "Class yordamida bir guruhni boshqarish, ID bilan bittasini tanlab olish.",
    vazifa:
      "Uchta p tegi yoz, ikkitasiga bir xil class ber, bittasiga ID berib rangini alohida qil.",
    example:
      "<p class='matn'>Biz bir xilmiz</p>\n<p id='maxsus'>Men boshqachaman!</p>",
  },
  {
    id: 6,
    title: "Rasm va Videolar (Media)",
    category: "Media",
    desc: "Saytni rasmlar va videolar bilan boyitish.",
    reja: "img (rasm), video va Youtube videolarini (iframe) ulash.",
    vazifa: "Internetdan sevimli mashinang rasmiga link topib, saytingga qo'y.",
    example:
      "<img src='image.jpg' alt='Rasm'>\n<video controls src='video.mp4'></video>",
  },
  {
    id: 7,
    title: "Tartibli Jadvallar (Table)",
    category: "Table",
    desc: "Ma'lumotlarni qator va ustunlar ko'rinishida tartiblash.",
    reja: "Table strukturasi: sarlavha qismi (th) va ma'lumot qismi (td).",
    vazifa: "Dars jadvalingni yasab ko'r.",
    example:
      "<table>\n  <tr> <th>Fan</th> <th>Vaqt</th> </tr>\n  <tr> <td>HTML</td> <td>09:00</td> </tr>\n</table>",
  },
  {
    id: 8,
    title: "Anketalar yasash (Form)",
    category: "Form",
    desc: "Foydalanuvchidan ma'lumot olish uchun formalar kerak.",
    reja: "input turlari, label va yuborish tugmasi.",
    vazifa: "Ism va Parol so'raydigan kichik ro'yxatdan o'tish oynasini yasa.",
    example:
      "<form>\n  <input type='text' placeholder='Ism'>\n  <button>Yuborish</button>\n</form>",
  },
  {
    id: 9,
    title: "Havolalar (Linklar)",
    category: "Link",
    desc: "Boshqa saytlarga yoki sahifalarga o'tish eshigi.",
    reja: "a tegi, href va target attributlari.",
    vazifa: "Google-ga olib boradigan va yangi oynada ochiladigan link yasa.",
    example: "<a href='https://google.com' target='_blank'>Google</a>",
  },
  {
    id: 10,
    title: "Mantiqiy bo'laklar (Semantic)",
    category: "Semantic",
    desc: "Sayt strukturasini to'g'ri nomlash (Header, Main, Footer).",
    reja: "Semantic teglarni div o'rnida to'g'ri qo'llash.",
    vazifa: "Saytingni mantiqiy qismlarga bo'lib chiq.",
    example: "<header>Tepa qism</header>\n<main>Asosiy qism</main>",
  },
  {
    id: 11,
    title: "Amaliyot: Menyu yasash",
    category: "Amaliyot",
    desc: "Hamma bilimlarni jamlab Navbar yasaymiz.",
    reja: "Nav tegi va ro'yxatlar orqali menyu tuzish.",
    vazifa: "Bosh sahifa, Xizmatlar va Aloqa menyusi bor sayt yasa.",
    example: "<nav>\n  <ul><li>Asosiy</li><li>Aloqa</li></ul>\n</nav>",
  },
  {
    id: 12,
    title: "Final: Imtihon Loyihasi",
    category: "Imtihon",
    desc: "Siz endi HTML ustasisiz! Yakuniy portfolio yarating.",
    reja: "Mustaqil ravishda to'liq sayt strukturasini qurish.",
    vazifa: "O'zingiz haqingizda mukammal bir sahifali sayt yarating.",
    example: "<h1>Muvaffaqiyatli yakunlandi!</h1>",
  },
];
