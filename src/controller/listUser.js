const indexUser = (req, res) => {
  const name = req.params;

  res.json(name);
};

module.exports = indexUser;
