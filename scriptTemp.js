function cel(){
    temp = document.getElementById("temp").value
    result = 5/9 * (temp - 32)
    document.getElementById("result").innerHTML = result;
    document.getElementById("date").innerHTML = Date();
}

function feh(){
    temp = document.getElementById("temp").value
    result = 9/5 * temp + 32;
    document.getElementById("result").innerHTML = result;
    document.getElementById("date").innerHTML = Date();
}

