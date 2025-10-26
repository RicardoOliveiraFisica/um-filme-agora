# 🎬 Um Filme Agora — PWA com VAPI.AI

**Um Filme Agora** é um aplicativo **PWA (Progressive Web App)** que se conecta a um agente de voz do **VAPI.AI** para recomendar filmes de acordo com o estado emocional e preferências do usuário.  
O assistente se chama **Pedro**, e foi criado para ouvir, compreender e sugerir opções de filmes de forma empática e divertida.  

---

## 🚀 Funcionalidades

- 🎙️ **Assistente de voz** (interação por áudio via VAPI.AI)
- 💬 **Transcrição de fala** com suporte a português (pt-BR)
- 🧠 **Análise emocional e recomendações personalizadas**
- 📱 **Interface responsiva** (PWA pronta para uso em celular)
- 🛡️ **Isolamento de chaves de API** em arquivo local `config.js`
- 🌙 **Tema escuro moderno** com destaque em amarelo

---

## 🗂 Estrutura do projeto
um-filme-agora/
│
├── index.html # Página principal com o widget centralizado

├── manifest.json # Configuração PWA

├── service-worker.js # Cache e offline

├── assets/

│ └── icon-192.png # Ícone do app

├── scripts/

│ ├── main.js # Monta o widget dinamicamente

│ └── config.js # ⚠️ Armazena as chaves (não subir no Git)

├── .gitignore

└── README.md


---

## ⚙️ Instalação e execução local

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/RicardoOliveiraFisica/um-filme-agora.git
   cd um-filme-agora


2. **Crie o arquivo de configuração (scripts/config.js):**

    // scripts/config.js
    window.VAPI_CONFIG = {
    PUBLIC_KEY: "sua-public-key-aqui",
    ASSISTANT_ID: "seu-assistant-id-aqui"
    };

3. **Inicie um servidor local (pode usar o do VSCode, Python ou Node):**

    python -m http.server 8080

4. **Acesse no navegador:**

    http://localhost:8080


## 🧠 Sobre o Assistente "Pedro"

O agente foi configurado no VAPI com base em um prompt personalizado:

“Você é Pedro, um assistente emocional e sensível que atua em um aplicativo de recomendação de filmes.
Seu papel é ouvir atentamente e sugerir filmes conforme o humor e as preferências da pessoa, sempre em português.”

Pedro usa:

🗣 Modelo de voz: ElevenLabs Turbo

💬 Modelo de linguagem: GPT-4.1-mini (via OpenAI Provider)

🔉 Transcrição: Deepgram (modelo "nova-2", idioma pt-BR)


## 🧰 Tecnologias utilizadas

HTML5 / CSS3 / JavaScript

PWA (Manifest + Service Worker)

VAPI.AI (API de voz e chat inteligente)

ElevenLabs (voz sintetizada)

Deepgram (reconhecimento de fala)

OpenAI GPT-4.1-mini (modelo de recomendação)


## 📜 Licença

Este projeto é distribuído sob a licença MIT — use, modifique e compartilhe livremente, com atribuição.
