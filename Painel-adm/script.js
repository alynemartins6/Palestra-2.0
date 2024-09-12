const submitButton = document.getElementById('submit-cadastrar');
const emailInput = document.getElementById('inputEmail');
const passwordInput1 = document.getElementById('inputSenha2');
const passwordInput2 = document.getElementById('inputSenha3');


submitButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!emailInput.value || !passwordInput1.value || !passwordInput2.value) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    else if (passwordInput1.value !== passwordInput2.value) {
        alert('As senhas não correspondem.');
        return;
    }
    console.log('Form submitted successfully!');
    
});