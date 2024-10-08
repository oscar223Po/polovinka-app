// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const rangeHight = document.getElementById("range-hight");
	const rangeWeight = document.getElementById("range-weight");

	var rangeHightValue = document.getElementById("range-span-hight");
	var rangeWeightValue = document.getElementById("range-span-weight");

	const rangeOld = document.getElementById("range-old");
	var rangeOldValue = document.getElementById("range-span-old");


	if (rangeHight, rangeWeight !== null) {
		// Hight
		noUiSlider.create(rangeHight, {
			start: 180,
			animate: false,
			connect: [true, false],
			range: {
				min: 50,
				max: 220
			}
		});
		rangeHight.noUiSlider.on("update", function (values, handle) {
			rangeHightValue.innerHTML = values[handle];
			rangeHightValue.innerHTML = parseFloat(values[handle]).toFixed(0);
		});
		// Weight
		noUiSlider.create(rangeWeight, {
			start: 74,
			animate: false,
			connect: [true, false],
			range: {
				min: 50,
				max: 90
			}
		});
		rangeWeight.noUiSlider.on("update", function (values, handle) {
			rangeWeightValue.innerHTML = values[handle];
			rangeWeightValue.innerHTML = parseFloat(values[handle]).toFixed(0);
		});
		// Old
		noUiSlider.create(rangeOld, {
			start: [25, 50],
			animate: false,
			connect: true,
			range: {
				min: 18,
				max: 70
			}
		});
		rangeOld.noUiSlider.on('update', function (values, handle) {
			rangeOldValue.innerHTML = Math.round(values[0]) + ' - ' + Math.round(values[1]);
		});
	}
}

rangeInit();
