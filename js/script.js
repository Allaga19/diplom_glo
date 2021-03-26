window.addEventListener('DOMContentLoaded', () => {
// modal
	const modalUp = () => {
		const modalCallback = document.getElementById('.callback'), // окно
			btn = document.querySelector('.callback-btn'),
			modalOverlay = document.querySelector('.modal-overlay'),
			modalClose = document.querySelector('.modal-close');
		// console.log(modalCallback);
		function binModal(trigger, modal, close) {
			// открытие модального окна
			trigger.addEventListener('click', e => {
				e.preventDefault();  // запрещаем стандартное событие. чтобы небыло перезагрузки
				modal.style.display = 'block';
				modalOverlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
			// console.log(modal);
			// закрытие окна
			close.addEventListener('click', () => {
				modal.style.display = 'none';
				modalOverlay.style.display = 'none';
				document.body.style.overflow = '';
			});
			// подложка
			modal.addEventListener('click', e => {
				if (e.target === modal) {
					modal.style.display = 'none';
					modalOverlay.style.display = 'none';
				}
			});
		}
		binModal(btn, modalCallback, modalClose);
	};
	modalUp();
});
