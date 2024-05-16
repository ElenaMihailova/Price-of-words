document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const btn = document.getElementById('openModalBtn');
  const modalClose = document.getElementById('closeModalBtn');

  btn.onclick = function () {
    modal.style.display = 'block';
    document.body.classList.add('no-scroll'); 
  };

  modalClose.onclick = function () {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }
  };
});
