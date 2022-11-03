const express = require("express");
const app = express();
const route = require("./router/router")
const cors = require("cors")
const bodyParser = require('body-parser')

app.use(bodyParser.json());
bodyParser.urlencoded({ extended: false })

// allow cors
app.use(cors())

//operatorTypeRoute
app.use(route)

app.all("*",(req,res)=>{
    res.status(404).send("You seem lost, what are you looking for?")
})


port = process.env.PORT || 3000;
app.listen(port, () => console.log("Hello and Welcome to Olúbùsọ́lá's world 🙌, here we listen carefully"));