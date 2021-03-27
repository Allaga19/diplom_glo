// Кнопка вверх
const scrollUp = () => {
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
};
export default scrollUp;
