// modal
const modalUp = () => {
	const modalCallback = document.querySelector('.modal-callback'), // окно
		callbackBtn = document.querySelectorAll('.callback-btn'),
		modalOverlay = document.querySelector('.modal-overlay'),
		modalClose = document.querySelector('.modal-close');
	// открытие окна
	callbackBtn.forEach(elem => {
		elem.addEventListener('click', () => {
			modalCallback.style.display = 'block';
			modalOverlay.style.display = 'block';
		});
	});
	// крестик
	modalClose.addEventListener('click', () => {
		modalCallback.style.display = 'none';
		modalOverlay.style.display = 'none';
	});
	// подложка
	modalOverlay.addEventListener('click', () => {
		modalCallback.style.display = 'none';
		modalOverlay.style.display = 'none';
	});
};
export default modalUp;
