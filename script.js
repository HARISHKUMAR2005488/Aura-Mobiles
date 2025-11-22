  document.getElementById('searchBar').addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
    displayProducts(filtered);
  });
  
  displayProducts();

  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  