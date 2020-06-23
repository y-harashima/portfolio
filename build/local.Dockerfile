FROM node:12.17-alpine

WORKDIR /web
COPY ./web/ /web

RUN yarn install

EXPOSE 3000
