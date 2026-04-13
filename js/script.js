// FORM FEEDBACK
const form = document.querySelector(".form");
const msg = document.querySelector(".form-msg");

form.addEventListener("submit", function() {
    msg.innerText = "Enviando...";
    setTimeout(() => {
        msg.innerText = "Mensagem enviada com sucesso!";
    }, 1500);
});

// CHATBOT SIMPLES
const input = document.getElementById("chat-input");
const chat = document.getElementById("chat-body");

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let userMsg = input.value;

        chat.innerHTML += `<p><b>Você:</b> ${userMsg}</p>`;

        setTimeout(() => {
            chat.innerHTML += `<p><b>Bot:</b> Entrarei em contato pelo WhatsApp 👍</p>`;
        }, 800);

        input.value = "";
        chat.scrollTop = chat.scrollHeight;
    }
});
