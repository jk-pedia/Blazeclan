import { Httpservice} from "./../httpserv";

import { takeLatest, call, put, all } from "redux-saga/effects";
let serv = new Httpservice();

function getEmployee(){
    
    const response = serv.getEmpData().then((result)=> result.data);
    console.log(`In getEmployee ${response}`);
    
    return Promise.resolve(response); 
}

function postEmployee(emp){
   
    const response = serv.postEmpData(emp).then((result)=>result.data);
    return Promise.resolve(response);
}

function putEmployee(emp){
    console.log(`in putEmployee`);
    const response = serv.putEmpData(emp).then((result)=>result.data);
    return Promise.resolve(response);
}

function deleteEmployee(id){
    const response = serv.deleteEmpData(id).then((result)=>result.data);
    return Promise.resolve(response);
}


function* getEmployeeGenerator(){
    console.log('Processing the GET_EMPLOYEE and wating for Reponse');
    const response = yield call(getEmployee);
    console.log(`After the yield call response \n ${response}`);
    yield put({
        type:'GET_EMPLOYEE_SUCCESS',
        employee: response.response || {error: 'ERROR_OCCURED'}
    });
}


function* listenToGetEmployeeDispatchedAction(){
    console.log('Listening to GET_EMPLOYEE Action');
    yield takeLatest('GET_EMPLOYEE', getEmployeeGenerator);
} 



function* postEmployeeSuccess(action){

    const postedData = action.payload;
    console.log(`Data Received from UI for posting = ${JSON.stringify(postedData)}`);

    const response = yield call(postEmployee, postedData);

     console.log(response);
     yield put({
        type: 'POST_EMPLOYEE_SUCCESS',
        employee: response.data
    });

}



function* listenToPostEmployeeDispatchAction(){
    console.log('in listenToPostEmployeeDispatchAction');
    yield takeLatest('POST_EMPLOYEE', postEmployeeSuccess);
   
}

function* putEmployeeSuccess(action){
    const putdata = action.payload;
    console.log('in putEmployeeSuccess generator')
    console.log('Data to POST: ', JSON.stringify(putdata));
    const response = yield call(putEmployee, putdata);
    yield put({
        type: 'PUT_EMPLOYEE_SUCCESS',
        employee: response
    });
}

function* listenToPutEmployeeDispatchAction(){
    console.log('in listenToPutEmployeeDispatchAction generator')
    yield takeLatest('PUT_EMPLOYEE', putEmployeeSuccess);
}

function* deleteEmployeeSuccess(action){
    const delData = action.payload;
    console.log('Data to Delete: ', JSON.stringify(delData));
    const response = yield call(deleteEmployee, delData);
    yield put({
        type: 'DELETE_EMPLOYEE_SUCCESS',
        employee: response
    });
}

function* listenToDeleteEmployeeDispatchAction(){
    yield takeLatest('DELETE_EMPLOYEE', deleteEmployeeSuccess);
}


export default function* rootSaga(){
    console.log('1. Root Saga is initialized');
    yield all([listenToGetEmployeeDispatchedAction(), listenToPostEmployeeDispatchAction(),
        listenToPutEmployeeDispatchAction(), listenToDeleteEmployeeDispatchAction()]);
}