import {Table} from './table';

const row = +prompt('Кількість рядків', 10);
const cell = +prompt('Кількість рядків', 10);
const mine = +prompt('Кількість рядків', 7);

const d = new Table(row,cell,mine).generationTable();
function addclass (e) {
    const event = e || window.event;
    const target = event.CurrentTarget || event.srcElement;
    if (target.tagName === 'TD') {
        if(target.className === 'mine') {
            let x = document.getElementsByTagName('td');
            for(let i = 0; i < x.length; i++){
                if (x[i].className === 'mine') {
                    x[i].className = 'bomb';
                }
            }
            alert('You lose o_0');
            confirm('You wont restart game?') ? reload() : false;
        }
        target.className !== 'lock' ? target.className = 'open': false;


    }
}

    function reload() {
            location.reload();
    }


myTable.addEventListener('click', addclass);
function add (e) {
    const event = e || window.event;
    const target = event.CurrentTarget || event.srcElement;
    if (target.tagName === 'TD') {
        if(target.className === 'open'){
            return false
        }else {
            target.className = 'lock';
            e.preventDefault();
        }
    }
}
myTable.addEventListener('contextmenu', add);
