
var Board;

var PixelBoard = function() {
    this.SquareArray = [];
    this.SquareRow = [];
    this.GenerateSquares = function(Height, Length) {
        for (var i = 0; i < Height; i++) {
            this.SquareRow = [];
            for (var j = 0; j < Length; j++) {
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
                 ctx.fillRect(x, y, 25, 25);
                 ctx.stroke();
                 x += 25;
            }
            y += 25;
            x = 0;
        }
    };
    this.Color = function() {
        var r, g, b;
        r = Math.floor(Math.random() * 255);
        g = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b +")";
    };
};

Board = new PixelBoard();
Board.GenerateSquares(Math.ceil(canvas.height / 25), Math.ceil(canvas.width / 25));

setInterval(function() {
    Board.GenerateValues();
    Board.Display();
}, 0);
