const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const backBtn = document.getElementById("backBtn");
const errorButton = document.getElementById("errorButton");

const uploadScreen = document.getElementById("uploadScreen");
const loadingScreen = document.getElementById("loadingScreen");
const resultScreen = document.getElementById("resultScreen");
const errorScreen = document.getElementById("errorScreen");

const documentType = document.getElementById("documentType");
const documentSummary = document.getElementById("documentSummary");
const deadlineDate = document.getElementById("deadlineDate");
const documentAction = document.getElementById("documentAction");

uploadBtn.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (!file) {
    return;
  }

  showScreen(loadingScreen);

  setTimeout(() => {
    documentType.textContent = "Parking Ticket";

    documentSummary.textContent =
      "This is a parking violation notice. You owe $65 for a parking violation.";

    deadlineDate.textContent = "August 15, 2026";

    documentAction.textContent =
      "Pay the ticket or submit a dispute before the deadline to avoid additional fees.";

    showScreen(resultScreen);
  }, 2500);
});

backBtn.addEventListener("click", () => {
  resetApp();
});

errorButton.addEventListener("click", () => {
  resetApp();
});

function showScreen(screen) {
  uploadScreen.classList.add("hidden");
  loadingScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  errorScreen.classList.add("hidden");

  screen.classList.remove("hidden");
}

function resetApp() {
  fileInput.value = "";

  showScreen(uploadScreen);
}