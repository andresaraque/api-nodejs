const axios = require("axios");

const getProducts = async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://dummyjson.com/products${req.url.replace("/", "")}`
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(err.response.status).json({
      ok: false,
      msg: err?.response?.data?.message,
      error: err,
    });
    throw new Error(err);
  }
};

module.exports = {
  getProducts
};
