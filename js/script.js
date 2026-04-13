// MENU
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

if(toggle){
    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    });
}

// ANIMAÇÃO
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < window.innerHeight - 100){
            el.classList.add('visible');
        }
    });
});

// CHAT
const input = document.getElementById("chat-input");
const chat = document.getElementById("chat-body");

const telefone = "5535984067208";

if(input){
input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){

        let userMsg = input.value.toLowerCase();

        chat.innerHTML += `<p><b>Você:</b> ${userMsg}</p>`;

        let resposta = "Posso te ajudar melhor pelo WhatsApp 👍";
        let msgZap = "Olá, vim pelo site.";

        setTimeout(()=>{
            chat.innerHTML += `<p><b>Atendimento:</b> ${resposta}</p>`;
            chat.innerHTML += `<a href="https://wa.me/${telefone}?text=${encodeURIComponent(msgZap)}" target="_blank">👉 WhatsApp</a>`;
            chat.scrollTop = chat.scrollHeight;
        }, 500);

        input.value = "";
    }
});
}