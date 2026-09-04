FROM oven/bun:1.4.0 AS bun

FROM mcr.microsoft.com/devcontainers/base:1-bookworm

COPY --from=bun /usr/local/bin/bun /usr/local/bin/bun

RUN ln -s /usr/local/bin/bun /usr/local/bin/bunx \
    && apt-get update \
    && apt-get install -y --no-install-recommends python3 ca-certificates \
    && rm -rf /var/lib/apt/lists/*
