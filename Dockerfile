FROM node:14-alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/build /usr/share/nginx/html