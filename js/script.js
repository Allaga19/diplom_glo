window.addEventListener('DOMContentLoaded', () => {
// modal
	const modalUp = () => {
		const modalCallback = document.getElementById('callback'), // окно
			btn = document.getElementById('callback-btn'),
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
// Кнопка вверх
(function() {
	const btnUp = document.querySelector('.up');
	function trackScroll() {
		const scrolled = window.pageYOffset;
		let clientHeight = document.documentElement.clientHeight;
		clientHeight = 30;
		// условия для класса show
		if (scrolled > clientHeight) {
			btnUp.classList.add('up-show');
		}
		if (scrolled < clientHeight) {
			btnUp.classList.remove('up-show');
		}
	}
	// скорость прокрутки.
	function backToTop() {
		if (window.pageYOffset > 0) {
			window.scrollBy(0, -80);
			setTimeout(backToTop, 0);
		}
	}
	// scroll отслеживать прокрутку документа(т.е. страницы)
	window.addEventListener('scroll', trackScroll);
	// click отслеживать нажатие на кнопку и приводить в действие скролл «наверх»
	btnUp.addEventListener('click', backToTop);
})();