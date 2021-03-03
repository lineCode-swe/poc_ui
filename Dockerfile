FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY ./dist/poc_ui /usr/share/nginx/html

EXPOSE 8081
