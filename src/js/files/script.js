// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
document.addEventListener('DOMContentLoaded', function () {
	// ================[ JavaScript Section Gender Buttons ]================
	const genderButton = document.querySelectorAll(".reg-body__gender-button");
	if (genderButton !== null) {
		genderButton.forEach(button => {
			button.addEventListener("click", () => {
				genderButton.forEach(btn => btn.classList.remove("reg-body__gender-button--active"));
				button.classList.add("reg-body__gender-button--active");
			})
		})
	}
	// ================[ JavaScript Section Radio Buttons ]================
	const moreButtons = document.querySelector(".more__buttons");
	if (moreButtons !== null) {
		function updateTitle(propName) {
			const radioButtons = document.querySelectorAll(`input[name="prop-${propName}"]`);
			const titleSpan = document.querySelector(`.more__button-title--${propName} span`);
			radioButtons.forEach(radio => {
				if (radio.checked) {
					const label = document.querySelector(`label[for="${radio.id}"] .options__text`);
					titleSpan.textContent = label ? label.textContent : '';
				}
			});
		}
		// Список всех групп радиокнопок
		const propNames = ['body', 'hair', 'eye', 'belive', 'type', 'edu', 'prof', 'deal', 'social', 'home', 'move', 'smoke', 'drink'];
		// Добавляем обработчики событий для каждой группы радиокнопок
		propNames.forEach(propName => {
			document.querySelectorAll(`input[name="prop-${propName}"]`).forEach(radio => {
				radio.addEventListener('change', () => updateTitle(propName));
			});
		});
		// Инициализируем заголовки при загрузке страницы
		propNames.forEach(propName => updateTitle(propName));
	}
	// ================[ JavaScript Section Languages Buttons ]================
	const langButtons = document.querySelectorAll(".lang__button");
	if (langButtons !== null) {
		for (let i = 0; i < langButtons.length; i++) {
			langButtons[i].addEventListener("click", () => {
				langButtons[i].classList.toggle("lang__button--active");
			})
		}
	}
	// ================[ JavaScript Section Textarea Limit ]================
	const textareas = document.querySelectorAll('.request-textarea');
	if (textareas !== null) {
		textareas.forEach(textarea => {
			const charCount = textarea.nextElementSibling;
			textarea.addEventListener('input', () => {
				const currentLength = textarea.value.length;
				charCount.textContent = `${currentLength}/2000 символов`;
			});
		});
	}
});
//--------------------------------------------------------------