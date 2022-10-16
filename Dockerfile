FROM nginx

EXPOSE 80

COPY  ./build /app/build/usr/share/nginx/html