## Tecnologias Utilizadas:

- React
- Hooks
- Typescript
- styled-components
- Nodejs
- Postgres

## O que foi feito:

No teste pedia uma área de login com usuário padrão. Resolvi criar um sistema de login completo, incluindo um área de cadastro para salvar informações de login no banco. Além disso, incluí rotas protegidas por login e uma página 404 caso tente acessar algum prefixo que não contenha na aplicação.

## Como rodar em sua máquina?

### Antes de continuar, certifique-se de que você tenha:

- [Git](https://git-scm.com/downloads)
- [Node JS LTS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)
- [Docker Desktop](https://www.docker.com/get-started)
- [DBeaver](https://dbeaver.io/download/)

### Antes de seguir as próximas etapas:

```bash
# Clone this repository
git clone https://github.com/JonathanFerraz/dragon-sicredi.git

# Go to "dragon-sicredi" folder
cd dragon-sicredi
```

### Como iniciar o servidor

```bash
  # Go to "server" folder
  cd server

  # Install dependencies
  yarn

  # Create a PostgreSQL database instance
  docker run --name dragon-sicredi -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

## Obs.:

Após criação da instância, necessário entrar na mesma com algum gerenciador de banco de dados (eu utilizei o [DBeaver](https://dbeaver.io/download/)) e preencher os seguintes campos:

- Database: postgres
- Host: localhost
- Port: 5432
- User: postgres
- Password: docker

"Estes valores podem ser alterados dentro do arquivo .ormconfig.json"

Feito isso, clique em Finish e crie uma database chamada "db_dragon" e siga o passo seguinte.

```bash

  # Create migration
  yarn typeorm migration:run

  # Start the server
  yarn dev
```

## Obs.:

Após finalizar estas etapas, deve ser criado em .env dentro de /web para armazenar a chamada API

```bash
  REACT_APP_DRAGON_API = http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon
```

### Como começar a rodar a versão web

```bash
  # Go to "web" folder
  cd web

  # Install dependencies
  yarn

  # Start the "web" version
  yarn start

  # Access http://localhost:3000 in your browser
```

<p align="center">
  Made with &nbsp💜&nbsp by Jonathan Ferraz
</p>
