// MENU MOBILE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");

toggle.onclick = () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
};

overlay.onclick = () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
};

// ANIMAÇÃO SCROLL
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add('visible');
        }
    });
});

// CRM
const form = document.getElementById("leadForm");
const lista = document.getElementById("listaLeads");

const telefone = "5535984067208";

form.addEventListener("submit", function(e){
    e.preventDefault();

    const lead = {
        nome: nome.value,
        email: email.value,
        mensagem: mensagem.value
    };

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    leads.push(lead);
    localStorage.setItem("leads", JSON.stringify(leads));

    mostrarLeads();
    form.reset();
});

function mostrarLeads(){
    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    lista.innerHTML = "";

    leads.forEach(l => {

        let div = document.createElement("div");
        div.className = "lead";

        div.innerHTML = `
            <b>${l.nome}</b><br>
            ${l.email}<br>
            ${l.mensagem}<br><br>
            <a href="https://wa.me/${telefone}?text=Olá ${l.nome}" target="_blank">💬 WhatsApp</a>
        `;

        lista.appendChild(div);
    });
}

mostrarLeads();

// CHAT
const input = document.getElementById("chat-input");
const chat = document.getElementById("chat-body");

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let msg = input.value;

        chat.innerHTML += `<p><b>Você:</b> ${msg}</p>`;

        setTimeout(()=>{
            chat.innerHTML += `<p><b>Atendimento:</b> Fale comigo no WhatsApp 👍</p>`;
        },500);

        input.value = "";
    }
});

// BOTÃO WHATS
document.getElementById("whatsBtn").onclick = () => {
    window.open(`https://wa.me/${telefone}?text=Olá vim pelo site`);
};