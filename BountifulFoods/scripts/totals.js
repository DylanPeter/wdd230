// Load the fruits.json file
fetch('./data/fruits.json')
  .then(response => response.json())
  .then(data => {
    // Initialize totals
    let totalCalories = 0;
    let totalFat = 0;
    let totalSugar = 0;
    let totalCarbohydrates = 0;
    let totalProtein = 0;

    // Iterate over the fruits and calculate totals
    [fruit1, fruit2, fruit3].forEach(fruitName => {
      // Find the fruit in the JSON data
      let fruit = data.find(item => item.name === fruitName);
      if (fruit) {
        // Add nutritional information to totals
        totalCalories += fruit.nutritions.calories || 0;
        totalFat += fruit.nutritions.fat || 0;
        totalSugar += fruit.nutritions.sugar || 0;
        totalCarbohydrates += fruit.nutritions.carbohydrates || 0;
        totalProtein += fruit.nutritions.protein || 0;
      }
    });

    // Display the totals on the page with one decimal place if needed
    document.getElementById('total-calories').textContent = totalCalories % 1 === 0 ? totalCalories : totalCalories.toFixed(1);
    document.getElementById('total-fat').textContent = totalFat % 1 === 0 ? totalFat : totalFat.toFixed(1);
    document.getElementById('total-sugar').textContent = totalSugar % 1 === 0 ? totalSugar : totalSugar.toFixed(1);
    document.getElementById('total-carbohydrates').textContent = totalCarbohydrates % 1 === 0 ? totalCarbohydrates : totalCarbohydrates.toFixed(1);
    document.getElementById('total-protein').textContent = totalProtein % 1 === 0 ? totalProtein : totalProtein.toFixed(1);

  })
  .catch(error => console.error('Error loading fruits.json:', error));
