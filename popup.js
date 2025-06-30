window.onload = function () {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close-btn');

  // Show modal after short delay
  setTimeout(() => {
    modal.style.display = 'flex';
  }, 500);

  closeBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
};
