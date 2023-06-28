'use strict';

const btnOpen = document.querySelector('.box__button-btn_open');

const btnClose = document.querySelector('.box__button-btn_close');

const boxList = document.querySelector('.box-list');

btnOpen.addEventListener('click', () => {
	btnOpen.style.display = 'none';

	btnClose.style = 'display: block';

	boxList.style.display = 'block';
});

btnClose.addEventListener('click', () => {
	btnClose.style.display = 'none';

	btnOpen.style.display = 'block';

	boxList.style.display = 'none';
});

const block = document.querySelector('.block');

block.addEventListener('click', (e) => {
	const cardPurple = e.target.closest('.purple');

	const cardWhite = e.target.closest('.white');

	if (cardWhite === null) {
		const noVisibleCard = cardPurple.nextElementSibling;

		cardPurple.classList.add('no-visible');
		noVisibleCard.classList.remove('no-visible');
	}

	if (cardPurple === null) {
		const noVisibleCard = cardWhite.previousElementSibling;

		cardWhite.classList.add('no-visible');
		noVisibleCard.classList.remove('no-visible');
	}
});

if (window.innerWidth <= 800) {
	console.log('window.innerWidth ----', window.innerWidth);

	const blocksOne = document.querySelectorAll('.block-part__list-items_first');
	console.log('blocks====', blocksOne);

	for (let i = 1; i < blocksOne.length; i++) {
		blocksOne[i].style.display = 'none';
	}

	const blocksTwo = document.querySelectorAll('.block-part__list-items_second');
	blocksTwo[1].style.display = 'none';
}




