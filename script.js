let toggle  = document.querySelector('.lang');
let rus     = document.querySelector('.rus');
let open    = document.querySelector('.eng');
let textRus = document.querySelector('.lang__text--rus');
let textEng = document.querySelector('.lang__text--eng');
let blockRus = document.querySelector('.main__block-rus');
let blockEng = document.querySelector('.main__block-eng');

toggle.onclick = function() {
	console.log('Клац!')
	rus.classList.toggle('close');
	open.classList.toggle('open');
	textRus.classList.toggle('close');
	textEng.classList.toggle('open');
	blockRus.classList.toggle('close');
	blockEng.classList.toggle('open');
}