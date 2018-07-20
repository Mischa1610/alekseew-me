# Simple docker image for http server (WebApp in dist folder [Angular WebApp])
FROM node:8.11-alpine
WORKDIR /usr/src/app
COPY /webapp/dist/alekseew-web /usr/src/app
RUN npm install -g http-server
EXPOSE 3000
CMD ["http-server", "-p 3000"]
