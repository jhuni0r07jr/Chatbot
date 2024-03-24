document.addEventListener("DOMContentLoaded", function() {
    const output = document.getElementById("output");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");
  
    sendBtn.addEventListener("click", function() {
      const userMessage = userInput.value;
      output.innerHTML += `<div><strong>Você:</strong> ${userMessage}</div>`;
      userInput.value = "";
  
      // Simular resposta do chatbot.
      setTimeout(function() {
        output.innerHTML += `<div><strong>Bot:</strong> Olá! Como posso ajudá-lo?</div>`;
        output.innerHTML += `<div><strong>Bot:</strong> Faturas</div>`;
        output.innerHTML += `<div><strong>Bot:</strong> Orçamento</div>`;
        output.innerHTML += `<div><strong>Bot:</strong> Conhecer nossos serviços</div>`;
        output.innerHTML += `<div><strong>Bot:</strong> Falar com atendente</div>`;
      }, 500);

/*      setTimeout(function() {
        window.location.href = "http://127.0.0.1:5500/index.html";
      }, 2000);*/

    });
});  