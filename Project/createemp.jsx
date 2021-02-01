import React, { useState } from 'react';
import { postEmployee } from "./actions/actions";
import { connect } from "react-redux";

const CreateEmp = (props) => {
    const [employee, update] = useState({ EmpNo: 0, EmpName: '', Designation: '', Salary: 0, DeptNo: 0 });
    

    const save = () => {
        
        let emp = {
            EmpNo: employee.EmpNo,
            EmpName: employee.EmpName,
            Designation: employee.Designation,
            Salary: employee.Salary,
            DeptNo: employee.DeptNo
        };
        console.log(emp);
       
        props.post(emp); 
        props.history.push('/listemp'); 
    }

    const clear = () => {
        update({ EmpNo: 0, EmpName: '', Designation: '', Salary: 0, DeptNo: 0 });
    }

    const back = () => {
        props.history.push('/');
    }

    
    return (
        <div className="container">
            <h2 align='center'>Enter New Employee Details</h2>
            <div className="form-group">
                <label>EmpNo</label>
                <input type="number" className="form-control"
                    name="EmpNo"
                    value={employee.EmpNo}
                    onChange={(evt) => update({ ...employee, EmpNo: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>EmpName</label>
                <input type="text" className="form-control"
                    name="EmpName"
                    value={employee.EmpName}
                    onChange={(evt) => update({ ...employee, EmpName: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>Designation</label>
                <input type="text" className="form-control"
                    name="Designation"
                    value={employee.Designation}
                    onChange={(evt) => update({ ...employee, Designation: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>Salary</label>
                <input type="number" className="form-control"
                    name="Salary"
                    value={employee.Salary}
                    onChange={(evt) => update({ ...employee, Salary: evt.target.value })} />
            </div>
            <div className="form-group">
                <label>DeptNo</label>
                <input type="number" className="form-control"
                    name="DeptNo"
                    value={employee.DeptNo}
                    onChange={(evt) => update({ ...employee, DeptNo: evt.target.value })} />
            </div>
            <input type="button" value="Clear" onClick={clear} className="btn btn-warning" />
            <input type="button" value="Save" onClick={save}
                
                className="btn btn-success" />
            <br />


            
        </div>
    );
};

const mapDispatchToProps = {
    
    post: postEmployee, 
};

export default connect(null, mapDispatchToProps)(CreateEmp);