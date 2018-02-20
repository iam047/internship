function Point() {
    this.is_mine = false;
    this.mine_around = 0;
    this.is_open = false;
}
var page = {
    init: function(){
        this.game_inerface.init();
    },
    game_inerface: {
        table: null,
        init: function() {
            game.start();
            this.div = document.querySelector('.field');
            this.draw_field();
            var self = this;
            this.div.addEventListener('click', function (e) {
                x = e.target.cellIndex;
                y = e.target.parentNode.rowIndex;
                if(game.field[x][y].is_mine) {
                    var b = document.getElementsByTagName('td');
                    for(var i = 0; i < b.length; i++) {
                        if (b[i].className === 'mine') {
                            b[i].className = 'bomb';
                        } else {
                            b[i].className = 'open';
                        }
                    }
                }
                if(e.target.matches('td') && !e.target.matches('lock')) self.open(e);

            });
            this.div.addEventListener('contextmenu', function (e) {
                if(e.target.matches('td'))  self.lock(e);

            });
        },
        draw_field: function() {
            this.div.innerHTML="";
            var table = document.createElement('TABLE');
            this.table = table;
            for(var i = 0; i < game.height; i++){
                var tr = document.createElement('TR');
                for(j = 0; j < game.width; j++){
                    var td = document.createElement('TD');
                       //td.innerText = game.field[j][i].mine_around;
                       //if(game.field[j][i].is_mine) td.style.background = 'black';
                       if(game.field[j][i].is_mine) td.className = 'mine';
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            this.div.appendChild(table);
        },
        open: function(e) {
            x = e.target.cellIndex;
            y = e.target.parentNode.rowIndex;
            this.recurse_open(x,y);
        },
        recurse_open: function(x,y) {
            var td = this.table.rows[y].children[x];
            if(game.field[x][y].is_open) return;
            if(game.field[x][y].is_mine){
                alert('game over');
                return;
            }else {
                if (!(td.className === 'lock')) {
                    td.innerHTML = game.field[x][y].mine_around;
                    game.field[x][y].is_open = true;
                    if (game.field[x][y].mine_around === 0) {
                        var x_start = x > 0 ? x - 1 : x;
                        var y_start = y > 0 ? y - 1 : y;
                        for (var i = x_start; i <= x + 1 && i < game.width; i++) {
                            for (var j = y_start; j <= y + 1 && j < game.height; j++) {
                                this.recurse_open(i, j)
                            }
                        }
                    }
                }
                if (!(td.className === 'lock')) {
                    td.classList.add('open');
                    game.open_count++;
                    if (game.width * game.height - game.mine_count === game.open_count) {
                        alert("you win");
                    }
                }
            }
        },
        lock: function(e) {
            x = e.target.cellIndex;
            y = e.target.parentNode.rowIndex;
            if(game.field[x][y].is_open) return;
            e.target.classList.toggle('lock');
            e.preventDefault();
        }
    }
};
function restart() {
    page.init();
};

window.onload = function() {
   page.init();
};
