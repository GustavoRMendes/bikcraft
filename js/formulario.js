const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p>Mensagem enviada. Em breve entraremos em contato.</p>";
  } else {
    formulario.innerHTML =
      "<p>Erro. Mande no nosso email contato@email.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();
  const botao = document.querySelector("form button");
  botao.disabled = "true";
  botao.innerText = "Enviando...";

  const data = FormData(formulario);
  fetch("../enviar.php", {
    method: "POST",
    body: data,
  }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);
