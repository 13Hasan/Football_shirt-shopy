const shirts = [ /* 20 məşhur futbolçular array-si burada olacaq */ ];

function displayShirts(list = shirts) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach(s => {
    const html = `
      <div class="product-card">
        <img src="${s.img}" alt="${s.player}">
        <div class="product-info">
          <h3>${s.player}</h3><p>${s.team}</p><p><strong>$10</strong></p><p>${s.desc}</p>
        </div>
      </div>`;
    container.insertAdjacentHTML('beforeend', html);
  });
}

function searchShirts() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  displayShirts(shirts.filter(s =>
    s.player.toLowerCase().includes(q) ||
    s.team.toLowerCase().includes(q)
  ));
}

function filterByPlayer(player) {
  displayShirts(shirts.filter(s => s.player === player));
}

window.onload = () => displayShirts();
