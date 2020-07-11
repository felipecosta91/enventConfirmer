const schemaUser = require('../database/modelUser');

const indexUser = async (req, res) => {
  await schemaUser.find({}, (err, data) => {
    if (err) { return res.status(500).send('error'); }
    res.json(data);
  });
};

module.exports = indexUser;
