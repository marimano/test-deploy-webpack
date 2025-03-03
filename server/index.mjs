import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')))

app.get('/users', (req, res) => {
  res.send([{name: 'Jane', age: 30}, {name: 'Joe', age: 25}])
})

const port = process.env.PORT || 1234;
const host = process.env.HOST || 'localhost';
app.listen(port, host, () => {
  console.log('Server is started at ' + host + ':' + port);
});