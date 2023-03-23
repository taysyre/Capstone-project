const express = require('express');
// route
const route = require('./controller/orderController');
const route = require('./controller/postController');
const route = require('./controller/productController');
const route = require('./controller/userController');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 9001;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');

app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', '*')
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});

app.use(route);
app.use(
    cors(),
    cookieParser(),
    express.json,
    express.urlencoded({extended: false})
)

// Server is running
app.listen(port, ()=> {
    console.log(`Server is running...`);
    console.log(`Listening on port ${port}...`);
});
// Handling all errors
app.use(errorHandling);