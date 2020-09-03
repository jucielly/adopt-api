const app = require('./app');

const server = app.listen(3000, () => {
  console.log('adopt-api started!');
});

process.on('SIGINT', () => {
  console.log('Morrendo');
  server.close();
});
