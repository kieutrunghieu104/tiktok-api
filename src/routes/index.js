const newsRouters = require("./news");
const homeRouters = require("./home");
const searchRouters = require("./search");
const routers = (app) => {
  // home
  app.use("/", homeRouters);
  // news
  app.use("/news", newsRouters);
  app.use("/news/:slug", newsRouters);
  // search
  app.use("/search", searchRouters);
}

module.exports = routers;