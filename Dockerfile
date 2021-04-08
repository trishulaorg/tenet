FROM node:14

MAINTAINER minamorl

WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]
