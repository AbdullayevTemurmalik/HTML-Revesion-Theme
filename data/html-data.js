export const htmlData = [
  {
    id: 1,
    title: "Kirish: HTML nima o'zi?",
    category: "Kirish",
    desc: "Tasavvur qil, HTML - bu uyning fundamenti va g'ishti. Busiz sayt bo'lmaydi. Bu bo'limda biz 'Live Server'ni o'rnatamiz, u kod yozishimiz bilan natijani brauzerda ko'rsatadi.",
    reja: "VS Code o'rnatish, index.html faylini ochish va asosiy strukturani tushunish.",
    vazifa:
      "VS Code-da bitta fayl ochib, ichiga ismingni yozib brauzerda ko'rib kel.",
    example:
      "\n<!DOCTYPE html>\n<html>\n  <body>\n    <h1>Bu mening birinchi saytim!</h1>\n  </body>\n</html>",
  },
  {
    id: 2,
    title: "Sarlavhalar va Matnlar",
    category: "Tag va Attribute",
    desc: "Saytda sarlavhalar (h1-h6) va oddiy matnlar (p) bo'ladi. H1 - eng kattasi, H6 - eng kichigi. Shuningdek, matnni qalin qilish (b) yoki ostiga chizish (u) mumkin.",
    reja: "Sarlavhalar turlari, matnni bezash teglari va attributlar (qo'shimcha ma'lumotlar).",
    vazifa:
      "Kitob nomi (h1), uning muallifi (h3) va qisqacha mazmuni (p) yozilgan sahifa yasa.",
    example:
      "<h1>Qiyomat (H1)</h1>\n<p>Bu <b>qalin matn</b> va bu <u>tagiga chizilgan</u>.</p>",
  },
  {
    id: 3,
    title: "Rang berish: CSS sirlari",
    category: "CSS kirish",
    desc: "Sayt qop-qora bo'lib turmasligi uchun unga rang beramiz. Buni 'style' degan so'z orqali qilamiz. Masalan: matn rangi qizil bo'lsin, orqa foni esa ko'k.",
    reja: "Teg ichida 'style' yozish, ranglar (color) va matn hajmi (font-size).",
    vazifa:
      "Dunyodagi eng chiroyli gapingizni yozib, uning rangini yashil qiling.",
    example:
      "\n<p style='color: green; font-size: 30px;'>Yashil va katta matn</p>",
  },
  {
    id: 4,
    title: "Katta va Kichik qutilar (Block vs Inline)",
    category: "Block va Inline",
    desc: "HTML-da ba'zi teglar o'zidan keyin hech kimni sig'dirmaydi (Block), ba'zilari esa yonma-yon turaveradi (Inline). Bu xuddi avtobusdagi o'rindiqqa o'xshaydi.",
    reja: "div (katta quti) va span (kichik bo'lak) o'rtasidagi farqni bilish.",
    vazifa:
      "Ikkita div yozib ko'r, ular nega ustma-ust tushib qolishini tushunib ol.",
    example:
      "<div style='background: red;'>Men qatorni to'liq egallayman</div>\n<span style='background: blue;'>Men esa faqat o'zimga kerakli joyni olaman</span>",
  },
  {
    id: 5,
    title: "Nomi bor elementlar (ID va Class)",
    category: "ID va Class",
    desc: "Tasavvur qil, sinfda 5 ta bola bor. Hammasining ismi 'Bola' (Class). Lekin bittasining 'ID'-si (pasport raqami) 'Ali'. Biz Ali deganimizda faqat u qaraydi.",
    reja: "Class yordamida bir guruhni boshqarish, ID bilan bittasini tanlab olish.",
    vazifa:
      "Uchta p tegi yoz, ikkitasiga bir xil class ber, bittasiga ID berib rangini alohida qil.",
    example:
      "<p class='matn'>Biz bir xilmiz</p>\n<p class='matn'>Biz ham bir xilmiz</p>\n<p id='maxsus'>Men boshqachaman!</p>",
  },
  {
    id: 6,
    title: "Rasm va Videolar (Media)",
    category: "Media",
    desc: "Sayt rasmsiz zerikarli! 'img' tegi rasm chiqaradi, 'video' tegi esa video qo'yadi. Agar Youtube-dan video qo'ymoqchi bo'lsang, 'iframe' kerak bo'ladi.",
    reja: "Rasm qo'yish (img), Video va Youtube videolarini ulash.",
    vazifa: "Internetdan sevimli mashinang rasmiga link topib, saytingga qo'y.",
    example:
      "\n<img src='https://picsum.photos/200' alt='Tasodifiy rasm'>\n<video controls width='300' src='video.mp4'></video>",
  },
  {
    id: 7,
    title: "Tartibli Jadvallar (Table)",
    category: "Table",
    desc: "Jadval xuddi kundalikka o'xshaydi. Unda ustun (th) va qator (tr) bo'ladi. Ma'lumotlar esa katakchalar (td) ichida yoziladi.",
    reja: "Table strukturasi: sarlavha qismi (thead) va ma'lumot qismi (tbody).",
    vazifa: "Dars jadvalingni: Soat va Fan ustunlari bilan yasab ko'r.",
    example:
      "<table>\n  <tr> <th>Soat</th> <th>Fan</th> </tr>\n  <tr> <td>09:00</td> <td>Dasturlash</td> </tr>\n</table>",
  },
  {
    id: 8,
    title: "Anketalar yasash (Form)",
    category: "Form",
    desc: "Foydalanuvchidan ma'lumot olishimiz kerak bo'lsa, 'input' kerak. U har xil bo'ladi: yozish uchun, parol uchun yoki 'check' qilish uchun.",
    reja: "Text, password, checkbox (belgilash) va tugma (button) yasash.",
    vazifa: "Ism va Parol so'raydigan kichik ro'yxatdan o'tish oynasini yasa.",
    example:
      "<form>\n  <input type='text' placeholder='Ismingiz'>\n  <input type='password' placeholder='Maxfiy parol'>\n  <button>Yuborish</button>\n</form>",
  },
  {
    id: 9,
    title: "Havolalar va Tanlovlar (Linklar)",
    category: "Link",
    desc: "Link (a tegi) - bu eshik. Uni bossang boshqa sahifaga o'tadi. 'target=_blank' desang, sayting yopilmasdan yangi oynada ochadi.",
    reja: "Linklar (a), Select (tanlov ro'yxati) va Textarea (katta xat yozish joyi).",
    vazifa: "Google-ga olib boradigan va yangi oynada ochiladigan link yasa.",
    example:
      "<a href='https://google.com' target='_blank'>Google-ga o'tish</a>\n<select>\n  <option>Buxoro</option>\n  <option>Xorazm</option>\n</select>",
  },
  {
    id: 10,
    title: "Mantiqiy bo'laklar (Semantic)",
    category: "Semantic",
    desc: "Hamma narsani 'quti' (div) deb nomlasak, Google adashib qoladi. Shuning uchun: Tepa qism - Header, O'rta qism - Main, Pastki qism - Footer deb ataladi.",
    reja: "header, nav (menyu), main, footer kabi mantiqiy teglarni to'g'ri qo'llash.",
    vazifa:
      "Saytingni mantiqiy qismlarga bo'lib, har birining ichiga matn yoz.",
    example:
      "<header>Saytim logosi va menyusi</header>\n<main>Bu yerda asosiy maqola bor</main>\n<footer>Bog'lanish: +998...</footer>",
  },
  {
    id: 11,
    title: "Amaliyot: Menyu yasash",
    category: "Amaliyot",
    desc: "Kel, endi barcha bilganlarimizni birlashtirib, saytlarning tepasidagi 'Navbar'ni yasaymiz. Bunda Logo chapda, linklar esa tartib bilan turadi.",
    reja: "Nav tegi ichida ro'yxat (ul) orqali menyu yasash va unga style berish.",
    vazifa: "Bosh sahifa, Xizmatlar va Aloqa degan yozuvlari bor menyu yasa.",
    example:
      "<nav style='display: flex; gap: 20px; background: grey;'>\n  <b>LOGO</b>\n  <a href='#'>Asosiy</a>\n  <a href='#'>Aloqa</a>\n</nav>",
  },
  {
    id: 12,
    title: "Final: Imtihon Loyihasi",
    category: "Imtihon",
    desc: "Sen endi HTML ustasisan! Bor bilimingni ishga solib, o'zing haqingda chiroyli Portfolio (shaxsiy sahifa) yasa. Rasm, link, jadval va formani ham qo'sh.",
    reja: "Mustaqil ravishda to'liq sayt strukturasini qurish.",
    vazifa:
      "O'zing haqingda rasm, o'qigan joying haqida jadval va senga xat yuborish uchun forma bor sayt yasa.",
    example: "<h1>Mening Portfoliom</h1>\n<p>Hammasi tayyor, muvaffaqiyat!</p>",
  },
];
