const select = document.querySelector("select");
const allLang = ["uk", "ru"];

select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
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

  select.value = hash;
  document.querySelector("title").innerHTML = langArr["unit"][hash];
  for (let key in langArr) {
    let elem = document.querySelector('.lng-' + key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
      console.log()
    }
  }
}

changeLanguage();
