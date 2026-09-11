import newsRouters from "./news.js";
import homeRouters from "./home.js";
import searchRouters from "./search.js";

const routers = (app) => {
  // home
  app.use("/", homeRouters);
  // news
  app.use("/news", newsRouters);
  app.use("/news/:slug", newsRouters);
  // search
  app.use("/search", searchRouters);
}

export default routers;