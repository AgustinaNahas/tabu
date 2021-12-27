# El Dockerfile es la receta. Qué cosas construyen mi imagen base del sistema? Qué cosas tiene que tener instaladas? etc

FROM node:14.1-alpine

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN npm install async
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/
WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build

EXPOSE 3000
CMD npm start