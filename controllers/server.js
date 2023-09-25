const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); 



//routes
app.get('index.ejs/', (req, res) => {
  res.render('index.ejs', { title: 'Welcome to my app' });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
