# Use uma imagem base Node.js com npm
FROM node:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Instale uma versão específica do npm
RUN npm install -g npm@10.6.0

# Copie o arquivo package.json para o diretório de trabalho
COPY package.json .

# Instale as dependências usando npm
RUN npm install --force

# Instale os pacotes específicos necessários
RUN npm install @material-ui/icons @material-ui/core @mui/x-data-grid --force

# Copie o restante do código-fonte para o diretório de trabalho
COPY . .

# Construa a aplicação React para produção
RUN npm run build

# Exponha a porta 3000 para fora do contêiner
EXPOSE 3000

# Defina o comando padrão para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
