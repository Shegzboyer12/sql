const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'your_database_name'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database');
});

connection.query('SELECT * FROM Customers', (err, results) => {
  if (err) {
    console.error('Error retrieving customers:', err);
    return;
  }
  console.log('Customers:', results);
});

connection.query('SELECT product_name, category FROM Products WHERE price BETWEEN 5000 AND 10000', (err, results) => {
  if (err) {
    console.error('Error retrieving products:', err);
    return;
  }
  console.log('Products:', results);
});

connection.query('SELECT * FROM Products ORDER BY price DESC', (err, results) => {
  if (err) {
    console.error('Error retrieving products:', err);
    return;
  }
  console.log('Products:', results);
});

connection.end((err) => {
  if (err) {
    console.error('Error closing connection:', err);
    return;
  }
  console.log('Connection closed');
});