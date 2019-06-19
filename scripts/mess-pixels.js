
var Board;

var PixelBoard = function() {
    this.SquareArray = [];
    this.SquareRow = [];
    this.GenerateSquares = function(Count) {
        if (Count > 25) {
            Count = 25;
        }
        for (var i = 0; i < Count; i++) {
            this.SquareRow = [];
            for (var j = 0; j < Count; j++) {
                this.SquareRow.push(0);
            }
            this.SquareArray.push(this.SquareRow);
        }
    };
    this.Height = this.SquareArray.length;
    this.Width = this.SquareArray.length;
    this.GenerateValues = function () {
        for (i = 0; i < this.SquareArray.length; i++) {
            for (j = 0; j < this.SquareArray[i].length; j++) {
                this.SquareArray[i][j] = Math.floor(Math.random() * 2);
            }
        }
    };
    this.Display = function() {
        var ctx = canvas.getContext("2d");
        var x = 0, y = 0;
        for(var i = 0; i < this.SquareArray.length; i++) {
            for (var j = 0; j < this.SquareArray[i].length; j++) {
                 if (this.SquareArray[i][j] == 1) {
                    ctx.fillStyle = this.Color();
                 } else {
                     ctx.fillStyle = "white";
                 }
                 ctx.lineWidth = 5;
                 ctx.fillRect(x, y, 25, 25);
                 ctx.stroke();
                 x += 35;
            }
            y += 35;
                x = 0;
        }
    };
    this.Color = function() {
        var r, g, b;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b +")";
    }
};

Board = new PixelBoard();
Board.GenerateSquares(25);

setInterval(function() {
    Board.GenerateValues();
    Board.Display();
}, 100);
