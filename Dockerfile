# Stage 1: Build the NestJS project
FROM node:18 AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files and build
COPY . .
RUN npm run build

# Stage 2: Create a lightweight production image
FROM node:18-slim
WORKDIR /app

# Copy build output and production dependencies
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

# Expose the port used by NestJS
EXPOSE 3000

# Start the application
CMD ["node", "dist/main"]
