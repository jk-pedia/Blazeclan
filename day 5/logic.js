function getData()
{
    let xhr = new XMLHttpRequest();

    xhr.onload = function()
    {
        if(xhr.status == 200)
        {
            console.log(xhr.response);
        }

        else
        {
            console.log("Error occured whie sending GET request");
        }
    };

    xhr.onerror = function()
    {
        console.log("Some error occured");
    };

    xhr.open('GET','https://apiapptrainingnewapp.azurewebsites.net/api/Products');
    xhr.send();
}

function deleteData()
{
    let xhr = new XMLHttpRequest();

    xhr.onload = function()
    {
        if(xhr.status == 200)
        {
            console.log("Deleted successfully");
        }

        else
        {
            console.log("Deleted unsuccessful");   
        }
    };

    xhr.onerror = function()
    {
        console.log("Some error occured"); 
    };

    xhr.open('DELETE','https://apiapptrainingnewapp.azurewebsites.net/api/Products/54');
    xhr.send();

}

function postData()
{
    let xhr = new XMLHttpRequest();

    xhr.onload = function()
    {
        if(xhr.status == 201)
        {
            console.log("Added successfully");
        }

        else
        {
            console.log("Add unsuccessful");   
        }
    };

    xhr.onerror = function()
    {
        console.log("Some error occured"); 
    };

    var data = {
        BasePrice: 100,
        CategoryName: 'Fruit',
        Description: 'it keeps dr away',
        Manufacturer: 'Jnk',
        ProductId: '1008',
        ProductName: 'Apple',
    };


    const validateData = {
        set: function(target, property, value)
            {
                console.log(target.property);
            }
    };

    const ProxyData = new Proxy(data, validateData);
    
    xhr.open('POST','https://apiapptrainingnewapp.azurewebsites.net/api/Products');

    xhr.setRequestHeader("Content-Type","application/json");

    xhr.send(JSON.stringify(ProxyData));

}

function putData()
{
    let xhr = new XMLHttpRequest();

    xhr.onload = function()
    {
        if(xhr.status == 200)
        {
            console.log("Updated successfully");
        }

        else
        {
            console.log("Update unsuccessful");   
        }
    };

    xhr.onerror = function()
    {
        console.log("Some error occured"); 
    };

    xhr.open('PUT','https://apiapptrainingnewapp.azurewebsites.net/api/Products/229');

    var data = {
        BasePrice: 4500000,
        CategoryName: 'Car',
        Description: 'Vehicle',
        Manufacturer: 'Skoda',
        ProductId: '1007',
        ProductName: 'Octavia',
        ProductRowId: 12,
    };

    xhr.setRequestHeader("Content-Type","application/json");

    xhr.send(JSON.stringify(data));

}