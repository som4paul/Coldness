# Stage 1: Build Frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend ./
RUN npm run build

# Stage 2: Build Backend
FROM node:18-alpine AS backend-builder
WORKDIR /app
COPY backend/package*.json ./
RUN npm ci --production
COPY backend ./
COPY --from=frontend-builder /app/frontend/dist ./public

# Final: Run
FROM node:18-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=backend-builder /app ./
EXPOSE 5000
CMD ["node", "server.js"]
