FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./src ./src

ARG APP_PORT
ARG NODE_ENV
EXPOSE $APP_PORT

CMD if [ $NODE_ENV = "production" ]; then npm run build; else npm run dev; fi
