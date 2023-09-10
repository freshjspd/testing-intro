const http = require('http');
const express = require('express');

// app start
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from server');
});
app.get('/api/users/1', (req, res) => {
  res.status(200).send({ id: 1, name: 'User1' });
});
// app end

const httpServer = http.createServer(app);

httpServer.listen(5000, () => console.log('Server is running'));

module.exports = app;
