document.addEventListener('DOMContentLoaded', function () {
  const developerIcon = document.getElementById('developerIcon');
  const modal = document.getElementById('developerModal');
  const closeButton = document.querySelector('.close');

  developerIcon.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});