import React,{ useState, useEffect } from 'react';
import { Httpservice } from "./../services/httpservice";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteEmployee } from './actions/actions';

const ListComp = (props) => {
    const [employees, updateEmployees] = useState([]);
    let serv = new Httpservice();
    

    useEffect(() => {
        serv.getEmpData().then((resp) => {
            updateEmployees(resp.data.response)
            
        }).catch((e) => {
            console.log(`Error occured at useEffect in Listemp comp: ${e.message}`)
        });
    }, []);

    const deleteEmpRecord = (id) => {
        props.delE(id);
        window.location.reload(); 
        
    }

    
    if (employees.length === 0) {
        return (<div>No records</div>);
    } else {
        let headers = Object.keys(employees[0]);
        return (
            <div className="container">
                <h2 align='center'>Employee List</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            
                            { 
                            
                            headers.map((col,id) => (
                                <th key={id}>{col}</th>
                            ))
                            }
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((v, i) => (
                                <tr key={i}>
                                    
                                    { 
                                   
                                        headers.map((col,id) => (
                                            <td key={id}>{v[col]}</td> 
                                        ))
                                    }
                                    <td>
                                        <button className="btn btn-success">
                                            <Link to={`/editemp/${v.EmpNo}`}>Edit</Link>
                                        </button>
                                    </td>
                                    <td>
                                        <input type="button" value="Delete" className="btn btn-warning"
                                            onClick={() => { deleteEmpRecord(v.EmpNo) }} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }
};

const mapDispatchToProps = {
    
    delE: deleteEmployee 
};

export default connect(null, mapDispatchToProps)(ListComp);