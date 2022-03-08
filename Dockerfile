FROM node:alpine

WORKDIR /usr/todo-api

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

EXPOSE 9000

CMD npm run start:dev