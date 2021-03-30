// modal
const modalUp = () => {
	const modalCallback = document.querySelector('.modal-callback'), // окно
		callbackBtn = document.querySelectorAll('.callback-btn'),
		modalOverlay = document.querySelector('.modal-overlay'),
		modalClose = document.querySelector('.modal-close');
	document.querySelector(".callback-btn").oncontextmenu = function() {
		return false;
	};
	function binModal(trigger, modal, close) {
		// открытие модального окна
		trigger.forEach(elem => {
			elem.addEventListener('click', () => {
				modalCallback.style.display = 'block';
				modalOverlay.style.display = 'block';
			});
		});
		// закрытие окна
		close.addEventListener('click', () => {
			modal.style.display = 'none';
			modalOverlay.style.display = 'none';
			document.body.style.overflow = '';
		});
		// подложка
		modal.addEventListener('click', () => {
			modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
		});
	}
	binModal(callbackBtn, modalOverlay, modalClose);
};
export default modalUp;
