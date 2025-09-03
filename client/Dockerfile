# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:stable-alpine

# Copy the React build output to NGINX's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (NGINX)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
