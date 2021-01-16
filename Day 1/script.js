function cal()
{

    try{

        var input = document.getElementById("input").value;
        var val = eval(input);
        clr();
        document.getElementById("input").value = val;
    }
    catch( err ){
        clr();
        document.getElementById("input").value = "Invalid";
    }
}

function clr()
{
    document.getElementById("input").value = "";
}

function append(val)
{
    document.getElementById("input").value += val;
    
}