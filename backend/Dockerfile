FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

ARG APP_PORT
ARG NODE_ENV
EXPOSE $APP_PORT

RUN if [ "$NODE_ENV" = "production" ]; then npm run build; else npm run dev; fi
