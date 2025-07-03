
fetch('https://backendfix-production-c060.up.railway.app/
')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('produk-container');
    data.forEach(p => {
      const div = document.createElement('div');
      div.className = 'produk';
      div.innerHTML = `<h3>${p.nama}</h3><p>Rp ${p.harga}</p><button>Beli</button>`;
      container.appendChild(div);
    });
  });
