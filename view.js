
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.


Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color

    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
    this.paintColor(ctx)
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    //TODO Manager color

    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    this.paintColor(ctx)
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Shapes.prototype.paintColor = function (ctx) {
    ctx.strokeStyle = this.getColor();
    ctx.lineWidth = this.getWidth();
}

var shapeList = document.getElementById('shapeList');

let formList = [];
let id = 0;

function updateShapeList(forme) {
    formList.push(forme);
    var sh = "<li id='" + "li-" + id +"'>" + id + " " + forme.constructor.name + " | Taille : " + forme.getWidth() + " | Color :" + forme.getColor() + "</li>" +
                "<button id='" + "btn-" + id + "' type=\"button\" class=\"btn btn-default\">\n" +
                "\t<span class=\"glyphicon glyphicon-remove-sign\"></span>\n" +
                "</button>\n";
    shapeList.innerHTML += sh;
    id++;
}

