var Dep = new Map()
var Emp = new Map()

    

class employee{
    constructor(Dep,Emp){
         this.Dep = Dep
            this.Dep.set(1,{DeptName:"Dcc", DeptLocation:'Pune', DeptCapacity:50});
            this.Dep.set(2,{DeptName:"DS", DeptLocation:'Pune', DeptCapacity:50});
            this.Dep.set(3,{DeptName:"DAI", DeptLocation:'Pune', DeptCapacity:50});
     
        
        this.Emp=Emp
    
                }
    
    Validate(EmpNo, EmpName, DeptNo, Designation, Salary)
        { 
            if(EmpNo <0)
                {
                    console.log('Emp No should be +ve')
                    return 
                }
            
            if(EmpName[0] == EmpName[0].toLowerCase())
                {
                    console.log('Emp Name should start with Capital')
                    return  
                }   
            //if(get.DeptNo){}  
            
            
            
            if(Salary <0)
                {
                    console.log('Salary should be +ve')
                    return 
                }
            
        this.Emp.set(EmpNo, {EmpName:EmpName,EmpDept: DeptNo, Designation : Designation, EmpSalary : Salary})
        }

    UpdateEmployee(key,data){
        
        this.Emp.forEach((v,i)=>{
            if (i==key){
                
                Object.keys(data).forEach((v2,i2)=>{
                    
                    this.Emp.get(i)[v2] = data[v2]
                })
            }
        })
        

    }

    deletedata(key){
        this.Emp.delete(key)
    }

    showalldata(){
        console.log(this.Emp)
    }

    getAllEmployees(condition,value){
        
        if (condition == 'DeptName' || condition == 'DeptLocation'){
            this.Emp.forEach((v,i)=>{
                
                let x=this.Dep.get(v['EmpDept']);
                
                if (x[condition]==value){
                    console.log(v)
                }
            })
        }
        else if (condition == 'Designation' || condition == 'EmpName'){
            this.Emp.forEach((v,i)=>{
                if (v[condition]==value){
                    console.log(v)  
                }
            })
        }
        else if (condition = 'DName_Ddesignation'){
            
            this.Emp.forEach((v,i)=>{
                if (this.Dep.get(v['DeptNo'])['DeptName']==value['dept'] && v['EmpName'] == value['Name']){
                    console.log(v)
                }
            })

        }
        
    }



}


e1 = new employee(Dep,Emp)
e1.Validate(1,'Ramesh',1,'Manager',1000)
e1.Validate(2,'Suresh',1,'Sales',10000)
e1.deletedata(2)
//e1.showalldata()
e1.Validate(3,'Hitesh',2,'Sales',1000)
e1.showalldata()
//e1.getAllEmployees('DeptName','DCC')
//e1.getAllEmployees('EmpDesignation','Sales')
//e1.getAllEmployees('EmpName','Sales')
 //e1.getAllEmployees('DeptLocation','Pune')
