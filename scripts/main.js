document.addEventListener("DOMContentLoaded", () => {
  // Preencher versão no rodapé
  const versionElement = document.getElementById('version');
  if (versionElement && window.APP_VERSION) {
    versionElement.textContent = window.APP_VERSION;
  }

  const { PUBLIC_KEY, ASSISTANT_ID } = window.VAPI_CONFIG;

  const widget = document.createElement("vapi-widget");
  widget.setAttribute("public-key", PUBLIC_KEY);
  widget.setAttribute("assistant-id", ASSISTANT_ID);
  widget.setAttribute("mode", "voice");
  widget.setAttribute("theme", "dark");
  widget.setAttribute("base-bg-color", "#000000");
  widget.setAttribute("accent-color", "#b4030cff");
  widget.setAttribute("cta-button-color", "#ffcc00");
  widget.setAttribute("cta-button-text-color", "#000000");
  widget.setAttribute("border-radius", "large");
  widget.setAttribute("size", "compact");
  widget.setAttribute("title", "Olá! Eu sou o Pedro   🎬    ");
  widget.setAttribute("start-button-text", "Falar");
  widget.setAttribute("end-button-text", "Encerrar");
  widget.setAttribute("chat-first-message", "Olá! 👋 Sou o Pedro. Posso te ajudar a escolher um bom filme hoje?");
  widget.setAttribute("chat-placeholder", "Conte um pouco sobre seu humor ou o tipo de filme que quer...");
  widget.setAttribute("voice-show-transcript", "true");
  widget.setAttribute("language", "pt-BR");
  widget.setAttribute("consent-required", "true");
  widget.setAttribute("consent-title", "Termos de uso");
  widget.setAttribute("consent-content", "Ao clicar em 'Concordo', você autoriza o uso da sua voz e das mensagens apenas para recomendar filmes conforme nossa política de privacidade.");
  widget.setAttribute("consent-storage-key", "um_filme_agora_consent");

  document.getElementById("vapiContainer").appendChild(widget);


  const statusEl = document.getElementById('status');
  window.addEventListener('vapiWidgetReady', () => {
    statusEl.textContent = '🤖 Pedro está pronto para ajudar você a escolher um filme!';
  });

  // Registrar Service Worker (PWA)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log('✅ Service Worker registrado'))
      .catch(err => console.error('SW falhou:', err));
  }
});
