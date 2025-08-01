function validateForm(event) {
            event.preventDefault(); 
            clearErrors();
        
            let isValid = true;
            const fullName = document.getElementById('fullName').value.trim();
            if (!fullName || fullName.length < 3) {
                showError('fullNameError', 'Full Name must be at least 3 characters long.', 'fullName');
                isValid = false;
            }
        
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!email || !emailRegex.test(email)) {
                showError('emailError', 'Please enter a valid email address.', 'email');
                isValid = false;
            }

            const phone = document.getElementById('phone').value.trim();
            const phoneRegex = /^[0-9]{10}$/;
            if (!phone || !phoneRegex.test(phone)) {
                showError('phoneError', 'Phone number must be 10 digits.', 'phone');
                isValid = false;
            }
   
            const position = document.getElementById('position').value;
            if (!position) {
                showError('positionError', 'Please select a position.', 'position');
                isValid = false;
            }
        
            const resume = document.getElementById('resume').files[0];
            if (!resume) {
                showError('resumeError', 'Resume is required.', 'resume');
                isValid = false;
            } else {
                const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                if (!validTypes.includes(resume.type)) {
                    showError('resumeError', 'Only PDF or DOCX files are allowed.', 'resume');
                    isValid = false;
                }
        
                if (resume.size > 2 * 1024 * 1024) { // 2MB limit
                    showError('resumeError', 'File size must be less than 2MB.', 'resume');
                    isValid = false;
                }
            }
        
            const coverLetter = document.getElementById('coverLetter').value.trim();
            if (!coverLetter || coverLetter.length < 50) {
                showError('coverLetterError', 'Cover letter must be at least 50 characters long.', 'coverLetter');
                isValid = false;
            }

            if (isValid) {
                document.getElementById('successMessage').innerText = 'Application Submitted Successfully!';
            }
        
            return isValid;
        }
        
        function showError(elementId, message, fieldId) {
            const errorElement = document.getElementById(elementId);
            errorElement.innerText = message;
            document.getElementById(fieldId).classList.add('error');
        }
        
        function clearErrors() {
            const errors = document.querySelectorAll('.error');
            errors.forEach(error => {
                error.classList.remove('error');
            });
        
            const errorMessages = document.querySelectorAll('.error-message');
            errorMessages.forEach(errorMessage => {
                errorMessage.innerText = '';
            });
        }