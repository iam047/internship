var row = prompt('Кількість столбців?');
var cell = prompt('Кількість рядків?');

 var newTable = document.createElement("table");
      for(var y = 0; y < row ; y++) {
          var newRow = newTable.insertRow(y);
          for (var x = 0; x < cell; x++) {
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



var onPressClickMe = function() {
    console.log('fadsfads');
    Array.prototype.forEach.call(newTable.children[0].children, function (tr) {
        console.log('fadsfads', tr);
        Array.prototype.forEach.call(tr.children, function(td) {
            if (td.className === 'red') {
                td.className = 'white';
            } else {
                td.className = 'red';
            }
        });
    });
};