#!/usr/bin/env bash
set -euo pipefail
mkdir -p public/instagram/2026-09-13
if compgen -G 'staging/story1/part-*.b64' > /dev/null; then
  cat staging/story1/part-*.b64 | tr -d '\n' | base64 -d > public/instagram/2026-09-13/story-01.jpg
fi
if compgen -G 'staging/story2/part-*.b64' > /dev/null; then
  cat staging/story2/part-*.b64 | tr -d '\n' | base64 -d > public/instagram/2026-09-13/story-02.jpg
fi
if compgen -G 'staging/feed/part-*.b64' > /dev/null; then
  cat staging/feed/part-*.b64 | tr -d '\n' | base64 -d > public/instagram/2026-09-13/feed.jpg
fi
