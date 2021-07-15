<p align="center">
  <img src="https://img.shields.io/badge/npm-7.18.1-red"> <img src="https://img.shields.io/badge/node-v16.4.2-green">
  <img src="https://img.shields.io/badge/nestjs-v7.6.0-green"> <img src="https://img.shields.io/badge/android-API%2029-green">
  <img src="https://img.shields.io/badge/mongoose-7.2.4-yellowgreen"> <img src="https://img.shields.io/badge/jwt-7.2.0-red">
  <img src="https://img.shields.io/badge/microsservices-8.0.1-blue"> <img src="https://img.shields.io/badge/MongoDB-latest-green">
  <img src="https://img.shields.io/badge/docker--compose-3.1-blue"> <img src="https://img.shields.io/badge/docker-20.10.2-blue">
  <img src="https://img.shields.io/badge/bash-5.0.17-red"> <img src="https://img.shields.io/badge/grpcox-latest-yellow">
  <img src="https://img.shields.io/badge/proto-3-orange"> <img src="https://img.shields.io/badge/gRPC-1.3.5-blue">
  <img src="https://img.shields.io/badge/typescript-4.3-blue"> <img src="https://img.shields.io/badge/Linux-5.4-yellow">
</p>

# Índice <br>
**<a href="#abstract">1 - O que é o SigaMobile?</a><br>**
**<a href="#tech_utilities">2 - Tecnologias utilizadas</a><br>**
**<a href="#requireds">3 - Requisitos para excutar a aplicação</a><br>**
**<a href="#app_exex">4 - Executando a aplicação</a><br>**
<a href="#backend_exex">---| 4.1 - Backend NestJS</a><br>
<a href="#frontend_exex">---| 4.2 - Frontend Android</a><br>
<a href="#fake_users">---| 4.3 - Logins de Teste</a><br>
**<a href="#documentation">5 - Documentação da aplicação</a>**<br>
**<a href="#team">6 - Authors</a>**<br>

<div id="#abstract"></div>

# O que é o SigaMobile? <br>
O SigaMobile é um aplicativo android em desenvolvimento, com o objetivo de disponibilizar ao aluno do IFAM uma forma simples e rápida de acompanhar sua situação acadêmica, permitindo ao aluno consultar suas disciplinas, notas, horários de aulas, histórico acadêmico e etc. <br>

## 🔖 Por quê desenvolvê-lo? <br>
Atualmente o sistema acadêmico disponível aos alunos do IFAM CMZL é bastante problemático, tanto no frontend quanto no backend. No frontend o visual é muito poluido e os alunos perdem muito tempo buscando algo por ser difícil de entender as funcionalidades, além disso no backend, por ser uma aplicação monolítica cresceu bastante, não tem tolerância a falhas, ou seja, a aplicação fica fora do ar caso haja falha ou seja necessário realizar manutenção.<br>

## 💡 Proposta do sistema <br>
A proposta é desenvolver um frontend mobile (Android) e o backend na arquitetura de microsserviços para melhorar determinadas funcionalidades que possuem altas demandas. Com esta arquitetura o sistema também será tolerante a falhas e em caso de manutenção apenas um serviço específico será afetado, não havendo necessidade de deixar a aplicação inteira fora do ar.<br>

<div id="tech_utilities"></div>

## ⚙️ Tecnologias utilizadas:
 **✳️ Linux (Ubuntu ou Debian):** para utilizar a ferramenta Docker com mais compatibilidade e executar shell scripts sem maiores dificuldades.<br>
 **✳️ Docker e docker-compose:** para que o projeto fosse capaz de executar em vários computadores e subir o ambiente de desenvolvimento de maneira mais fácil.<br>
 **✳️ Git e GitHub:** para trabalhar com versões do projeto e manter um repositório online para guardar as atualizações feitas pela equipe de desenvolvimento.<br>
 **✳️ MongoDB:** para criar um banco de dados não relacional que seja capaz de fazer atualizações ou adições de atributos com maior flexibilidade.<br>
 **✳️ NPM:** para utilizar o framework NestJs e gerenciar as dependências do projeto.<br>
 **✳️ Android:** para desenvolver o frontend foi escolhido o Android 10 (API 29), com programação nativa em java, utilizando o gerenciador de pacotes Gradle.<br>
 **✳️ Framework NestJS:** utilizando a linguagem TypeScript, foi escolhido porque apesar de ser um framework recente, foi desenvolvido para ser compatível com novas tecnologias. Na área de microsserviços possui compatibilidade com o **Redis, MQTT, NATS, RabbitMQ, Kafka, gRPC**, além de ter libs para transporters, pipes, guards e interceptors. O gerenciador de microsserviços utilizado neste projeto é o gRPC. O NestJs também tem como padrão próprio o uso de padrões de projetos, utilizando Factory para criar os módulos, Decorator para adicionar funcionalidades em outras classes, como por exemplo a autenticação por JWT para acessar uma API, Strategy para utilizar classes padrões da ferramenta, dentre outros.<br><br>

