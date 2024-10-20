function showDropdown(event, dropdownId) {
    event.preventDefault();

    // Hide all dropdown content sections
    var dropdownItems = document.querySelectorAll('.dropdown-items');
    dropdownItems.forEach(function(item) {
        item.style.display = 'none';
    });

    // Show the selected dropdown
    var selectedDropdown = document.getElementById(dropdownId);
    selectedDropdown.style.display = 'block';

    // Show the dropdown container
    var dropdownContainer = document.getElementById('dropdown-container');
    dropdownContainer.style.display = 'block';

    // Disable scrolling on the body when dropdown is open
    document.body.classList.add('no-scroll');
}

// Close dropdown when clicked outside
window.onclick = function(event) {
    var dropdownContainer = document.getElementById('dropdown-container');

    // Close dropdown if the user clicks outside the dropdown
    if (!event.target.matches('.dropdown a')) {
        dropdownContainer.style.display = 'none';

        // Enable scrolling after dropdown is closed
        document.body.classList.remove('no-scroll');
    }
};
document.getElementById('login-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    var loginForm = document.getElementById('login-form');
    
    // Toggle the hidden class to show/hide the form
    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
    } else {
        loginForm.classList.add('hidden');
    }
});

