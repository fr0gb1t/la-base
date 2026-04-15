FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy root package files
COPY package.json pnpm-lock.yaml ./

# Copy all packages
COPY packages ./packages

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build shared package
WORKDIR /app/packages/shared
RUN pnpm build

# Back to app root
WORKDIR /app

# Set environment
ENV NODE_ENV=development

# Expose port
EXPOSE 5173

# Start client
CMD ["pnpm", "-w", "run", "dev"]
