const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'bwc6t14lzdktcmtxipnd-mysql.services.clever-cloud.com',
  user: 'ulhvih4nscu9buv7',
  password: 'vITjbBNRrYDXoKRgofBv',
  database: 'bwc6t14lzdktcmtxipnd',
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados');
});

module.exports = connection;