const express = require("express");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello world from node js and enjoy the expess framework");
})

app.listen(port, () => {
    console.log("The Server is listening the port", port);
})