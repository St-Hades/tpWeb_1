var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var color = document.getElementById('colour');
var width = document.getElementById('spinnerWidth');
var rectangle = document.getElementById('butRect');
var line = document.getElementById('butLine');

canvas.width=800
canvas.height=600

// Code temporaire pour tester le DnD
//new DnD(canvas);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
/////

// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//rec.paint(ctx);
//var ligne = new Line(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
var drawing = new Drawing();
var pencil = new Pencil(ctx, drawing, canvas);
drawing.paint(ctx, canvas);

color.addEventListener('input', function() {
    pencil.setCurrColour(color.value);
});

width.addEventListener('input', function() {
    pencil.setCurrLineWidth(width.value);
});

rectangle.addEventListener('click', function() {
    pencil.setCurrEditingMode(editingMode.rect);
});

line.addEventListener('click', function() {
    pencil.setCurrEditingMode(editingMode.line);
});


