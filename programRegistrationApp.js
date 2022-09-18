const express = require("express");

require("dotenv").config();

require("./api/repository/db");

const app = express();

const routes = require("./api/routes");

app.use("/api", function(req,res,next){

    res.header('Access-Control-Allow-Origin','http://localhost:4200');
    res.header('Access-Control-Allow-Headers', 'Origin, XRequested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods',"GET, POST, PATCH");

    next();
});
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api",routes);

const server =app.listen(process.env.PORT, function(){
    console.log(process.env.MSG_SERVER_STARTING,server.address().port);
});
