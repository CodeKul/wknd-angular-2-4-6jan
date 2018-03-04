const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get(
    '/',
    (req, res) => res.send('Hello World!')
)

app.post(
    '/calcv2',
    (req, res) => {
        let custRes = {}
        if (req.body.operation === '+') {
            custRes = {
                sts: 200,
                msg: 'addition',
                res: (parseInt(req.body.num1) + parseInt(req.body.num2))
            }
        } else {
            custRes = {
                sts: 400,
                msg: 'error',
                res: 0
            }
        }
        res.json(custRes)
    }
)
app.listen(
    3000,
    () => console.log('Example app listening on port 3000!')
)