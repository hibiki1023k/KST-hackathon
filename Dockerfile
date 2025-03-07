FROM node:22.14

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install \
    && npm run build \
    && chmod +x /app/docker/entrypoint.sh

ENTRYPOINT ["sh", "/app/docker/entrypoint.sh"]
