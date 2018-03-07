import {Table} from './table';

const row = +prompt('Кількість рядків', 10);
const cell = +prompt('Кількість рядків', 10);
const mine = +prompt('Кількість рядків', 15);

const d = new Table(row,cell,mine).generationTable();
function addclass (e) {
    const event = e || window.event;
    const target = event.CurrentTarget || event.srcElement;
    if (target.tagName === 'TD') {
        if(target.className === 'mine') {
            let x = document.getElementsByTagName('td');
            for(let i = 0; i < x.length ; i++){
                if (x[i].className === 'mine') {
                    x[i].className = 'bomb';
                }
            }
            alert('You lose o_0');
            confirm('You wont restart game?') ? reload() : alert('quit the game');
        }
    }
}
myTable.addEventListener('click', addclass);

function reload() {
    location.reload();
}


function open (e) {
    const event = e || window.event;
    const target = event.CurrentTarget || event.srcElement;
    if (target.tagName === 'TD') {
        const indexOf = Array.prototype.indexOf;
        const y = indexOf.call(myTable.children[0].children, e.target.parentNode);
        const x = indexOf.call(e.target.parentNode.children, e.target);
        if (target.className !== 'lock') {
            if(target.className !== 'open') {
                RecurseOpen(x, y);
                let td = document.getElementsByClassName('close');
                if (td.length === 0) {
                    alert('you win');
                    confirm('You wont restart game?') ? reload() : alert('quit the game');

                }
            }
        }

    }
}
myTable.addEventListener('click', open);

function openCell(x, y) {
    const myTable = document.getElementById('myTable');
    const cell = myTable.children[0].children[y].children[x];
        if(cell.className !=='mine') {
            if(cell.className !== 'lock') {
                cell.className = 'open'
            }
        }


}


function RecurseOpen (x, y) {
    const myTable = document.getElementById('myTable');
    const cellValue = myTable.children[0].children[y].children[x].innerHTML;
    const cellClass = myTable.children[0].children[y].children[x].className;
    openCell(x,y);
    if (cellValue !== '') {
        return false;
    }




    if(cellClass === 'open'){
        return false;
    }

        const x_begin = x > 0 ? x - 1 : x;
        const y_begin = y > 0 ? y - 1 : y;
        for (let i = x_begin; i <= x + 1 && i < row; i++) {
            for (let j = y_begin; j <= y + 1 && j < cell; j++) {
                RecurseOpen(i,j);
                }
            }

};


function add (e) {
    const event = e || window.event;
    const target = event.CurrentTarget || event.srcElement;
    if (target.tagName === 'TD') {
        if(target.className === 'open'){
            return false
        } else {
            if(target.className !== 'lock' && target.className !== 'close lock') {
                target.className = 'lock';
                e.preventDefault();
            }else {
                target.classList.remove('lock');
                e.preventDefault();
                target.classList.add('close');
            }
        }
    }
}
myTable.addEventListener('contextmenu', add);
