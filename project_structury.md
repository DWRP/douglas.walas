# Estrutura do Projeto

## Descrição Geral

Este projeto contém o código fonte, a documentação e os recursos de um aplicativo web.

## Estrutura de Pastas

### Pasta Raiz

- **.github:** Pasta para configurações do github com Actions, workflows, etc
- **messages:** Pasta com os arquivos de tradução em JSON
- **public:** Pasta publica, destinada aos arquivos estáticos como imagens
- **src:** Código fonte do aplicativo
- **.env.exemple:** Exemplo das variáveis de ambiente do app
- **.eslintrc.json:** Configuração do eslint
- **.gitignore:** Configuração do git para ignorar itens
- **components.json:** Configurações do shadcn ui
- **next.config.mjs:** Configurações do next
- **package.json:** Configurações do projeto
- **postcss.config.mjs:** Configurações do postcss usado no tailwind
- **project_structury.md:** Este arquivo - documentação da estrutura do projeto
- **README.md:** Documentação do projeto
- **tailwind.config.ts:** Configurações do tailwind
- **tsconfig.json:** Configuração do typescript

### src

- **client:** Configurações de clients (como o HTTP)
- **components:** componentes do projeto (incluindo os do shadcn ui)
- **lib:** Utils do talwind (gerada pelo shadcn)
- **pages:** Páginas do projeto
- **services:** Serviços do projeto (usando o client http)
- **store:** Configurações de estado do zustand
- **styles:** Arquivos de styles css
- **locales.ts:** Arquivo de exposição de constantes de idioma

```
root
├── messages
|   └── workflows
│       └── main.yml
├── messages
│   ├── en.json
│   └── pt-BR.json
├── public
│   ├── dwrp.svg
│   └── favicon.ico
└── src
    ├── client
    |   ├── axios
    |   |   └── axiosHttpClient.ts
    |   ├── httpClient.ts
    |   └── httpClientFactory.ts
    ├── components
    |    ├── ui
    |    |   ├── badge.tsx
    |    |   ├── button.tsx
    |    |   ├── card.tsx
    |    |   ├── input.tsx
    |    |   ├── select.tsx
    |    |   └── textarea.tsx
    |    └── Loading.tsx
    ├── lib
    |   └── utils.ts
    ├── pages
    |    ├── sections
    |    |   ├── Footer.tsx
    |    |   ├── Header.tsx
    |    |   └── Main.tsx
    |    ├── _app.tsx
    |    ├── _document.tsx
    |    └── index.tsx
    ├── services
    |    ├── app.ts
    |    └── store.service.ts
    └── styles
        └── global.css
```
