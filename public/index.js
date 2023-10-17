function togglePasswordInput() {
    const passwordInput = document.getElementById('psswrd');
    const toggleButton = document.getElementById('toggleButton');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show Password';
    }
}

const toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', togglePasswordInput());