# build environment
FROM node:10.15.3-alpine as builder

# build react
WORKDIR /app/react-app

COPY react-app/package.json .
RUN npm install --silent
COPY react-app .
RUN npm run build

# build vue 
WORKDIR /app/vue-app

COPY vue-app/package.json .
RUN npm install --silent
COPY vue-app .
RUN npm run build

# build baseapp 
WORKDIR /app/base-app

COPY base-app/package.json .
RUN npm install --silent
COPY base-app .
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /app/base-app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
