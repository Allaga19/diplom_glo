const  anchorLink = () => {
	// Найти все ссылки начинающиеся на #
	const anchors = document.querySelectorAll('a[href^="#"]');
	// Цикл по всем ссылкам
	for (const anchor of anchors) {
		// каждому якорю присваиваем обработчик события
		anchor.addEventListener("click", e => {
			e.preventDefault(); // Предотвратить стандартное поведение ссылок
			// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
			const blockID = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';
			// Плавная прокрутка до элемента с id = href у ссылки
			document.querySelector(blockID).scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		});
	}
};

export default anchorLink;
