// CORS when consuming Medusa from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "https://app.medusa-commerce.com";

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || "http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/medusa-store";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// Contentful Variables
const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID || "";
const CONTENTFUL_ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN || "";
const CONTENTFUL_ENV = process.env.CONTENTFUL_ENV || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  {
    resolve: "@medusajs/admin",
    options: {
      path: "app", //访问路径
      serve: true, //是否为管理仪表板提供服务。
    },
  },
  // add github info
 /*  {
    resolve: `medusa-file-github`,
    options: {
      owner: "bentrynning",
      repo: "medusa",
      path: "public",
      // this is the path to the folder where your assets live
      cdn_url: "https://cdn.jsdelivr.net/gh",
      github_token: "YOUR-FINE-GRAINED-GITHUBTOKEN",
      // process.env.GITHUB_TOKEN
    },
  }, */
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  // {
  //   resolve: `medusa-payment-stripe`,
  //   options: {
  //     api_key: STRIPE_API_KEY,
  //     webhook_secret: STRIPE_WEBHOOK_SECRET,
  //   },
  // },
];

module.exports = {
  projectConfig: {
    // redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    // database_url: DATABASE_URL,
    // database_type: "postgres",
    database_database: "./medusa-db.sql",
    database_type: "sqlite",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
