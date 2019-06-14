
var myCircle; 

var Circle = function () {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.width = (Math.floor(Math.random() * 10) + 1);
    this.radius = (Math.floor(Math.random() * 300) + 25);
    this.r = Math.floor(Math.random() * 255);
    this.g = Math.floor(Math.random() * 255);
    this.b = Math.floor(Math.random() * 255);
    this.draw = function() {
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = this.width;
        ctx.strokeStyle = "rgb(" + this.r + "," + this.g + "," + this.b + ")";
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.stroke();
    };
};

setInterval(function() {
    myCircle = new Circle();
    myCircle.draw();
}, 100);