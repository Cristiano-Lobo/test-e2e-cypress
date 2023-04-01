<img src=".gitlab/logo.png" style="zoom: 25%;" />

# Produtor End-2-End

## 🚀 Tecnologias

- [Node.js] - plataforma de desenvolvimento
- [Cypress] - framework de testes automatizados da Microsoft
- [Javascript] - linguagem de Javascript

## 👨🏻‍💻 Como executar o projeto

[Node.js](https://nodejs.org/) v16 ou superior para executar.

Para liberar o gerenciador de pacotes Yarn:

```
corepack enable
```

Execute os comandos abaixo para instalar das dependências do projeto e execução dos testes:

```
cd produtor-e2e
yarn install
npx playwright install
npx playwright test
```

Para executar no modo assistido (não headless)

```
npx playwright test --headed
```

Para executar no modo debug

```
npx playwright test --headed --debug
```

## 📝 License

Private (Sympla)

------

