const express = require("express");
const morgan = require('morgan');

const carRouter = require('./car');

const app = express();

app.set('view engine','pug');
app.use(express.static('public'))
app.use(morgan('common',{ immediate: true }));
app.use(express.urlencoded({ extended:false}));

app.use('/car',carRouter);
app.get('/',(request,response)=>response.redirect('/car'));

app.listen(8080, () => {
    console.log('Server is listening to http://localhost:8080');
});