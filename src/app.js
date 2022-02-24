const express = require('express');
const routes = require('./routes/forwards.routes');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 5000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(routes);

app.use(express.static(path.join(__dirname, '../public')));
app.use((req,res) => {
    res.sendFile(path.join(__dirname, '../public/404.html'));
})

app.listen(app.get('port'), () => {
    console.log('Servidor a la espera de conexiones...');
})