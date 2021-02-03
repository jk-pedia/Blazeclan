let express  =require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let path = require('path');



const {Sequelize, DataTypes, Model}  =  require('sequelize');

let instance = express();
instance.use(bodyParser.urlencoded({extended:false}));
instance.use(bodyParser.json());
instance.use(cors({
    origin: "*", 
    methods: "*", 
    allowedHeaders: "*" 
}));


const sequelize = new Sequelize("Company", "root", "P@ssw0rd", {
     host: 'localhost', 
     dialect:'mysql', 
     pool: { 
        max:5,
        min: 0, 
        idle: 10000
     },
     define: { 
           timestamps:false  
     }
});

const dept = require(path.join(__dirname, './models/Department'))(sequelize, Sequelize.DataTypes);
const emp = require(path.join(__dirname, './models/Employee'))(sequelize, Sequelize.DataTypes);

instance.get("/api/departments", (req,resp)=>{
    sequelize.sync({
        force:false
    })
        .then(()=>
           dept.findAll()
        )
        .then((data)=>{
            resp.json({
                statusCode:200,
                rowsCount: data.length,
                response:data
            });
             
            resp.end();
        })
        .catch((error)=> {
            resp.status(500).send(error.message);
        });
});

instance.get("/api/departments/:id",(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({
            force: false
        })
        .then(() =>
           dept.findOne(
               {
                   where : {DeptNo:id}
               }
           )
        )
        .then((data) => {
            resp.json({ statusCode: 200, data: data })
            resp.end();
        })
        .catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.post("/api/departments", (req,resp)=> {
    
    let newDept = {
        DeptNo: req.body.DeptNo,
        DeptName: req.body.DeptName,
        Location: req.body.Location,
        Capacity: req.body.Capacity
    };

    
    sequelize.sync({force:false})
    .then(()=>
        
        {
            return dept.create(newDept);
        } 
      ).then((data)=>{
        resp.json({ statusCode: 200, data: data });
        resp.end();
      }).catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.put("/api/departments/:id", (req,resp)=> {
    
    let id = req.params.id; 
    
    sequelize.sync({force:false})
    .then(()=>
        
        dept.update({
            DeptName: req.body.DeptName,
            Location: req.body.Location,
            Capacity: req.body.Capacity
        }, {where:{DeptNo:id}})
      ).then((data)=>{
        resp.json({ statusCode: 200, data: data });
        resp.end();
      }).catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.delete("/api/departments/:id",(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({
            force: false 
        })
        .then(() =>
           dept.destroy({where:{DeptNo:id}})
        )
        .then((data) => {
            resp.json({ statusCode: 200, data: data })
            resp.end();
        })
        .catch((error) => resp.send({ statusCode: 500, data: error }));
});




instance.get("/api/employees", (req,resp)=>{
    sequelize.sync({
        force:false
    })
        .then(()=>
           emp.findAll() 
        )
        .then((data)=>{
            resp.json({
                statusCode:200,
                rowsCount: data.length,
                response:data
            });
             
            resp.end();
        })
        .catch((error)=> {
            resp.status(500).send(error.message);
        });
});

instance.get("/api/employees/:id",(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({
            force: false 
        })
        .then(() =>
           emp.findOne(
               {
                   where : {EmpNo:id}
               }
           )
        )
        .then((data) => {
            resp.json({ statusCode: 200, data: data })
            resp.end();
        })
        .catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.post("/api/employees", (req,resp)=> {
    
    let newEmp = {
        EmpNo: req.body.EmpNo,
        EmpName: req.body.EmpName,
        Designation: req.body.Designation,
        Salary: req.body.Salary,
        DeptNo: req.body.DeptNo
    };

    
    sequelize.sync({force:false})
    .then(()=>
    
        {
            return emp.create(newEmp);
        } 
      ).then((data)=>{
        resp.json({ statusCode: 200, data: data });
        resp.end();
      }).catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.put("/api/employees/:id", (req,resp)=> {
    
    let id = req.params.id; 
   
    sequelize.sync({force:false})
    .then(()=>
        
        emp.update({
            EmpName: req.body.EmpName,
            Designation: req.body.Designation,
            Salary: req.body.Salary,
            DeptNo: req.body.DeptNo
        }, {where:{EmpNo:id}})
      ).then((data)=>{
        resp.json({ statusCode: 200, data: data });
        resp.end();
      }).catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.delete("/api/employees/:id",(req,resp)=>{
    let id = parseInt(req.params.id);
    sequelize.sync({
            force: false 
        })
        .then(() =>
           emp.destroy({where:{EmpNo:id}})
        )
        .then((data) => {
            resp.json({ statusCode: 200, data: data })
            resp.end();
        })
        .catch((error) => resp.send({ statusCode: 500, data: error }));
});


instance.listen(9090, ()=>{
    console.log('REST API is listening on port 9090');
});