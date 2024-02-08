<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Instalação

```bash
$ npm install
```

## Configurando as variáveis de ambiente
Crie um arquivo .env na raiz do diretório /backend e copie o conteúdo presente no arquivo .env.example para o arquivo .env.
<br><br>Obs: é necessário que você ajuste as seguintes variáveis de acordo com as suas configurações do MySQL:
- MYSQL_HOST
- MYSQL_PORT
- MYSQL_USERNAME
- MYSQL_PASSWORD

## Configurando o banco de dados
Faça login com o seu usuário e senha MySQL
<br><br>Através do terminal: ![image](https://github.com/matheush-a/super-professor/assets/33291961/1ce8fa73-a090-44f1-a6f6-e9aa575b974b)

<br>Após realizar o login, crie uma base de dados chamada 'matriculas'![image](https://github.com/matheush-a/super-professor/assets/33291961/8c51f6a8-6bcb-4524-a6d4-2336e3af8928)

<br>Utilize a base de dados 'matriculas' ![image](https://github.com/matheush-a/super-professor/assets/33291961/07148c90-6ecc-4675-852a-59eb92cb6a60)

## Executando a aplicação

```bash
# Modo de desenvolvimento
$ npm run start

# Modo de desenvolvimento com hot-reload
$ npm run start:dev

# Modo de produção
$ npm run start:prod
```

## Populando os dados nas tabelas
- Abra o arquivo matriculas.dataset.sql, este arquivo está disponível no caminho /backend/seeds/
- Copie o conteúdo e execute na base de dados MySQL

## Integrações
![image](https://github.com/matheush-a/super-professor/assets/33291961/5c9fb9fa-6b63-4aba-8112-9fb1fe6b102b)
<br><br>Foi realizada uma integração com a API ViaCEP para realizar as validações de CEP dos usuários.
<br><br>A decisão de utilizar esta API foi tomada principalmente pela facilidade de integração e também por ser uma API robusta e gratuita.

https://viacep.com.br/

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
