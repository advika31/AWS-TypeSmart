document.addEventListener('DOMContentLoaded', function () {
    const themeItems = document.querySelectorAll('.theme-item');

    themeItems.forEach(item => {
      item.addEventListener('click', function () {
        themeItems.forEach(item => item.classList.remove('selected'));
        this.classList.add('selected');

        const themeClass = this.getAttribute('data-theme-class');
        document.body.className = themeClass;
      });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toLowerCase();
        themeItems.forEach(item => {
          const themeName = item.querySelector('.theme-name').textContent.toLowerCase();
          if (themeName.includes(filter)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    }

    document.querySelector('.fa-paint-brush').addEventListener('click', function () {
      document.querySelector('.theme-selector').classList.toggle('show');
    });
  });