export class Table {
    constructor(row, cell, mine) {
      this._row = row;
      this._cell = cell;
      this._minecoount = mine;
      this.mineСoordinates = [];
    }

    generationTable() {
        const table = document.createElement('TABLE');
        table.setAttribute("id", "myTable");
        this.mineСoordinates = Array.from(new Array(this._minecoount), () => ({
              x: Math.floor((Math.random() * this._row) + 0),
              y: Math.floor((Math.random() * this._cell ) + 0)
          }));
          const tbody = document.createElement('TBODY');
        table.appendChild(tbody);
        for( let i = 0; i < this._row; i++) {
            const tr = document.createElement('TR');
            tr.setAttribute("id", "myTR");
            tbody.appendChild(tr);
            for( let j = 0; j < this._cell; j++ ) {
                const td = document.createElement('TD');

                for(let k = 0; k < this.mineСoordinates.length; k++){
                    if (i === this.mineСoordinates[k].x && j === this.mineСoordinates[k].y) {
                        td.className = 'mine';
                    }
                    if(td.className !== 'mine'){
                        td.innerHTML = +0;
                    }
                }
                tr.appendChild(td);
                // debugger;
            }
        }
        document.body.appendChild(table);
          this._setMineNumberToCell();
    }

    _getNerestMinest(x,y) {
        const arr = [{x: x - 1, y:y - 1 }, {x:x - 1 , y:y }, {x:x - 1, y: y + 1},
            {x:x, y:y + 1}, {x:x + 1, y:y + 1}, { x:x + 1,y:y },
            { x:x + 1, y: y - 1}, {x:x, y:y - 1}];
        return arr;
    };

    _setMineNumberToCell() {
        this.mineСoordinates.forEach(({x, y}) => {
            const cells = this._getNerestMinest(x, y);
            cells.forEach(({x,y}) => {
                if(x >=0 && x < this._row &&  y>= 0 && y < this._cell) {
                    const myTable = document.getElementById('myTable');
                    const cell = myTable.children[0].children[x].children[y].className;
                    const isMine = cell.includes('mine');
                    const cellValue = myTable.children[0].children[x].children[y].innerHTML = 1;
                    if (x >= 0 && x < this._row && y >= 0 && y < this._cell && !isMine) {
                        myTable.children[0].children[x].children[y].innerHTML = cellValue  + 1  ;
                        myTable.children[0].children[x].children[y].className = 'around_mine';

                    }
                }
            });

        });
    }



}

