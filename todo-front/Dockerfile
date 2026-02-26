FROM node:20-alpine AS builder

LABEL maintainer=""

WORKDIR /app

ADD . /app

RUN npm install

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

ADD nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]