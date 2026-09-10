const newsDefault = (req, res) => {
  res.render("news");
}

const newsSlug = (req, res) => {
  res.send("News Detail");
}

module.exports = {
  newsDefault,
  newsSlug,
};