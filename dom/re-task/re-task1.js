/*
function myFunction() {
    var table = document.createElement("TABLE");
    table.setAttribute("id", "myTable");
    document.body.appendChild(table);

    var y = document.createElement("TR");
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    document.getElementById("myTr").appendChild(z);
}

*/
var row = prompt('Кількість столбців?');
var cell = prompt('Кількість рядків?');
;(function() {
    var table = document.createElement('TABLE');
    table.setAttribute("id", "myTable");
    var tblB = document.createElement('TBODY');
    table.appendChild(tblB);
    for( var i = 0; i< row; i++) {
        var tr = document.createElement('TR');
        tr.setAttribute("id", "myTR");
          tblB.appendChild(tr);
          for( var j = 0; j < cell; j++ ) {
              var td = document.createElement('TD');
              tr.appendChild(td);
          }
    }
    document.body.appendChild(table);
}());


function asd (e) {
     var event = e || window.event;
     var target = event.CurrentTarget || event.srcElement;
     if (target.tagName == 'TD') {
         target.className = "red";
     }
 };
myTable.addEventListener('click', asd, false);
window.onload = pageLoad;
function pageLoad() {
    var startButton = document.getElementById("start");

    startButton.onclick = alertMe;
}

function alertMe() {
    setInterval(function () {
        x = document.getElementsByTagName('td');
        console.log(x);
        for(var i = 0; i < x.length; i++){
            if (x[i].className === 'red') {
                x[i].className = 'white';
            } else {
                x[i].className = 'red';
            }
        }
    }, 1000);
}


function overtaking() {
    x = document.getElementsByTagName('td');
    console.log(x);
      for(var i = 0; i < x.length; i++){
        if (x[i].className === 'red') {
            x[i].className = 'white';
        } else {
            x[i].className = 'red';
        }
    }

};