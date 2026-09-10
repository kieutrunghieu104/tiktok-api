const searchDefault = (req, res) => {
  res.render("search", { q: req.body.gender, q: req.body.q, });
};

module.exports = searchDefault;