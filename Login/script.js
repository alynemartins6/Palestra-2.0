var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
    .addEventListener('click', () => {
        formSignin.style.left = "25px"
        formSignup.style.left = "450px"
        btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
    .addEventListener('click', () => {
        formSignin.style.left = "-450px"
        formSignup.style.left = "25px"
        btnColor.style.left = "110px"
})


const inputEmail = document.getElementById("inputEmail");
const inputSenha = document.getElementById("inputSenha");
const buttonEnviar = document.getElementById("submit-enviar");

buttonEnviar.addEventListener("click", async (event) => {
	event.preventDefault();

	let isValid = true;

	if (inputEmail.value === "") {
		alert("Por favor, preencha o campo de email.");
		isValid = false;
	}

	if (inputSenha.value === "" || inputSenha.value.length < 8) {
		alert("Por favor, preencha a senha com pelo menos 8 caracteres.");
		isValid = false;
	} else if (isValid) {
		let body = new Object();
		body.email = inputEmail.value;
		body.pass = inputSenha.value;
		await fetch("http://localhost:3000/auth/login", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})
			.then(async function (resp) {
				if (!resp.ok) throw new Error("Email ou senha inválidos.");
				const data = await resp.json();
				localStorage.setItem("token", data.accessToken);
				alert("Login realizado com sucesso");
				console.log(data.accessToken);
				return data.accessToken;
			})
			.then((json) => alert("Login realizado com sucesso"))
			.then(() => document.location.href = "pagina-principal.html")
			.catch((err) => alert("Falha ao realizar login: " + err));
	}
});


const inputNome = document.getElementById("inputNome");
const inputMatricula = document.getElementById("inputMatricula");
const buttonCadastrar = document.getElementById("submit-cadastrar");

buttonCadastrar.addEventListener("click", async (event) => {
	event.preventDefault();

	const isValid = validateForm();

	if (isValid) {
		let formulario = new Object();
		formulario.userName = inputNome.value;
		formulario.registerID = inputMatricula.value;
		formulario.email = inputEmail.value;
		formulario.password = inputSenha.value;
		console.log("Formulário enviado com sucesso!" + JSON.stringify({ ...formulario }));

		try {
			const result = await fetch("http://localhost:3000/user/signup", {
				method: "POST",
				headers: {
					Accept: "*/*",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formulario),
			})
			if (result.status === 201) {
				alert("Cadastro realizado com sucesso!");
				window.location.href = "login.html";
			} else {
				alert("Erro ao realizar cadastro." + result.status + " - " + result.statusText + " - " + result.body);
			}
		} catch (error) {
			alert("Erro ao realizar cadastro.", error);
		}
	}

	function validateForm() {
		let isValid = true;

		if (inputNome.value === "") {
			alert('O campo "Primeiro Nome" é obrigatório.');
			isValid = false;
		}
		
		if (inputEmail.value === "") {
			alert('O campo "Email" é obrigatório.');
			isValid = false;
		}
		if (inputSenha.value === "") {
			alert('O campo "Senha" é obrigatório.');
			isValid = false;
		} else if (inputSenha.value.length < 8) {
			alert("A senha deve ter pelo menos 8 caracteres.");
			isValid = false;
		}
		if (inputMatricula.value === "") {
			alert('O campo "Matrícula" é obrigatório.');
			isValid = false;
		}
		
		return isValid;
	}
});
