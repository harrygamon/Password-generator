
// Character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

// Generate password
function generatePassword() {
  const length = parseInt(document.getElementById("password-length").value);
  const includeUpper = document.getElementById("include-uppercase").checked;
  const includeLower = document.getElementById("include-lowercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  let charPool = "";
  if (includeUpper) charPool += uppercaseChars;
  if (includeLower) charPool += lowercaseChars;
  if (includeNumbers) charPool += numberChars;
  if (includeSymbols) charPool += symbolChars;

  if (charPool.length === 0) {
    alert("Please select at least one character type!");
    return "";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
  }
  return password;
}

// Update displayed length when slider moves
document.getElementById("password-length").addEventListener("input", function() {
  document.getElementById("length-display").textContent = this.value;
});

// Generate both passwords
function generatePasswords() {
  document.getElementById("password").textContent = generatePassword();
  document.getElementById("password-2").textContent = generatePassword();
}

// Copy password to clipboard
function copyPassword(id) {
  const passwordText = document.getElementById(id).textContent;
  if (!passwordText) {
    alert("No password to copy!");
    return;
  }
  navigator.clipboard.writeText(passwordText).then(() => {
    alert("Password copied to clipboard!");
  });
}

// Bind buttons
document.getElementById("generate-btn").addEventListener("click", generatePasswords);
document.getElementById("main-generate-btn").addEventListener("click", generatePasswords);
