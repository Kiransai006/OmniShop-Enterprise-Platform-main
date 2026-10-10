FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
RUN apk update && apk upgrade
COPY --from=build /app/dist /usr/share/nginx/html
# nginx renders this template at startup, substituting the env vars below
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
# Defaults match the Kubernetes Service names; docker-compose overrides them
ENV ORDERS_URL=http://orders-service
ENV PRODUCTS_URL=http://products-service
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
