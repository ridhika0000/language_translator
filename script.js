
// Selecting elements
const selectTag = document.querySelectorAll("select");
const translateBtn = document.querySelector("#transfer");
const fromText = document.querySelector("#fromtext");
const toText = document.querySelector("#totext");

// Populate select dropdowns
selectTag.forEach((tag, id) => {
  for (const countriesCode in countries) {
    let selected;
    if (id === 0 && countriesCode === "en-GB") {
      selected = "selected"; // Default "From" = English
    } else if (id === 1 && countriesCode === "hi-IN") {
      selected = "selected"; // Default "To" = Hindi
    }
    let option = `<option value="${countriesCode}" ${selected || ""}>${countries[countriesCode]}</option>`;
    tag.insertAdjacentHTML("beforeend", option);
  }
});

// Translate Button Event
translateBtn.addEventListener("click", () => {
  let text = fromText.value.trim();
  if (!text) return;

  let translateFrom = selectTag[0].value; // FROM language
  let translateTo = selectTag[1].value;   // TO language

  // MyMemory API URL
  let apiURL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${translateFrom}|${translateTo}`;

  // Fetch translation
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      toText.value = data.responseData.translatedText;
    })
    .catch(() => {
      toText.value = "Error in translation!";
    });
});

translateBtn.addEventListener("click", () => {
  let text = fromText.value.trim();
  if (!text) return;

  let translateFrom = selectTag[0].value; // FROM language
  let translateTo = selectTag[1].value;   // TO language

  // MyMemory API URL
  let apiURL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${translateFrom}|${translateTo}`;

  // Fetch translation
  fetch(apiURL)
    .then(res => res.json())
    .then(data => {
      toText.value = data.responseData.translatedText; // ✅ sets translation
    })
    .catch(() => {
      toText.value = "Error in translation!";
    });
});
