ARG NODE_VERSION=20.18.1

# Alpine image
FROM node:${NODE_VERSION}-alpine AS alpine
RUN apk update
RUN apk add --no-cache libc6-compat openssl python3 make g++

# Setup pnpm and turbo on the alpine base
FROM alpine as base
RUN npm install pnpm turbo --global

# Prune projects
FROM base AS pruner
ARG PROJECT

WORKDIR /app
COPY . .
RUN turbo prune --scope=${PROJECT} --docker

# Build the project
FROM base AS builder
ARG PROJECT

WORKDIR /app

# Copy lockfile and package.json's of isolated subworkspace
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=pruner /app/out/json/ .

# First install the dependencies (as they change less often)
RUN pnpm install --frozen-lockfile

# Copy source code of isolated subworkspace
COPY --from=pruner /app/out/full/ .

RUN turbo run build --filter=${PROJECT}

RUN pnpm install --prod --frozen-lockfile
RUN rm -rf ./**/*/src

# Final image
FROM alpine AS runner
ARG PROJECT

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
USER nodejs

WORKDIR /app
COPY --from=builder --chown=nodejs:nodejs /app .
WORKDIR /app/apps/${PROJECT}

ARG PORT=8080
ENV PORT=${PORT}
ENV NODE_ENV=production
EXPOSE ${PORT}

CMD ["node", "dist/main.js"]