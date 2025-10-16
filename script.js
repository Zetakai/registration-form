document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    
    const validators = {
        nama: {
            required: true,
            minLength: 2,
            message: 'Nama harus minimal 2 karakter'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Format email tidak valid'
        },
        password: {
            required: true,
            minLength: 6,
            message: 'Password harus minimal 6 karakter'
        },
        confirmPassword: {
            required: true,
            match: 'password',
            message: 'Konfirmasi password tidak cocok'
        }
    };

    function showError(fieldName, message) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');
        
        field.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function clearError(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');
        
        field.classList.remove('error');
        errorElement.classList.remove('show');
        errorElement.textContent = '';
    }

    function validateField(fieldName, value) {
        const validator = validators[fieldName];
        if (!validator) return true;

        if (validator.required && !value.trim()) {
            showError(fieldName, 'Field ini wajib diisi');
            return false;
        }

        if (validator.minLength && value.length < validator.minLength) {
            showError(fieldName, validator.message);
            return false;
        }

        if (validator.pattern && !validator.pattern.test(value)) {
            showError(fieldName, validator.message);
            return false;
        }

        if (validator.match) {
            const matchField = document.getElementById(validator.match);
            if (value !== matchField.value) {
                showError(fieldName, validator.message);
                return false;
            }
        }

        clearError(fieldName);
        return true;
    }

    function validateForm() {
        let isValid = true;
        const formData = new FormData(form);
        
        for (const [fieldName, value] of formData.entries()) {
            if (!validateField(fieldName, value)) {
                isValid = false;
            }
        }

        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        if (password && confirmPassword && password !== confirmPassword) {
            showError('confirmPassword', 'Konfirmasi password tidak cocok');
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener('input', function(e) {
        const fieldName = e.target.name;
        const value = e.target.value;
        
        if (e.target.classList.contains('error')) {
            clearError(fieldName);
        }
        
        setTimeout(() => {
            validateField(fieldName, value);
        }, 500);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        Object.keys(validators).forEach(fieldName => {
            clearError(fieldName);
        });

        if (!validateForm()) {
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            return;
        }

        const submitBtn = form.querySelector('.submit-btn');
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;

        setTimeout(() => {
            const formData = new FormData(form);
            const userData = {
                nama: formData.get('nama'),
                email: formData.get('email'),
                password: formData.get('password')
            };

            form.style.display = 'none';
            successMessage.style.display = 'block';

            setTimeout(() => {
                form.style.display = 'block';
                successMessage.style.display = 'none';
                form.reset();
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }, 4000);

        }, 2000);
    });

    const passwordField = document.getElementById('password');
    passwordField.addEventListener('input', function() {
        const password = this.value;
        const strength = getPasswordStrength(password);
    });

    function getPasswordStrength(password) {
        let strength = 0;
        
        if (password.length >= 6) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;
        
        return strength;
    }

    const emailField = document.getElementById('email');
    emailField.addEventListener('blur', function() {
        const email = this.value;
        if (email && !validators.email.pattern.test(email)) {
            showError('email', 'Format email tidak valid');
        }
    });

    const confirmPasswordField = document.getElementById('confirmPassword');
    confirmPasswordField.addEventListener('input', function() {
        const password = document.getElementById('password').value;
        const confirmPassword = this.value;
        
        if (confirmPassword && password !== confirmPassword) {
            showError('confirmPassword', 'Konfirmasi password tidak cocok');
        } else if (confirmPassword && password === confirmPassword) {
            clearError('confirmPassword');
        }
    });

    function initPasswordToggle() {
        const passwordToggle = document.getElementById('passwordToggle');
        const confirmPasswordToggle = document.getElementById('confirmPasswordToggle');
        const passwordField = document.getElementById('password');
        const confirmPasswordField = document.getElementById('confirmPassword');

        if (passwordToggle && passwordField) {
            passwordToggle.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (passwordField.type === 'password') {
                    passwordField.type = 'text';
                    this.textContent = '🙈';
                } else {
                    passwordField.type = 'password';
                    this.textContent = '👁️';
                }
                return false;
            };
        }

        if (confirmPasswordToggle && confirmPasswordField) {
            confirmPasswordToggle.onclick = function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (confirmPasswordField.type === 'password') {
                    confirmPasswordField.type = 'text';
                    this.textContent = '🙈';
                } else {
                    confirmPasswordField.type = 'password';
                    this.textContent = '👁️';
                }
                return false;
            };
        }
    }

    initPasswordToggle();
});