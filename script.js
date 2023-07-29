const scriptURL = 'https://script.google.com/macros/s/AKfycbwi_xvE9-6_qJWElzcEGchxvU1g-OFsX0qNVp4jQcxZxovUSQZWzU9-2d14lBdtzksJpg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Response received successfully"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});
const sidemenu = document.getElementById('sidemenu');
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
// const home=document.querySelector("#firstSection");
const stop = document.querySelector(".stop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    stop.style.display = "block";
  }
  else {
    stop.style.display = "none";
  }
});
stop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
});