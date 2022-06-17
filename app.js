
let express = require('express')
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

let url = 'mongodb://localhost:4200/Online Grocers';

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 
app.use(cors()); 


const mongooseDbOption = {
  
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, mongooseDbOption); 

mongoose.connection;



var Users = require('./Users/router/user.router.js');
var Product = require('./Products/router/product.router.js');
var Employee = require('./Employees/router/emp.router.js');
var Admin = require('./Admin/router/admin.router.js');
var Request = require('./Requests/router/requests.router.js');




app.use('/product', Product);
app.use('/', Users);
app.use('/emp', Employee);
app.use('/admin', Admin);
app.use('/request', Request);

app.listen(4200, () => console.log('Server is running on port number 4200'));
