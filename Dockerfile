# Production image for the Next.js app, served with `next start` on port 3000.
FROM node:22.12.0-alpine3.20 AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22.12.0-alpine3.20 AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# next start loads next.config.ts with TypeScript, so dev dependencies stay installed.
RUN npm run build

FROM node:22.12.0-alpine3.20
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0
COPY --from=build --chown=node:node /app/package.json ./package.json
COPY --from=build --chown=node:node /app/next.config.ts ./next.config.ts
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/public ./public
COPY --from=build --chown=node:node /app/.next ./.next
USER node
EXPOSE 3000
CMD ["node_modules/.bin/next", "start", "-p", "3000", "-H", "0.0.0.0"]
