require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL, { auto_reconect: true })
  .then(
    () => { console.log('conectado ao banco de dados'); },
    (err) => { console.log('erro ao conectar ao banco'); },
  );
