// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
document.addEventListener('DOMContentLoaded', function () {
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
				radio.addEventListener('change', () => {
					updateTitle(propName);
					// Закрываем попап
					const popup = document.querySelector(`#more-${propName}`);
					if (popup) {
						const popupInstance = flsModules.popup; // Получаем экземпляр попапа
						popupInstance.close(popup.id); // Закрываем попап по ID
					}
				});
			});
		});
		// Инициализируем заголовки при загрузке страницы
		propNames.forEach(propName => updateTitle(propName));
	}
	// ================[ JavaScript Section Languages Buttons ]================
	const langRadio = document.querySelectorAll('.lang__input');
	const messageLang = document.getElementById("lang-chk");
	if (langRadio, messageLang !== null) {
		const checkRadioButtons = () => {
			const anyChecked = Array.from(langRadio).some(input => input.checked);
			langRadio.forEach(input => {
				input.classList.toggle('_form-error-lang', !anyChecked);
			});
			messageLang.style.display = anyChecked ? 'none' : 'block';
		};
		checkRadioButtons();
		langRadio.forEach(input => {
			input.addEventListener('change', checkRadioButtons);
		});
	}
	// ================[ JavaScript Section Languages Buttons ]================
	const genderRadio = document.querySelectorAll('.gender__input');
	const messageGender = document.getElementById("gender-chk");
	if (genderRadio, messageGender !== null) {
		const checkRadioButtons = () => {
			const anyChecked = Array.from(genderRadio).some(input => input.checked);
			genderRadio.forEach(input => {
				input.classList.toggle('_form-error-gender', !anyChecked);
			});
			messageGender.style.display = anyChecked ? 'none' : 'block';
		};
		checkRadioButtons();
		genderRadio.forEach(input => {
			input.addEventListener('change', checkRadioButtons);
		});
	}
	// ================[ JavaScript Section Textarea Limit ]================
	const updateCharCount = (textarea, maxLength) => {
		const charCount = textarea.nextElementSibling;
		textarea.addEventListener('input', () => {
			const currentLength = textarea.value.length;
			charCount.textContent = `${currentLength}/${maxLength} символов`;
		});
	};
	const textareas = document.querySelectorAll('.request-textarea');
	if (textareas !== null) {
		textareas.forEach(textarea => {
			const maxLength = textarea.getAttribute('maxlength');
			updateCharCount(textarea, maxLength);
		});
	}
	// ================[ JavaScript Section Checkbox Form ]================
	const checkboxes = document.querySelectorAll('.form-chk');
	const messageCheckbox = document.getElementById('message-chk');
	if (checkboxes, messageCheckbox !== null) {
		function checkCheckboxes() {
			let anyChecked = false;
			checkboxes.forEach(function (messageCheckbox) {
				if (messageCheckbox.checked) {
					anyChecked = true;
				}
			});
			if (!anyChecked) {
				messageCheckbox.style.display = 'block';
			} else {
				messageCheckbox.style.display = 'none';
			}
		}
		checkboxes.forEach(function (checkbox) {
			checkbox.addEventListener('change', checkCheckboxes);
		});
		checkCheckboxes();
	}
	// ================[ JavaScript Section ]================
	if (document.documentElement.getAttribute('dir') === 'rtl') {
		// Находим все элементы options__item и добавляем класс rtl-reverse
		const items = document.querySelectorAll('.options__item');
		items.forEach(item => {
			item.classList.add('rtl-reverse');
		});
	}
	// ================[ JavaScript Section ]================
	const uploadArea = document.getElementById('uploadArea');
	const fileInput = document.getElementById('fileInput');
	if (uploadArea, fileInput !== null) {
		uploadArea.addEventListener('dragover', (e) => {
			e.preventDefault();
			uploadArea.classList.add('hover');
		});
		uploadArea.addEventListener('dragleave', () => {
			uploadArea.classList.remove('hover');
		});
		uploadArea.addEventListener('drop', (e) => {
			e.preventDefault();
			uploadArea.classList.remove('hover');
			const files = e.dataTransfer.files;
			if (files.length > 0) {
				fileInput.files = files; // Задаем файлы в input
			}
		});
		uploadArea.addEventListener('click', () => {
			fileInput.click();
		});
	}
	// ================[ JavaScript Remove Navigation Near Footer ]================
	const footer = document.querySelector('.footer');
	const nav = document.querySelector('.nav');
	if (nav !== null) {
		window.addEventListener('scroll', () => {
			const footerRect = footer.getBoundingClientRect();
			const windowHeight = window.innerHeight;
			if (footerRect.top <= windowHeight) {
				nav.classList.add('_nav-active');
			} else {
				nav.classList.remove('_nav-active');
			}
		});
	}
	// ================[ JavaScript Section Add Favorite ]================
	const heartButtons = document.querySelectorAll('.btn-heart');
	if (heartButtons !== null) {
		heartButtons.forEach(button => {
			button.addEventListener('click', function () {
				this.classList.toggle('btn-heart--active');
				if (this.classList.contains('btn-heart--active')) {
					this.setAttribute('data-popup', '#done-favorites');
				} else {
					this.setAttribute('data-popup', '#done-favorites-remove');
				}
			});
		});
	}
});
//--------------------------------------------------------------