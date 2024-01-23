const app =  require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;  // caso a variavel port nao estiver disponivel, ele vai usar a porta 3333   

app.listen(PORT, () => console.log('Server is running or port 3333'));
  