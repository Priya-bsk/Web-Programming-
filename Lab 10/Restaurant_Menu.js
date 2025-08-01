 class MenuItem {
            constructor(name, price, calories, protein) {
                this.name = name;
                this.price = price;
                this.nutrition = {
                    calories: calories,
                    protein: protein
                };
            }

            getItemDetails() {
                return {
                    name: this.name,
                    price: `₹${this.price.toFixed(2)}`,
                    calories: `${this.nutrition.calories} kcal`,
                    protein: `${this.nutrition.protein}g protein`
                };
            }
        }

        let menuItems = [];
        function addMenuItem() {

            const dishName = document.getElementById('dishName').value;
            const price = parseFloat(document.getElementById('price').value);
            const calories = parseInt(document.getElementById('calories').value);
            const protein = parseFloat(document.getElementById('protein').value);

            const menuItem = new MenuItem(dishName, price, calories, protein);
            menuItems.push(menuItem);
            updateMenuDisplay();
            clearForm();
        }

        function updateMenuDisplay() {
            const menuGrid = document.getElementById('menuGrid');
            const details = menuItems[menuItems.length - 1].getItemDetails();

            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="dish-name">${details.name}</div>
                <div class="price">${details.price}</div>
                <div class="nutrition-info">
                    ${details.calories}<br>
                    ${details.protein}
                </div>
            `;

            menuGrid.appendChild(card);
        }

        function clearForm() {
            document.getElementById('dishName').value = '';
            document.getElementById('price').value = '';
            document.getElementById('calories').value = '';
            document.getElementById('protein').value = '';
        }