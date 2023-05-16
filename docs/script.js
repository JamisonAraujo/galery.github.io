var clkObj;

function theFunction(e){ 
	clkObj = e.target;

	if (clkObj.className == "imagem"){
		imgSelect();
	}
}

var modal = document.getElementById("MyModal");

// seleciona e insere imagem no modal
var modalImg = document.getElementById("imgModal");

//caso haja alt na imagem, pode ser usada como descrição
// var captionText = document.getElementById("caption");

function imgSelect(){
	modal.style.display = "block";
	modalImg.src = clkObj.src;
	//   captionText.innerHTML = this.alt;
}

// "x" para fechar o modal
var span = document.getElementsByClassName("close")[0];

// fechar modal ao clicar no "x"
span.onclick = function() {
  modal.style.display = "none";
}



