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
