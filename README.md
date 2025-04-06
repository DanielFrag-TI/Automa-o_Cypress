# 🚗 Automação de Testes com Cypress e Cucumber - Tricentis Vehicle

Este projeto realiza a automação de testes E2E (fim a fim) no site [Tricentis Vehicle](https://sampleapp.tricentis.com), utilizando **Cypress**, **Cucumber (Gherkin)**, e a biblioteca **Faker** para geração de dados dinâmicos.

Organizado com BDD (Behavior Driven Development), o projeto cobre tanto **cenários positivos** quanto **negativos** de preenchimento de formulário.

---

## 📁 Estrutura de Pastas

```bash
cypress/
│
├── e2e/
│   ├── front-end/                # Arquivos .feature organizados por área
│   │   ├── testeRegistrodeAutomovel-01.feature
│   │   └── testeRegistrodeAutomovel-02.feature
│
├── fixtures/                    # Arquivos estáticos para upload de imagem, se necessário
│
├── support/
│   ├── pages/                   # Page Objects (.page.js)
│   ├── elements/                # Seletores centralizados
│   ├── step-definitions/        # Arquivos .cy.js com implementação dos steps
│       └── testes positivos/    # Subdivisão por tipo de teste
│       └── testes negativos/
│
└── cypress.env.json             # Variáveis de ambiente
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o Cypress

```bash
npx cypress open
```

> Escolha o modo "E2E Testing" e selecione o navegador de sua preferência.

---

## 🧱 Instalação das bibliotecas extras

### ✅ Cypress Cucumber Preprocessor

```bash
npm install --save-dev cypress-cucumber-preprocessor
```

No `cypress.config.js`:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth:1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl:'https://sampleapp.tricentis.com',

    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor',cucumber());
    },
  },
});

```

### ✅ Faker

```bash
npm install @faker-js/faker
```

Uso:

```js
import { faker } from '@faker-js/faker';
const email = faker.internet.email();
```

### ✅ Cypress File Upload

```bash
npm install --save-dev cypress-file-upload
```

Em `support/e2e.js`:

```js
import 'cypress-file-upload';
```

Uso:

```js
cy.get('input[type="file"]').attachFile('imagem_teste.jpg');
```

---

## 🔒 Variáveis de Ambiente (cypress.env.json)

Exemplo de configuração:

```json
{
  "password": "tester@01"
}
```

Uso no código:

```js
cy.get('#password').type(Cypress.env("password"), { log: false })
```

---

## ✅ Cenário de Teste Positivo

Arquivo: `testeRegistrodeAutomovel-01`

```gherkin
Funcionalidade: testeRegistrodeAutomovel-01 - registro no portal
    Cenário: Cotação valida de seguro de automóvel
    Dado que o usuário acessa o site Tricentis Vehicle
    E clica no botão 'Automobile'
    Quando o usuário preenche a aba Enter Vehicle Data 
    E clica no botão Next
    E preenche a aba Enter Insurant Data   
    E preenche a aba Enter Product Data 
    E seleciona uma opção na aba Select Price Option    
    E preenche a aba Send Quote
    E clica no botão Send
    Então o usuário recebe uma mensagem de confirmação de envio do formulário


```

## ❌ Cenário de Teste Negativo

Arquivo: `testeRegistrodeAutomovel-02.feature`

```gherkin
Funcionalidade: testeRegistrodeAutomovel-03 - envio incompleto do formulário
  Cenário: Exibição de mensagem de erro ao tentar enviar o formulário sem preencher todos os campos obrigatórios
    Dado que o usuário acessa o site Tricentis Vehicle
    E clica no botão 'Automobile'
    Quando o usuário preenche a aba Enter Vehicle Data
    E clica no botão Next
    E preenche a aba Enter Insurant Data
    E preenche a aba Enter Product Data
    E seleciona uma opção na aba Select Price Option
    E não preenche os campos obrigatórios da aba Send Quote
    E clica no botão Send
    Então o usuário recebe uma mensagem de falha de envio do formulário
```

---

## ✨ Diferenciais

- Estrutura modular com Page Object Model (POM)
- Separação clara entre elementos, páginas e testes
- Suporte a BDD com Cucumber
- Geração de dados aleatórios com Faker
- Variáveis de ambiente seguras com `cypress.env.json`
- Suporte a testes negativos com verificação de mensagens de erro

---

## 👨‍💻 Autor

Desenvolvido por Daniel Fraga do Nascimento.

