window.onload = function () {
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close-btn');
  const okBtn = document.getElementById('modal-ok-btn'); 
  setTimeout(() => {
    if(modal) modal.style.display = 'flex';
  }, 500);

  // Fermer avec la croix
  if(closeBtn) {
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };
  }

  // Fermer avec le bouton "Compris"
  if(okBtn) {
    okBtn.onclick = function () {
      modal.style.display = 'none';
    };
  }

  // Fermer en cliquant sur le fond noir
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
};
