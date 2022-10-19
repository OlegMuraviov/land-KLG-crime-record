const selectMobile = document.querySelector("#selectMobile");
const selectDesktop = document.querySelector("#selectDesktop");
const allLang = ["uk", "ru"];

selectMobile.addEventListener("change", (e) => {
  changeURLLanguage(e);
});
selectDesktop.addEventListener("change", (e) => {
  changeURLLanguage(e);
});

function changeURLLanguage(e) {
  let lang = "";
  if (e.target.id === "selectMobile") {
    lang = selectMobile.value;
  }
  if (e.target.id === "selectDesktop") {
    lang = selectDesktop.value;
  }
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;

  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#uk";
    location.reload();
  }

  selectMobile.value = hash;
  selectDesktop.value = hash;
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  for (let key in langArr) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
      console.log();
    }
  }
}

changeLanguage();
