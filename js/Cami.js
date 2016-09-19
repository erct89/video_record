//Inicializar la libreria.
Cami.init = function(errorCallBack){
	let um = null //UserMedia.
	let error = (typeof(errorCallBack)==='function')?errorCallBack:Cami.noob;
	if(navigator){
		if(navigator.mediaDevices){
			um = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.mozGetUserMedia
		}
	}else{
		error('Su navegador no soporta el api mediaDevices. Use Chrome o Firefox.');
	}

	return um;
}

Cami.noob = function(){};

//Constructor de la libreria Cami.js
function Cami(constraintsObj, errorCallBack){
	let errorCB = (typeof(errorCallBack)==='function')?errorCallBack:Cami.noob;
	let userMedia = Cami.init();
	let constraintsParam = constraintsObj;
	let mediaStream = null;
	let mediaRecorder = null;
	let recordsObjects = [];
	let chuncks = [];
	let count = 0;

	//Retorna el objeto de restricciones.
	this.constraints = function(){
		return constraintsParam;
	}


	this.isCompatible = function(nav){

	}
}
