# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root package.json and workspace files
COPY package.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .
COPY turbo.json .

# Copy all apps and packages
COPY apps/admin ./apps/admin
COPY packages ./packages

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install

# Build the app
RUN pnpm --filter admin build

# Production stage
FROM nginx:alpine

# Copy static files
COPY --from=builder /app/apps/admin/dist /usr/share/nginx/html

# Copy nginx config
COPY apps/admin/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

CMD ["nginx", "-g", "daemon off;"]
