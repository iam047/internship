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
            for(let i = 0; i < x.length; i++){
                if (x[i].className === 'mine') {
                    x[i].className = 'bomb';
                }
            }
            alert('You lose o_0');
            confirm('You wont restart game?') ? reload() : false;
        }
        if(target.className !== 'lock') {
           target.className = 'open';
            // const myTable = document.getElementById('myTable');
            // const cell = myTable.children[0].children[x].children[y];
            // console.log(myTable);
            // console.log(cell);
            // let {x} = target;
         // console.log(x);
         // // for(let i =0; i < row; i++){
         // //     x.className = 'open'
                    //RecursOpen(x)
         // // }
        }



    }
}

function reload() {
            location.reload();
}

// function RecursOpen(x) {
//         if (x.className === 'close') {
//             x.className = 'open';
//             return x +=x;
//            RecursOpen(x);
//             }
// };


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
