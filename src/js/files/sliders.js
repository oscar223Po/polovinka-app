/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';

/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.intro__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.intro__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1.7,
			spaceBetween: 1,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},

			/*
			// Пагінація
			pagination: {
				el: '.online__dotts',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			/*
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.arrows__arrow--prev',
				nextEl: '.arrows__arrow--next',
			},
			*/

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1.3,
				},
				768: {
					slidesPerView: 1.7,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.online__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.online__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			//lazy: true,

			// Ефекти
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},

			// Пагінація
			pagination: {
				el: '.online__dotts',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.arrows__online--prev',
				nextEl: '.arrows__online--next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			// Події
			on: {

			}
		});
	}
	if (document.querySelector('.photos__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.photos__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, EffectCards],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			grabCursor: true,
			//autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			effect: "cards",

			// Ефекти
			/*
			autoplay: {
				delay: 1500,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			pagination: {
				el: '.controls-photos__fraction',
				clickable: true,
				type: "fraction",
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.arrows__photos--prev',
				nextEl: '.arrows__photos--next',
			},

			/*
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 15,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 15,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},
			*/
			// Події
			on: {

			}
		});
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});