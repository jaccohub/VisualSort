# Node to build react
FROM node:12.18-alpine as builder
RUN mkdir -p /opt/lodenius/app
WORKDIR /opt/lodenius/app
COPY package*.json ./
RUN npm install
ADD . /opt/lodenius/app
RUN npm run build

# Nginx to serve build folder
FROM nginx:1.17
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /opt/lodenius/app/build/ /usr/share/nginx/html/
