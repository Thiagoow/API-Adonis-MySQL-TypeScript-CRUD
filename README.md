<!--
<div align="center">
<img src="./docs/app.jpg" align="center">
</div>-->

# AdonisJs API - TypeScript, Docker MySQL & Lucid ORM

<p>Essa API Rest foi feita por: <strong>Thiago Silva Lopes</strong>, em 09/2022.</p>
<p>Sendo utilizada no projeto -> <a href="">
</a>.</p>

### Demo: -------

## Project Setup

Instale o [Docker Desktop](https://www.docker.com/products/docker-desktop) ou apenas o [Docker Compose](https://docs.docker.com/compose/install).

```bash
# Instalar dependências:
$ yarn install

# Criar o container com MySQL:
$ docker-compose up -d

# Criar as tabelas/estruturas na dB:
$ node ace migration:run

# Criar os primeiros usuários com a seed:
$ node ace db:seed

# Crie um arquivo ".env" na pasta raiz com base no arquivo ".env.example"

# Preencher as vars de acordo com o arquivo "docker-compose.yml";

# Iniciar a API:
$ yarn dev

# Construir para produção e executar o servidor:
$ yarn build
$ yarn start
```

<small>
<a href="https://github.com/Thiagoow" target="_blank">
  © Thiago Silva Lopes
</a>
</small>
