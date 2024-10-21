
// Implémenter ici les 4 classes du modèle.
function Drawing() {

    this.shapes = []

    this.getForms = function() {
        return this.shapes;
    }

    this.addShapes = function (toAdd) {
        this.shapes.push(toAdd);
    }

    this.removeShapes = function (toRemove) {
        this.shapes.splice(this.shapes.indexOf(toRemove), 1);
    }

    this.paint = function(ctx) {
        console.log(this.shapes);
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.getForms().forEach(function (eltDuTableau) {
            // now fill the canvas
            eltDuTableau.paint(ctx);
        });
    }
}

function Shapes(color,width) {

    this.color = color;
    this.width = width;

    this.getColor = function() {
        return this.color;
    }

    this.getWidth = function() {
        return this.width;
    }

    this.paintColor = function(ctx) {
        ctx.strokeStyle = this.getColor();
        ctx.lineWidth = this.getWidth();
    }
}

function Rectangle(xG,yG,l,h,width,color) {

    this.xG = xG
    this.yG = yG
    this.largeur = l
    this.hauteur = h
    Shapes.call(this,color,width)

    this.getInitX = function() {
        return this.xG;
    }

    this.getInitY = function() {
        return this.yG;
    }

    this.getFinalX = function() {
        return (this.xG + this.largeur);
    }

    this.getFinalY = function() {
        return (this.yG + this.hauteur);
    }

    this.paint = function (ctx) {
        ctx.beginPath();
        ctx.rect(this.xG, this.yG, (this.largeur), (this.hauteur));
        this.paintColor(ctx)
        ctx.stroke();
    }

}

function Line(xG,yG,xD,yD,width,color) {

    this.xG = xG
    this.yG = yG
    this.xD = xD
    this.yD = yD
    Shapes.call(this,color,width)

    this.getInitX = function() {
        return this.xG;
    }

    this.getInitY = function() {
        return this.yG;
    }

    this.getFinalX = function() {
        return this.xD ;
    }

    this.getFinalY = function() {
        return this.yD;
    }

    this.paint = function(ctx) {
        ctx.beginPath();
        ctx.moveTo(this.xG, this.yG);
        ctx.lineTo(this.xD, this.yD);
        this.paintColor(ctx)
        ctx.stroke();
    }
}

// N'oubliez pas l'héritage !
