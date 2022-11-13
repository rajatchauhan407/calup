FROM node:14-alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

# CMD [ "npm","run","start" ]

RUN npm run build

FROM nginx:stable-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/build /usr/share/nginx/html 

EXPOSE 80

EXPOSE 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]