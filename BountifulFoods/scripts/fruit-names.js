// Fetch fruits from fruits.json file
fetch('./data/fruits.json')
.then(response => response.json())
.then(data => {

    // gets fruit names from json
    const fruitNames = data.map(fruit => fruit.name);

    // Select dropdown elements
    const dropdowns = document.querySelectorAll('.fruit-dropdown');

    // Populate each dropdown with default option and fruit names
    dropdowns.forEach(dropdown => {
        const defaultOption = document.createElement('option');
        defaultOption.text = 'Select Fruit'; //bacecase answer
        defaultOption.disabled = true;
        defaultOption.selected = true;
        dropdown.add(defaultOption);

        fruitNames.forEach(fruitName => {
            const option = document.createElement('option');
            option.text = fruitName;
            dropdown.add(option);
        });
    });
})

.catch(error => console.error('Error fetching fruits:', error));