const express = require('express');
const cors = require('cors');
const postUser = require('./controller/postUser');
const middlewareUser = require('./controller/middleware/checkUser');
require('./database/connections');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', middlewareUser, postUser);

app.listen(process.env.PORT || 3333, () => { console.log('Servidor iniciado com sucesso'); });
