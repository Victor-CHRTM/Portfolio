var nbSlides = 0;
function defiler(){
	const widthSlider = document.querySelector('.slider').offsetWidth;

	if(nbSlides % 2 == 0){
		document.querySelector('.slider__content').scrollLeft += widthSlider;
		nbSlides += 1;
	}else{
		document.querySelector('.slider__content').scrollLeft -= widthSlider;
		nbSlides -= 1;
	}
	console.log(nbSlides);
}