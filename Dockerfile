FROM node:19.9.0-alpine3.18 AS build

ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

RUN apk add --no-cache python3 g++ gcc make musl-dev

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY . .
RUN npm run build


FROM nginx:1.25.4-alpine3.18 AS deploy

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]