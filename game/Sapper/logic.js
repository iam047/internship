var game = {
    width: 10,
    height: 10,
    mine_count: 10,
    open_count: 0,
    field: [],
    fill_filed: function () {
        this.filed = [];
        for(var i = 0; i < this.width; i++) {
            var tmp = [];
            for(var j = 0; j < this.height; j++) {
                tmp.push(new Point());
            }
            this.field.push(tmp);
        }
        for(var k = 0; k < this.mine_count;){
            var x = parseInt(Math.random()* this.width - 0.0001);
            var y = parseInt(Math.random()* this.height - 0.0001);
            if(!(this.field[x][y].is_mine)){
                this.field[x][y].is_mine = true;
                k++;
            }
        }
    },
    mine_around_counter: function(x, y){
        var x_start = x > 0 ? x - 1: x;
        var y_start = y > 0 ? y - 1: y;
        var x_end = x < this.width - 1 ? x + 1: x;
        var y_end = y < this.width - 1 ? y + 1: y;
        var count = 0;
        for (var i = x_start; i <= x_end; i++){
            for(var j = y_start; j <= y_end; j++){
                if(this.field[i][j].is_mine && !(x === i && y === j)) count++;
            }
        }
        this.field[x][y].mine_around = count;
    },
    start_mine_counter: function(){
        for(var i = 0; i < this.width; i++) {
            for(var j = 0; j < this.height; j++) {
                this.mine_around_counter(i,j);
            }
        }
    },
    start: function(){
        this.open_count = 0;
        this.fill_filed();
        this.start_mine_counter();
    }

};