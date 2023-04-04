const fs = require("fs");
const path = require("path");

function buildSN(size = 32) {
  let v = Math.random().toString(36).slice(2);
  if (v.length < size) {
    v += buildSN(size - v.length);
  }
  return v.slice(0, size);
}

function build() {
  let lines = [];
  [
    "JWT_SECRET",
    "COOKIE_SECRET",
    "STRIPE_API_KEY",
    "STRIPE_WEBHOOK_SECRET",
    "CONTENTFUL_ACCESS_TOKEN",
  ].forEach((v) => {
    lines.push(v + "=" + buildSN(32));
  });
  lines.push("CONTENTFUL_ENV=production");
  fs.writeFileSync(path.join(__dirname, ".env"), lines.join("\r\n"));
}

build();
