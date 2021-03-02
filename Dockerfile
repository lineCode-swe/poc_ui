FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY /dist/JSONServerAPI/* /usr/share/nginx/html/

EXPOSE 8081
