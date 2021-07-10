## Projeto Rocket.q - NLW Together trilha Discover

![Roquet q #02 (Copy)](https://user-images.githubusercontent.com/35710766/125176687-ca9ee400-e1ab-11eb-994b-36f38e0ad180.png)

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/VictorMello1993/NLW06TrilhaDiscover?color=FF0000">
  
  <a href="https://github.com/VictorMello1993/NLW6/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/VictorMello1993/NLW06TrilhaDiscover?color=D3D3D3">
  </a> 
  
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/VictorMello1993/NLW06TrilhaDiscover/stargazers"></a>
</p>


<p align="center">
  <a href="#earth_americas-visão-geral">Visão geral</a> •
  <a href="#wrench-recursos">Recursos</a> •
  <a href="#triangular_flag_on_postcomeçando">Começando</a> •
  <a href="#oil_drumbanco-de-dados">Banco de dados</a> •
  <a href="#possíveis-melhorias">Possíveis melhorias</a>
</p>

---

<h2>:earth_americas: Visão geral</h2>
<p>
  A aplicação foi desenvolvida com intuito de reforçar os conhecimentos básicos de front-end e back-end. Trata-se de uma aplicação que gerencia salas de perguntas elaboradas por usuários anônimos. Eles podem compartilhar salas entre si, assim como podem criar novas salas.
<p>
  
---

<h2>:wrench: Recursos</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>Javascript</li>
  <li>SQLite</li>
  <li><a href="https://nodejs.org/en/">NodeJS</a></li>
  <li><a href="https://www.npmjs.com/package/express">express</a></li>
</ul>

---

<h2>:triangular_flag_on_post:Começando</h2>

1 - Clone o repositório
```
git clone https://github.com/VictorMello1993/NLW06TrilhaDiscover.git
```

2 - Abra VS Code e abra a pasta <strong>NLW6</strong> como pasta raíz do projeto 


3 - Abra o terminal e instale todas as dependências do projeto

#### NPM
```
npm install
```

Em seguida, abrir o servidor digitando o comando abaixo:
```
npm run dev
```

#### Yarn
Ou, se preferir, se tiver ```yarn``` instalado, executar o comando abaixo para instalar as dependências:
```
yarn
```

Em seguida, para abrir o servidor, digitar o comando abaixo: 
```
yarn dev
```

---

<h2>:oil_drum:Banco de dados</h2>
Para visualizar todas as tabelas geradas pela aplicação, baixe o <a href="https://www.beekeeperstudio.io/">Beekeeper Studio</a>, software de gerenciamento de banco de dados. Neste projeto utilizamos SQLite, então para abrir a conexão com o banco de dados, basta procurar pelo arquivo <strong>database.sqlite</strong>. Teste para verificar se a conexão ocorrerá com êxito, e então, clique em <strong>Connect</strong>. 

![Screenshot_1](https://user-images.githubusercontent.com/35710766/125177173-ffad3580-e1af-11eb-9de6-8e8acddc42de.png)

Pronto, a conexão já está aberta, e poderá realizar as consultas

---

## Possíveis melhorias
- [ ] Decidir o padrão de arquitetura a ser adotado no projeto em questão (DDD, Clean Architecture, etc...)
- [ ] Integração com Typescript
- [ ] Armazenar senha de maneira encriptada no banco de dados
- [ ] Incluir dark mode
- [ ] Validar os campos de criar sala ou entrar sala
- [ ] Melhorar a notificação de senha inválida ou senha obrigatória
- [ ] Trocar SQLite por outro banco de dados à escolha (MySQL, MongoDB, Postgres, etc...)

---
## Versões do README
<img src="https://user-images.githubusercontent.com/35710766/123499283-02365980-d60c-11eb-8731-9e9f42d300f0.png" alt="Bandeira do Brasil" width="22px"/> <a href="/README-ENUS.md">Inglês</a> | <img src="https://user-images.githubusercontent.com/35710766/123499278-ffd3ff80-d60b-11eb-85d5-156558ade93a.jpg" alt="Bandeira dos Estados Unidos" width="22px"/> <a href="/README.md">Português</a>
