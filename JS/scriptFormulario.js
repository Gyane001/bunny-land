const formulario = document.getElementById("formularioDeContato");

(function () {
    emailjs.init({ publicKey: "jGGa9jsujCzdQZmqo" });  // Substitua pelo seu User ID do EmailJS
})();

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const nomeEmpresa = document.getElementById("nomeEmpresa").value;
    const message = document.getElementById("message").value;

    const emailTemplate = {
        nome, email, nomeEmpresa, message
    }
    emailjs.send("service_u6ko0hv", "template_x83nlyq", emailTemplate).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Email enviado com sucesso!")
           
            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("nomeEmpresa").value = "";
            document.getElementById("message").value = "";
            
        },
        (error) => {
            console.log('FAILED...', error);
        }
    );
})