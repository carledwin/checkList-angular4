{
  "root": "dist/",
  "routes": {
    "/**": "index.html"
  },
  "proxies": {
    "/api/": {
      "origin": "you api url"
    }
  }
}