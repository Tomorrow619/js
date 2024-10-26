function updatecountryCode() {
  let country = document.getElementById("country").value;
  let codeInput = document.getElementById("code");

  const countryCodes = {
    uz: "+998",
    cz: "+420",
    ru: "+7",
    jp: "+81",
    usa: "+1",
  };

  if (countryCodes[country]) {
    codeInput.value = countryCodes[country];
  } else {
    codeInput.value = "";
  }
}
