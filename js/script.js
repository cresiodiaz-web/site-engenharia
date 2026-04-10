document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("msg").innerText = "Mensagem enviada com sucesso!";
});