document.addEventListener("DOMContentLoaded", function() {
    const contactBtn = document.getElementById('contacts-contactBtn');
    const popup = document.getElementById('contacts-popup');
    // const closeBtn = document.getElementById('contacts_close');
    const closeBtn = document.querySelector('.contacts_close');

    document.getElementById('name').disabled = false;
document.getElementById('message').disabled = false;

    // Function to open the popup
    function openPopup() {
        popup.style.display = 'flex';
    }

    // Function to close the popup
    function closePopup() {
        popup.style.display = 'none';
    }

    // Event listener for the contact button
    contactBtn.addEventListener('click', openPopup);

    // Event listener for the close button
    closeBtn.addEventListener('click', closePopup);

    // Close the popup if user clicks outside the popup
    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });
});
