var clkObj;
function theFunction(e){ 
	// alert(e.target.className);
	clkObj = e.target;

	if (clkObj.className == "imagem"){
		imgSelect();
	}
}

// Get the modal
var modal = document.getElementById("MyModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("imgModal");
// var captionText = document.getElementById("caption");
function imgSelect(){
	// console.log(this.src)
	modal.style.display = "block";
	modalImg.src = clkObj.src
	//   captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}




