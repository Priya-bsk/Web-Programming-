 document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        document.getElementById('successMessage').style.display = 'none';

        function showError(input, errorId, condition) {
            const errorElement = document.getElementById(errorId);
            if (!condition) {
                if (input) input.classList.add('error');
                errorElement.style.display = 'block';
            } else {
                if (input) input.classList.remove('error');
                errorElement.style.display = 'none';
            }
        }

        function validateFullName() {
            return document.getElementById('fullName').value.trim().length >= 3;
        }

        function validateEmail() {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById('email').value);
        }

        function validatePassword() {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(document.getElementById('password').value);
        }

        function validateConfirmPassword() {
            return document.getElementById('confirmPassword').value === document.getElementById('password').value;
        }

        function validatePhone() {
            return /^\d{10}$/.test(document.getElementById('phone').value);
        }

        function validateDob() {
            const dob = document.getElementById('dob').value;
            if (!dob) return false;
            const birthDate = new Date(dob);
            if (isNaN(birthDate)) return false;
            const age = new Date().getFullYear() - birthDate.getFullYear();
            return age >= 18;
        }

        function validateGender() {
            return document.querySelector('input[name="gender"]:checked') !== null;
        }

        function validateTerms() {
            return document.getElementById('terms').checked;
        }

        const isValid = [
            validateFullName(),
            validateEmail(),
            validatePassword(),
            validateConfirmPassword(),
            validatePhone(),
            validateDob(),
            validateGender(),
            validateTerms()
        ].every(Boolean);

        showError(document.getElementById('fullName'), 'fullNameError', validateFullName());
        showError(document.getElementById('email'), 'emailError', validateEmail());
        showError(document.getElementById('password'), 'passwordError', validatePassword());
        showError(document.getElementById('confirmPassword'), 'confirmPasswordError', validateConfirmPassword());
        showError(document.getElementById('phone'), 'phoneError', validatePhone());
        showError(document.getElementById('dob'), 'dobError', validateDob());
        showError(null, 'genderError', validateGender());
        showError(document.getElementById('terms'), 'termsError', validateTerms());

        if (isValid) {
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('registrationForm').reset();
        }
    });