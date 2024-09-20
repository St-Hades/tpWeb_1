
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'

  this.xInit = 0
  this.yInit = 0
  this.xFinal = 0
  this.yFinal = 0
  this.mousePres = false

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.mousePressed = function (evt) {
    if(!this.mousePres) {
      this.xInit = getMousePosition(canvas, evt).x
      this.yInit = getMousePosition(canvas, evt).y
      this.mousePres = true;
      interactor.onInteractionStart(this);
      console.log(this.xInit,this.yInit)
    }
  }

  DnD.prototype.mouseMoove = function (evt) {
    if(this.mousePres) {
      this.xFinal = getMousePosition(canvas,evt).x
      this.yFinal = getMousePosition(canvas,evt).y
      interactor.onInteractionUpdate(this);
      console.log(this.xFinal,this.yFinal)
    }
  }

  DnD.prototype.mouseRelease = function (evt) {
    if(this.mousePres) {
      this.xFinal = getMousePosition(canvas,evt).x
      this.yFinal = getMousePosition(canvas,evt).y
      this.mousePres = false;
      interactor.onInteractionEnd(this)
      console.log(this.xFinal,this.yFinal)
    }
  }
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mousePressed , false)
  canvas.addEventListener('mousemove', this.mouseMoove , false)
  canvas.addEventListener('mouseup', this.mouseRelease , false)
};




// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



