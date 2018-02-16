var row = prompt('Кількість столбців?');
var cell = prompt('Кількість рядків?');
;(function() {
    var table = document.createElement('TABLE');
    table.setAttribute("id", "myTable");
    var tbody = document.createElement('TBODY');
    table.appendChild(tbody);
    for( var i = 0; i < row; i++) {
        var tr = document.createElement('TR');
        tr.setAttribute("id", "myTR");
          tbody.appendChild(tr);
          for( var j = 0; j < cell; j++ ) {
              var td = document.createElement('TD');
              tr.appendChild(td);
          }
    }
    document.body.appendChild(table);
}());

function addclass (e) {
     var event = e || window.event;
     var target = event.CurrentTarget || event.srcElement;
     if (target.tagName == 'TD') {
         target.className = "red";
     }
 };
myTable.addEventListener('click', addclass, false);

window.onload = pageLoad;
function pageLoad() {
    var startButton = document.getElementById("start");
    startButton.onclick = alertMe;
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
}

