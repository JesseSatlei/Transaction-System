const app = require('./config/express')();
const port = app.get('port');

//Rodando nossa aplicação
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});