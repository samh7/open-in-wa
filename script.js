const openButton = document.getElementById("open-button");
const phoneNumber = document.getElementById("number-input");
openButton.addEventListener("click", function () {
  if (`${phoneNumber.value}`.length === 10) {
    window.location.href = `https://wa.me/+254${phoneNumber.value}`;
  }
});
