const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env);
console.log(process.env.NODE_ENV);

app.use(express.static(__dirname));
app.listen(3000, () => {
  console.log('App listening on port 3000');
});
