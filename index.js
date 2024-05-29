const show = document.querySelector(".show");

window.addEventListener("keypress", (event) => {
  show.innerHTML = `      
  <div class="event-key">
    <p>Key</p>
    <h1>${event.code}</h1>
  </div>

  <div class="event-keyCode">
    <p>Key Value</p>
    <h1>${event.keyCode}</h1>
  </div>
  `;
});
