
var editingMode = { rect: 0, line: 1 };



function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	this.setCurrEditingMode = function (mode) {
		if(mode === editingMode.rect) {
			this.currEditingMode = editingMode.rect;
		} else {
			this.currEditingMode = editingMode.line;
		}
	}

	this.setCurrLineWidth = function (width) {
		this.currLineWidth = width;
	}

	this.setCurrColour = function (colour) {
		this.currColour = colour;
	}

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (positions) {
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(positions.xInit, positions.yInit, 0, 0, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Line(positions.xInit, positions.yInit, positions.xInit, positions.yInit, this.currLineWidth, this.currColour);
		}
	}

	this.onInteractionUpdate = function (positions) {
		if (this.currEditingMode === editingMode.rect) {
			this.currentShape.largeur = positions.xFinal - positions.xInit;
			this.currentShape.hauteur = positions.yFinal - positions.yInit;
		} else {
			this.currentShape.xD = positions.xFinal;
			this.currentShape.yD = positions.yFinal;
		}
		drawing.paint(ctx)
		this.currentShape.paint(ctx)
	}

	this.onInteractionEnd = function (positions) {
		drawing.addShapes(this.currentShape);
		drawing.paint(ctx);
		updateShapeList(this.currentShape);
	}

};


