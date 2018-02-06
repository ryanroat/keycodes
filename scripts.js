var text = document.querySelector('.display');
window.addEventListener('keydown', function (e) {
  console.log (e);
  text.innerHTML = `You pressed ${e.keyCode}.`;
})
