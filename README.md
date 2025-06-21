# MOUTSTI_TESTE – Automação de Testes com Cypress

![Cypress](https://img.shields.io/badge/Cypress-14.5.0-green?style=flat&logo=cypress)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Automação de testes E2E e de API utilizando Cypress, com organização modular de pastas, geração dinâmica de dados e execução parametrizada via linha de comando.

---

## Estrutura do Projeto

```

MOUTSTI\_TESTE/
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── cadastro.api.cy.js       # Testes automatizados da API de usuários
│   │   └── frontEnd/
│   │       ├── cadastro.cy.js           # Testes de cadastro no front
│   │       └── login.cy.js              # Testes de login no front
│   ├── fixtures/
│   │   └── api/
│   │       └── usuarios\_invalidos.js    # Payloads inválidos e erros esperados
│   ├── support/
│   │   ├── api/
│   │   │   └── usuarios.js              # Funções auxiliares de API (ex: cadastrarUsuarioApi)
│   │   ├── Login/
│   │   │   └── LoginUtils.js            # Utilitários para testes de login
│   │   ├── utils/
│   │   │   └── usuarios.js              # Função gerarUsuarioValido()
│   │   └── e2e.js                       # Arquivo de bootstrap do Cypress
├── cypress.config.js                    # Configuração do Cypress (URLs, paths, plugins)
├── package.json                         # Dependências e scripts npm
└── README.md                            # Documentação do projeto

````

---

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/moutsti_teste.git
   cd moutsti_teste
````

2. Instale as dependências:

   ```bash
   npm install
   ```

---

## Execução dos Testes

### Executar todos os testes com Cypress em modo headless:

```bash
npx cypress run
```

### Executar Cypress com interface interativa (modo GUI):

```bash
npx cypress open
```

### Executar somente os testes de API:

```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

### Executar somente os testes de Front-end:

```bash
npx cypress run --spec "cypress/e2e/frontEnd/**/*.cy.js"
```

---

## Comandos úteis do projeto

* `cy.gerarUsuarioValido()` – Gera dinamicamente um usuário válido com dados aleatórios.
* `cy.cadastrarUsuarioApi(usuario)` – Faz o cadastro de um usuário na API usando `cy.api()`.
* Arquivo `usuarios_invalidos.js` – Contém o corpo com dados inválidos e os erros esperados.

---

## Plugins e Features

* `cypress-plugin-api`: melhora a visualização de respostas `cy.api()` no dashboard.
* Testes exibidos diretamente no Cypress Runner com logs visuais detalhados.
* Geração dinâmica de massa de dados com `faker`.

---

```