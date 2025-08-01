function validateForm(event) {
            event.preventDefault(); 
            clearErrors();
        
            let isValid = true;
        
            const fullName = document.getElementById('fullName').value.trim();
            if (!fullName || fullName.length < 3) {
                showError('fullNameError', 'Full Name must be at least 3 characters long.');
                isValid = false;
            }

            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email || !emailRegex.test(email)) {
                showError('emailError', 'Please enter a valid email address.');
                isValid = false;
            }
        
            const phone = document.getElementById('phone').value.trim();
            const phoneRegex = /^[0-9]{10}$/;
            if (!phone || !phoneRegex.test(phone)) {
                showError('phoneError', 'Phone number must be 10 digits.');
                isValid = false;
            }
        
            const shippingAddress = document.getElementById('shippingAddress').value.trim();
            if (!shippingAddress) {
                showError('addressError', 'Shipping Address cannot be empty.');
                isValid = false;
            }
        
            const zipCode = document.getElementById('zipCode').value.trim();
            if (!zipCode) {
                showError('zipError', 'ZIP Code cannot be empty.');
                isValid = false;
            }
        
            const paymentMethod = document.getElementById('paymentMethod').value;
            if (!paymentMethod) {
                alert('Please select a payment method.');
                isValid = false;
            }
        
            if (paymentMethod === 'creditCard') {
                const cardNumber = document.getElementById('cardNumber').value.trim();
                const cardNumberRegex = /^[0-9]{16}$/;
                if (!cardNumber || !cardNumberRegex.test(cardNumber)) {
                    showError('cardNumberError', 'Card number must be 16 digits.');
                    isValid = false;
                }
        
                const expiryDate = document.getElementById('expiryDate').value.trim();
                const currentDate = new Date();
                const selectedDate = new Date(expiryDate + '-01'); // Add 1st of the month to validate
                if (!expiryDate || selectedDate < currentDate) {
                    showError('expiryDateError', 'Expiry Date cannot be in the past.');
                    isValid = false;
                }
        
                const cvv = document.getElementById('cvv').value.trim();
                const cvvRegex = /^[0-9]{3}$/;
                if (!cvv || !cvvRegex.test(cvv)) {
                    showError('cvvError', 'CVV must be a 3-digit number.');
                    isValid = false;
                }
            }
 
            if (isValid) {
                document.getElementById('successMessage').innerText = 'Order Placed Successfully!';
            }
        
            return isValid;
        }
        
        function showError(elementId, message) {
            const errorElement = document.getElementById(elementId);
            errorElement.innerText = message;
        }
        
        function clearErrors() {
            const errors = document.querySelectorAll('.error');
            errors.forEach(error => {
                error.innerText = '';
            });
        }
        
        function toggleCardDetails() {
            const paymentMethod = document.getElementById('paymentMethod').value;
            const cardDetailsSection = document.getElementById('creditCardDetails');
            if (paymentMethod === 'creditCard') {
                cardDetailsSection.style.display = 'block';
            } else {
                cardDetailsSection.style.display = 'none';
            }
        }