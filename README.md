# Minha API

Este pequeno projeto faz parte do material diático da Disciplina **Desenvolvimento Front-end Avançado** 

O objetivo aqui é ilutsrar o conteúdo apresentado ao longo das três aulas da disciplina.


## Como executar 

### `npm start`

Abra o [http://localhost:3000](http://localhost:3000) no navegador para acessar.


## Dependencias 
Para rodar o projeto reá nescessario instalar alguns recursos utilizados.
### npm install @material-ui/icons 
### npm install @material-ui/core 
### npm install @mui/x-data-grid


https://github.com/UlissesCanal/MVP_Front_BackEnd_Avancado.git



---
## Como executar através do Docker

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t my-react-app .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 3000:3000 my-react-app
```

Uma vez executando, para acessar a API, basta abrir o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.



### Alguns comandos úteis do Docker

>**Para verificar se a imagem foi criada** você pode executar o seguinte comando:
>
>```
>$ docker images
>```
>
> Caso queira **remover uma imagem**, basta executar o comando:
>```
>$ docker rmi <IMAGE ID>
>```
>Subistituindo o `IMAGE ID` pelo código da imagem
>
>**Para verificar se o container está em exceução** você pode executar o seguinte comando:
>
>```
>$ docker container ls --all
>```
>
> Caso queira **parar um conatiner**, basta executar o comando:
>```
>$ docker stop <CONTAINER ID>
>```
>Subistituindo o `CONTAINER ID` pelo ID do conatiner
>
>
> Caso queira **destruir um conatiner**, basta executar o comando:
>```
>$ docker rm <CONTAINER ID>
>```
>Para mais comandos, veja a [documentação do docker](https://docs.docker.com/engine/reference/run/).