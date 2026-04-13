// MENU
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

// CHAT INTELIGENTE
const input = document.getElementById("chat-input");
const chat = document.getElementById("chat-body");

const telefone = "5535984067208";

input.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        let userMsg = input.value.toLowerCase();

        chat.innerHTML += `<p><b>Você:</b> ${userMsg}</p>`;

        let resposta = "";
        let msgZap = "";

        if(userMsg.includes("pcb") || userMsg.includes("placa")){
            resposta = "Trabalho com montagem e otimização de processos de placas eletrônicas.";
            msgZap = "Olá, gostaria de falar sobre montagem de PCB.";
        }

        else if(userMsg.includes("processo")){
            resposta = "Posso ajudar na melhoria contínua da sua produção.";
            msgZap = "Olá, quero melhorar meu processo produtivo.";
        }

        else{
            resposta = "Posso te explicar melhor pelo WhatsApp 👍";
            msgZap = "Olá, vim pelo site e quero mais informações.";
        }

        setTimeout(()=>{
            chat.innerHTML += `<p><b>Atendimento:</b> ${resposta}</p>`;
            chat.innerHTML += `<a href="https://wa.me/${telefone}?text=${encodeURIComponent(msgZap)}" target="_blank">👉 Falar no WhatsApp</a>`;
            chat.scrollTop = chat.scrollHeight;
        }, 500);

        input.value = "";
    }
});