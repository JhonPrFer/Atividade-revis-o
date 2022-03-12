# Loteria

## Especificaçõe técnicas

### Tecnologias usadas

-**Front-end:** React com NextJs e Styled Components

### Instruções de instalação

Primeiro, você precisará instalar o [NodeJs](https://nodejs.org/en/download/) 
e o [Yarn](https://yarnpkg.com/getting-started),usando o comando:

```bash
npm -g install yarn
```

Clone este repositório na sua máquina usando HTTPS:

```bash
git clone "link do repositório HTTPS"
```

ou SSH:

```bash
git clone "link do repositório SSH"
```

Instale as dependências do projeto:

```bash
cd projeto-show
yarn
```

### Executando o projeto localmente

Você deverá instalar as extensões do ESLint e do Prettier no seu VSCode, e, caso já não tenha configurado, você deverá configurar o seu VSCode para que ele rode o ESLint automaticamente ao salvar o arquivo. Para isso, apertar `CTRL + Shift + P` e digitar "Open Settings (JSON)". Depois, basta adicionar o trecho a seguir em qualquer lugar do arquivo:

```json
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
"eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
```

Para executar o front-end em desenvolvimento, basta executar o comando abaixo:

```bash
yarn dev
```

O projeto possui ferramentas para garantir mensagens de commit consistentes de forma automatizada. Sendo assim, seu commit "_mudanças_" não vai colar. Para garantir que suas mensagens de commit estão seguindo o padrão estabelecido, basta adicionar um arquivo à _staged_ através do comando `git add /path/to/file` ou `git add .` para adicionar todas as modificações e executar o comando abaixo:

```bash
yarn commit
```

Logo após, todos os arquivos commitados irão passar por uma fase de linting, onde o ESLint vai verificar se o código está de acordo com as regras estabelecidas. Se não estiver, o ESLint irá mostrar uma mensagem de erro, e você poderá corrigi-lo. Após a correção, basta rodar o comando `yarn commit` novamente para que as mudanças sejam commitadas.