<div id="requireds"></div>

# Requisitos para rodar aplicação:
✴️ Docker e docker-compose<br>
✴️ Sistema operacional Linux (Ubuntu/Debian)<br>
✴️ Android Studio com Android 10 (API 29) e versão 4.1.1 ou superior do Gradle<br>
✴️ O computador que irá executar a aplicação deve estar na mesma rede (Wifi ou USB tethering) que o celular que irá usar o aplicativo<br>
✴️ Acesso a internet<br>

<div id="app_exex"></div><br>

# Executando a Aplicação
<p>Baixe o repositório:</p>

```bash
git clone https://github.com/rpm-95/SigaMobile.git
```
<div id="backend_exex"></div>

## 🖥️ Backend NestJs
Primeiro certifique-se de que as portas **4040**, **27017**, e **6969** do seu computador não estão sendo utilizadas por outras aplicações, é necessário que as mesmas estejam disponíveis.<br>
Entre na pasta raiz do repositório **"SigaMobile"** e execute o comando:

```bash
# para executar pela primeira vez
./devops/build.sh
```
<p>Aguarde até que o terminal mostre as mensagens abaixo: </p>

```bash
[NestApplication] Nest application successfully started +8ms
[NestMicroservice] Nest microservice successfully started +15ms
[NestMicroservice] Nest microservice successfully started +3ms
[NestMicroservice] Nest microservice successfully started +3ms
```

Após isso o backend da aplicação estará sendo executando. Caso queira continuar utilizando o mesmo terminal será necessário executar o seguinte comando: `ctrl+c`.
<br>

Caso já tenha executado a aplicação com sucesso anteriomente, pode-se executar os seguintes comandos para iniciar ou parar a execução:<br>

```bash
# para iniciar a aplicação
./devops/app.sh start

# para parar a aplicação
./devops/app.sh stop
```

<div id="frontend_exex"></div>

## 📱 Frontend Android
Execute o Android Studio e certifique-se de ter o **Android 10 (API 29)** disponível na IDE, após isso abra o projeto "frontend-android" que está no diretório raiz do repositório. Aguarde o Gradle baixar as dependências do projeto e sincronizar.<br>
Após isso localize o arquivo `api_routes.xml`, localizado no seguinte diretório `/frontend-android/app/src/main/res/values`.<br>

1-  Na linha 4 do arquivo altere o IP e coloque o do seu compudator na rede, seguido da porta do backend da aplicação. Deverá ficar assim:
`seu.ip.na.rede:4040`.<br>
2 - Após realizar esta alteração execute a aplicação no Emulador do Android ou instale no seu celular via cabo USB.<br>

<div id="fake_users"></div>

## 🧑 Logins para teste<br>
Para utilizar a aplicação você pode usar os dados abaixo:<br><br>
-> Usuário já cadastrado no sistema:<br>
--| **usuário:** `joaomelo`<br>
--| **senha:** `password`<br>
--| **matrícula:** `2019025996`<br>
--| **rg:** `358867`

-> Usuário a ser cadastrado (primeiro acesso):<br>
--| **matrícula:** `2019025096`<br>
--| **rg:** `448868`

<br>

<div id="documentation"></div>

# Documentação do projeto
Para vizualizar a documentação contendo o protótipo, requisitos funcionais, histórias de usuário e testes de usabilidade acesse o link abaixo: <br>
[Clique aqui para ver a documentação da aplicação](https://www.notion.so/SigaMobile-274cdacfb6c640928a7c7a4a3738395e) <br>

<div id="team"></div>

# Authors <br>
[Rodrigo Perote](https://github.com/rpm-95) - MIRCROSERVICES | Login, Authorization e criar novo usuário (primeiro acesso) <br>
[Thalles Kaik](https://github.com/thallesk17) - MIRCROSERVICE | Emitir atestado de Matrícula <br>
[Bernardo Amazonas](https://github.com/badc-2000) - MIRCROSERVICE | Visualizar notas e horários de aula <br>
[Gabriel Costa](https://github.com/GabrielCostaSilvaa) - MIRCROSERVICE | Atualização de dados pessoais <br>