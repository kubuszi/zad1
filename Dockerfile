FROM node:alpine AS builder

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./
FROM alpine
WORKDIR /app
COPY --from=builder /usr/app/ /app/
RUN apk add nodejs npm
ENV imie = "Jakub Sawa"
EXPOSE 8080

CMD ["npm", "start"]