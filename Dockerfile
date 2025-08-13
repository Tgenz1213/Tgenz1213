FROM node:22-alpine AS builder
WORKDIR /app
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY --chown=node:node . .
RUN yarn build

FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf \
    && rm -rf /usr/share/nginx/html/*

COPY security/nginx.conf /etc/nginx/nginx.conf
COPY \
    --from=builder \
    --chown=nginx:nginx \
    /app/dist \
    /usr/share/nginx/html

USER nginx
EXPOSE 8080
HEALTHCHECK \
    --interval=30s \
    --timeout=5s \
    --start-period=10s \
    --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
