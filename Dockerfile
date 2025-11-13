FROM node:20.19.1-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Vite application
RUN npm run build

# To deploy the built /dist, serve it with a web server
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80