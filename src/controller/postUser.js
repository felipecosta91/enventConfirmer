const schemaUser = require('../database/modelUser');

const postUser = async (req, res) => {
  const name = req.body;
  const data = new schemaUser(name);

  data.save(
    (err) => {
      if (err) { return res.status(401).json({ error: 'erro ao salvar no banco' }); }

      res.status(200).json(data);
    },
  );
};

module.exports = postUser;
