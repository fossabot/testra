FROM nginx:stable-alpine

COPY docker/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*
WORKDIR /usr/share/nginx/html

COPY docker/entrypoint.sh /
RUN chmod +x /entrypoint.sh

COPY dist/ .

ENTRYPOINT [ "sh", "/entrypoint.sh" ]
CMD ["nginx", "-g", "daemon off;"]
