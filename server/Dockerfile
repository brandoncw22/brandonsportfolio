# Use a small Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and lock file first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose port 4000 (matches your Express app)
EXPOSE 4000

# Start the server
CMD ["node", "server.js"]
