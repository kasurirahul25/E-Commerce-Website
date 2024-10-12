document.addEventListener('DOMContentLoaded', function () {
    const items = [
        "jackets",
        "shirts",
        "pants",
        "trousers",
        "footwear"
    ];
    let index = 0;

    const searchInput = document.querySelector('.search-input');

    // Function to change the placeholder text
    function changePlaceholder() {
        searchInput.placeholder = `Search for ${items[index]}`;
        index = (index + 1) % items.length; // Loop through the array
    }

    // Change placeholder every second (1000 milliseconds)
    setInterval(changePlaceholder, 1000);
});
