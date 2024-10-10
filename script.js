function generatePassword() {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  const length = document.getElementById("length").value;
  let password = "";

  if (length < 6) {
    alert("Le mot de passe doit comporter au moins 6 caractères.");
    return;
  }

  // 1ère lettre: Majuscule
  password += upperCase.charAt(Math.floor(Math.random() * upperCase.length));

  // Suivantes: lettres minuscules, symboles, et chiffres
  const allCharacters = lowerCase + numbers + symbols;
  for (let i = 1; i < length - 2; i++) {
    password += allCharacters.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }

  // Avant-dernier: Symbole
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));

  // Dernier: Chiffre
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));

  document.getElementById("password").value = password;
}

function copyPassword() {
  const password = document.getElementById("password");
  const copyButton = document.getElementById("copyButton");

  password.select();
  password.setSelectionRange(0, 99999);
  document.execCommand("copy");

  copyButton.textContent = "Copié !";
  copyButton.classList.add("copied");

  setTimeout(() => {
    copyButton.textContent = "Copier";
    copyButton.classList.remove("copied");
  }, 2000);
}
