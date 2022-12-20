var fruit = [
	{name:"Strawberry", quantity:15, color:"red"},
	{name:"Peach", quantity:10, color:"orange"},
    {name:"Banana", quantity:25, color:"yellow"},
    {name:"Pear", quantity:10, color:"green"},
    {name:"Grapes", quantity:20, color:"purple"}
];

var canvas = document.getElementById('myCanvas');

var ctx = canvas.getContext('2d');

var width= 50; // bar width
var X = 100; // first bar position
var base = 500;

// Filling the Rectangle based on the input values
for (var i =0; i<fruit.length; i++) {
    ctx.fillStyle = fruit[i].color;
    var h = fruit[i].quantity * 10;
    ctx.fillRect(X,canvas.height - h,width,h);
    X +=  width+15;

    ctx.fillStyle = '#000';
    ctx.fillText(fruit[i].name, X-50,canvas.height - h -10);
    ctx.fillText(fruit[i].quantity, X-50,canvas.height - h + 20);

}