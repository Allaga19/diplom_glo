window.addEventListener('DOMContentLoaded', () => {
// modal
	const modalUp = () => {
		const modalCallback = document.getElementById('btnMenu'), // окно
			btn = document.querySelector('.callback-btn'),
			modalOverlay = document.querySelector('.modal-overlay'),
			modalClose = document.querySelector('.modal-close');
		function binModal(trigger, modal, close) {
			// открытие модального окна
			trigger.addEventListener('click', e => {
				// запрещаем стандартное событие. чтобы небыло перезагрузки
				e.preventDefault();
				modal.style.display = 'block';
				modalOverlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
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
