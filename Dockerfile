# FROM node:14-alpine as builder

# WORKDIR '/app'

# COPY package.json .

# RUN npm install

# COPY . .

# RUN npm run build

FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

COPY ./build /usr/share/nginx/html