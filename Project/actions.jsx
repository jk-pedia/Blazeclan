export const getEmployee=()=>{
    return {
        type: 'GET_EMPLOYEE'
    };
};

export const postEmployee = (employee) => {
    return {
        type: 'POST_EMPLOYEE', 
        payload: employee 
    };
};


export const putEmployee=(employee)=>{
    return{
        type: 'PUT_EMPLOYEE',
        payload: employee
    };
};


export const deleteEmployee=(id)=>{
    return{
        type: 'DELETE_EMPLOYEE',
        payload: id
    };
    
};