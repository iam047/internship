var row = prompt('Кількість столбців?');
var cell = prompt('Кількість рядків?');

 var newTable = document.createElement("table");
      for(var y = 0; y <= row -1; y++) {
          var newRow = newTable.insertRow(y);
          for (var x = 0; x <= cell -1; x++) {
              var newCell = newRow.insertCell(x);
               newCell.width = 28;
               newCell.height = 28;
               newCell.className = 'white'

          }
      }
  document.body.appendChild(newTable);

function asd (e) {
    var event = e || window.event;
    var target = event.CurrentTarget || event.srcElement;

    if (target.tagName == 'TD') {
        target.className = "red";
    }
};

newTable.addEventListener('click', asd, false);



//var r = document.getElementsByClassName("red");
//var w = document.getElementsByClassName("white");
//console.log(w);
//console.log(r);
/*var r = document.getElementsByClassName("red");
var w = document.getElementsByClassName("white");
console.log(w);
if(r === r) {
    for (var j = 0; j <= r.length ; j++) {
        r[j].className = 'white';
    }
}
*/