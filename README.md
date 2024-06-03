# Bug: Fails to read header in next js pages/layout after setting it in the middleware

This repo will help you reproduce the bug

## How to set it up

```sh
git clone https://github.com/clmnin/cf-middleware-set-header.git
cd cf-middleware-set-header
npm i
```

### Run NextJS Dev to see what are the expected outputs
```sh
npm run dev
# console log "token-value" for the middleware, page and layout
# ▲ Next.js 14.1.0
# - Local:        http://localhost:3000
# 1. middleware: token-value
# 2. page: token-value
# 3. layout: token-value
```

This is the expected output for a next js app. The page and layout routes get the response passed by the middleware.

### Run Cloudflare pages preview using wrangler
```sh
npm run preview
# fails to console log "token-value" for the middleware, page and layout
# [wrangler:inf] Ready on http://localhost:8788
# 1. middleware: token-value
# 2. page: null
# 3. layout: null
```