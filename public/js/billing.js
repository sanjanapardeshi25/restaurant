
const dishPrices = {
    'Dhaba Style Matar Paneer': 250,
    'Paneer Kabab': 190,
    'Vegan Dal Makhni': 170,
    'Shrimp Avocado Salad': 260,
    'Grilled Whole Red Snapper': 180,
    'Spaghetti and Meatballs': 260,
    'Grilled Mozzarella Sandwich': 220,
    'Corn Tomato Avocado Salad': 240,
    'Strawberry Jello Cup': 140,
    'Fruit Jelly Cake': 400,
    'Donut Milkshake': 190,
    'Idli Sambar': 150,
    'Mushroom Ghee Roast Dosa': 170,
    'Vada Sambar': 170,
    'Mutton Yakhni Pulao': 270,
    'Red Mutton Curry': 220,
    'Mexican Bhel': 220,
    'Taco Pasta': 270,
    'Custard Gulab Jamun': 70,
    'Gujiya': 60,
    'Carrot Halwa': 160,
    'Thandai Kulfis': 70,
    'Crispy Jalebi': 50,
    'Rasmalai': 140,
  };

  function updateItems(selectElement) {
    const categorySelect = selectElement;
    const itemSelect = selectElement.closest('tr').querySelector('.itemSelect');
    const priceCell = selectElement.closest('tr').querySelector('td:last-child');

    // Clear existing items and set default price
    itemSelect.innerHTML = '';
    priceCell.textContent = ''; // Remove default price

    // Populate items based on the selected category
    const selectedCategory = categorySelect.value;
    switch (selectedCategory) {
      case 'category1':
        addItemOption(itemSelect, 'Dhaba Style Matar Paneer', dishPrices['Dhaba Style Matar Paneer']);
        addItemOption(itemSelect, 'Paneer Kabab', dishPrices['Paneer Kabab']);
        addItemOption(itemSelect, 'Vegan Dal Makhni', dishPrices['Vegan Dal Makhni']);
        // Add more items for category1 as needed
        break;
      case 'category2':
        addItemOption(itemSelect, 'Shrimp Avocado Salad', dishPrices['Shrimp Avocado Salad']);
        addItemOption(itemSelect, 'Grilled Whole Red Snapper', dishPrices['Grilled Whole Red Snapper']);
        // Add more items for category2 as needed
        break;
      // Add more cases for additional categories
      case 'category3':
        addItemOption(itemSelect, 'Spaghetti and Meatballs', dishPrices['Spaghetti and Meatballs']);
        addItemOption(itemSelect, 'Grilled Mozzarella Sandwich', dishPrices['Grilled Mozzarella Sandwich']);
        addItemOption(itemSelect, 'Corn Tomato Avocado Salad', dishPrices['Corn Tomato Avocado Salad']);
        // Add more items for category3 as needed
        break;
      case 'category4':
        addItemOption(itemSelect, 'Strawberry Jello Cup', dishPrices['Strawberry Jello Cup']);
        addItemOption(itemSelect, 'Fruit Jelly Cake', dishPrices['Fruit Jelly Cake']);
        addItemOption(itemSelect, 'Donut Milkshake', dishPrices['Donut Milkshake']);
        // Add more items for category4 as needed
        break;
      case 'category5':
        addItemOption(itemSelect, 'Idli Sambar', dishPrices['Idli Sambar']);
        addItemOption(itemSelect, 'Mushroom Ghee Roast Dosa', dishPrices['Mushroom Ghee Roast Dosa']);
        addItemOption(itemSelect, 'Vada Sambar', dishPrices['Vada Sambar']);
        // Add more items for category5 as needed
        break;
      case 'category6':
        addItemOption(itemSelect, 'Mutton Yakhni Pulao', dishPrices['Mutton Yakhni Pulao']);
        addItemOption(itemSelect, 'Red Mutton Curry', dishPrices['Red Mutton Curry']);
        // Add more items for category6 as needed
        break;
      case 'category7':
        addItemOption(itemSelect, 'Mexican Bhel', dishPrices['Mexican Bhel']);
        addItemOption(itemSelect, 'Taco Pasta', dishPrices['Taco Pasta']);
        // Add more items for category7 as needed
        break;
      case 'category8':
        addItemOption(itemSelect, 'Custard Gulab Jamun', dishPrices['Custard Gulab Jamun']);
        addItemOption(itemSelect, 'Gujiya', dishPrices['Gujiya']);
        addItemOption(itemSelect, 'Carrot Halwa', dishPrices['Carrot Halwa']);
        addItemOption(itemSelect, 'Thandai Kulfis', dishPrices['Thandai Kulfis']);
        addItemOption(itemSelect, 'Crispy Jalebi', dishPrices['Crispy Jalebi']);
        addItemOption(itemSelect, 'Rasmalai', dishPrices['Rasmalai']);
        // Add more items for category8 as needed
        break;
    }
  }

  function addItemOption(selectElement, itemName, itemPrice) {
    const option = document.createElement('option');
    option.value = itemName;
    option.textContent = itemName;
    selectElement.appendChild(option);

    // Set the event listener for item select
    const itemSelect = selectElement.closest('tr').querySelector('.itemSelect');
    const priceCell = selectElement.closest('tr').querySelector('td:last-child');

    itemSelect.addEventListener('change', function() {
        // Get the selected item's price
        const selectedOption = itemSelect.options[itemSelect.selectedIndex];
        const selectedPrice = dishPrices[selectedOption.value];
    
        // Set the price in the adjacent cell when an item is selected
        selectElement.closest('tr').querySelector('td:last-child').textContent = selectedPrice.toFixed(2);
    });
    
}



  function addRow() {
    const tableBody = document.querySelector('#billingTable tbody');
    const newRow = tableBody.insertRow();
    const cells = Array.from({ length: 4 }, () => newRow.insertCell());

    // Category cell
    const categoryCell = cells[0];
    const categorySelect = document.createElement('select');
    categorySelect.className = 'categorySelect';
    categorySelect.setAttribute('onchange', 'updateItems(this)');
    categorySelect.innerHTML = document.querySelector('.categorySelect').innerHTML;
    categoryCell.appendChild(categorySelect);

    // Item cell
    cells[1].innerHTML = document.querySelector('.itemSelect').outerHTML;

    // Quantity cell
  //  cells[2].innerHTML = '<input type="number" min="1">';
    cells[2].innerHTML = '<input type="number" min="1" class="quantityInput">';

    // Price cell
    //cells[3].textContent = dishPrices['Default Dish']; // Default price
  }

  // Initial update to populate items based on the default selected category
  updateItems(document.querySelector('.categorySelect'));