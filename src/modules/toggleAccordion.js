const toggleAccordion = () => {
	const accordeonElement = document.querySelectorAll('.accordeon-element');
	// console.log(accordeonElement);
	let item;
	for (item of accordeonElement) {
		// console.log(item);
		// обращаемся  к item и делаем прослушку события
		item.addEventListener('click', function(el) {
			// прверка, если this на который кликнули
			if (this.classList.contains('active')) {
				this.classList.remove('active');
			} else {
				for (el of accordeonElement) {
					el.classList.remove('active');
				}
				this.classList.add('active');
			}
		});
	}
};
toggleAccordion();
