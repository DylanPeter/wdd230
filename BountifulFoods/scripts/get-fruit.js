// Fetch fruit options from Fruityvice API
fetch('https://www.fruityvice.com/api/fruit/all')
    .then(response => response.json())
    .then(data => {
        const fruits = data.map(fruit => fruit.name);
        const selectElements = document.querySelectorAll('select');
        selectElements.forEach(select => {
            fruits.forEach(fruit => {
                const option = document.createElement('option');
                option.text = fruit;
                select.add(option);
            });
        });
    });
