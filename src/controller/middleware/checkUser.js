const schemaUser = require('../../database/modelUser');

function middlewareCheckUser(req, res, next) {
  const { name } = req.body;
  schemaUser.findOne({ name },
    (err, data) => {
      if (data) {
        res.status(400).send('ja cadastrado!');
      } else {
        next();
      }
    });
}

module.exports = middlewareCheckUser;
