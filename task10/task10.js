function mult()
{
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = Math.ceil(a * b);
}

function dil()
{
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    document.getElementById("result").innerHTML = Math.ceil(a / b);
}