const openButton = document.getElementById("open-button");
const phoneNumber = document.getElementById("number-input");
const regex = /^[0-9]+$/;

openButton.addEventListener("click", function () {
  if (`${phoneNumber.value}`.length === 10) {
    if (regex.test(`${phoneNumber.value}`)) {
      window.location.href = `https://wa.me/+254${phoneNumber.value}`;
    }
  }
});

phoneNumber.addEventListener("input", function () {
  const phoneNumberLen = this.value.length;
  this.style.outline = "rgba(0, 0, 0, 0)";
  if (document.hasFocus() && Number(phoneNumberLen) === 10) {
    this.style.outline = "4px solid #15803d";
  }
});
