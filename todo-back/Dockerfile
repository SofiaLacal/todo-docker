FROM node:8

LABEL maintainer=""

WORKDIR /app

ADD . /app

RUN npm install 

EXPOSE 8889

ENTRYPOINT ["node", "src/index.js"]