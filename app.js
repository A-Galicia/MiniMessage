const express = require('express');
const app = express();
const path = require('node:path');
const assetsPath = path.join(__dirname, 'public');

const indexRouter = require('./routes/indexRouter');

// Views setup ////////////////////////////////////////////////////

app.use(express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ________________________________________________________________

// Routes /////////////////////////////////////////////////////////
app.use(express.urlencoded({ extended: true }));
app.get('/new', indexRouter);
app.post('/new', indexRouter);
app.get('/', indexRouter);

// ________________________________________________________________

// Error handeling ////////////////////////////////////////////////

app.get('/{*splat}', (req, res) => {
  res.send('Error: 404');
});

// ________________________________________________________________

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`listeing on PORT: ${PORT}`);
});
