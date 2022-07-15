const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv/config');


mongoose.Promise = global.Promise;
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})


require('./routes/food.routes')(app);
require('./routes/order.routes')(app);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('mongo db running!')
}).catch(() => {
    process.exit();
})

app.listen(3000, () => {
    console.log('Our server is running')
})