import User from "../models/User.js";

const newsDefault = async (req, res, next) => {
  try {
    const users = await User.find({}).lean();
    res.render("news", {
      users
    });
  }
  catch (error) {
    next(error);
  }
}

const newsSlug = (req, res) => {
  res.send("News Detail");
}

export {
  newsDefault,
  newsSlug
};
