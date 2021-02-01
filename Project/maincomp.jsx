import React from 'react';
import ListComp from './listcomp';
import EditComp from './editcomp';
import CreateEmp from './createemp';

import { Route, Link, Switch, Redirect } from "react-router-dom";

const MainComp = () => {
    return (
        <div className="container">
            <h2 >The CRUD App</h2>
            <table className="table table-bordered table-striped">
                <tbody>
                    <tr>
                        <td >
                            <Link to="/listemp">List Employees</Link>
                        </td>
                        <td align ='center'>
                            <Link to="/createemp">Create Employee</Link>
                        </td>
                    </tr>
                </tbody>
            </table>

            
            <Switch>
                <Route exact path="/listemp" component={ListComp}></Route>
                <Route exact path="/createemp" component={CreateEmp}></Route>
                <Route exact path="/editemp/:id" component={EditComp}></Route>
                <Redirect to="/listemp"></Redirect>
            </Switch>
        </div>
    );
}

export default MainComp;