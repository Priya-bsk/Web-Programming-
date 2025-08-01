class User {
            constructor(username, email) {
                this.username = username;
                this.email = email;
                this.orderHistory = {
                    orders: []
                };
            }

            addOrder(orderId, date, amount) {
                const order = {
                    orderId,
                    date,
                    amount,
                    timestamp: new Date().getTime()
                };
                this.orderHistory.orders.push(order);
                return order;
            }
        }

        let users = {};

        function addOrder() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const orderId = document.getElementById('orderId').value;
            const date = document.getElementById('date').value;
            const amount = parseFloat(document.getElementById('amount').value);

            if (!users[username]) {
                users[username] = new User(username, email);
            }

            const order = users[username].addOrder(orderId, date, amount);

            const tableBody = document.getElementById('orderTableBody');
            const row = tableBody.insertRow(0);
            row.className = 'recent-order';

            row.innerHTML = `
                <td>${username}</td>
                <td>${email}</td>
                <td>${orderId}</td>
                <td>${date}</td>
                <td>₹${amount.toFixed(2)}</td>
            `;

            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            document.getElementById('orderId').value = '';
            document.getElementById('date').value = '';
            document.getElementById('amount').value = '';
        }