document.addEventListener('DOMContentLoaded', function () {
    const aboutButton = document.getElementById('about');
    const typingButton = document.getElementById('typing');
    const typingSection = document.getElementById('wrapper');
    const aboutSection = document.getElementById('about-section');

    aboutButton.addEventListener('click', function () {
      // typingSection.classList.add('hidden');
      typingSection.style.display = 'none';
      aboutSection.style.display = 'block';
      aboutSection.classList.remove('hidden');
    });

    typingButton.addEventListener('click', function () {
      // aboutSection.classList.add('hidden');
      aboutSection.style.display = 'none';
      typingSection.style.display = 'block';
      typingSection.classList.remove('hidden');
    });
  });

