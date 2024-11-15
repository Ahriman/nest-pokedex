# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
# Instala pnpm
RUN apk add --no-cache git && npm install -g pnpm@9.12.3
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the app with cache dependencies
FROM node:18-alpine3.15 AS builder

# Instala pnpm
RUN apk add --no-cache git && npm install -g pnpm@9.12.3

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build


# Production image, copy all the files and run next
FROM node:18-alpine3.15 AS runner

# Instala pnpm
RUN apk add --no-cache git && npm install -g pnpm@9.12.3

# Set working directory
WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public

# # Copiar el directorio y su contenido
# RUN mkdir -p ./pokedex

# COPY --from=builder ./app/dist/ ./app
# COPY ./.env ./app/.env

# # Dar permiso para ejecutar la applicación
# RUN adduser --disabled-password pokeuser
# RUN chown -R pokeuser:pokeuser ./pokedex
# USER pokeuser

EXPOSE 3000

CMD [ "node","dist/main" ]