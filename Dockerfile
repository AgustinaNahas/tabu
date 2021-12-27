# El Dockerfile es la receta. Qué cosas construyen mi imagen base del sistema? Qué cosas tiene que tener instaladas? etc

FROM node:10-alpine

ADD package.json /tmp/package.json
RUN cd /tmp
RUN npm install
RUN mkdir -p /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app/
WORKDIR /usr/src/app
ADD . /usr/src/app

RUN npm run build

EXPOSE 3000
CMD npm start