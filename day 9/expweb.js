
let express = require('express');
let path = require('path');



let instace = express();


instace.use(
    express.static(path.join(__dirname,"./../../node_modules/jquery/dist"))
     
 );
 

// 4. configure the router

let router= express.Router();


instace.use(router);


router.get("/", (req,resp)=>{
       resp.sendFile("index.html", {
        root: path.join(__dirname, './../Day9')
    });
});



router.get("/home", (req,resp)=>{
    resp.sendFile("home.html", {
        root: path.join(__dirname, './../Day9')
    });
});

router.get("/about", (req,resp)=>{
   
    resp.sendFile("about.html", {
        root: path.join(__dirname, './../Day9')
    });
});
// 6. start listening on port to accept requests
instace.listen(9087, ()=>{
    console.log('Express Web App is started on port 9087');
});
