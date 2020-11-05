function c2f()
{
    var tempC=document.getElementById("tempc").value;
    var tempF=(tempC *(9/5))+32;
    document.getElementById ("tempf").value=Math.round(tempF);
}

function f2c()
{
    var tempF =document.getElementById ("tempf").value ;
    var tempC =(tempF -32)*(5/9);
    document.getElementById("tempc").value =Math.round (tempC );
}