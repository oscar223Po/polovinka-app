// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	// ================[ JavaScript Nouislider For Hight & Weight ]================
	const rangeHight = document.getElementById("range-hight");
	const rangeWeight = document.getElementById("range-weight");
	var rangeHightValue = document.getElementById("range-span-hight");
	var rangeWeightValue = document.getElementById("range-span-weight");
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
	}
	// ================[ JavaScript Nouislider For Old ]================
	const rangeOld = document.getElementById("range-old");
	var rangeOldValue = document.getElementById("range-span-old");
	const rangeOldSearch = document.getElementById("range-old-search");
	var rangeOldSearchValue = document.getElementById("range-span-search-old");
	if (rangeOld, rangeOldValue !== null) {
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
	if (rangeOldSearch, rangeOldSearchValue !== null) {
		// Old
		noUiSlider.create(rangeOldSearch, {
			start: [25, 50],
			animate: false,
			connect: true,
			range: {
				min: 18,
				max: 70
			}
		});
		rangeOldSearch.noUiSlider.on('update', function (values, handle) {
			rangeOldSearchValue.innerHTML = Math.round(values[0]) + ' - ' + Math.round(values[1]);
		});
	}
	// ================[ JavaScript Nouislider For Hight & Weight Scope ]================
	const rangeHightScope = document.getElementById("range-hight-scope");
	const rangeWeightScope = document.getElementById("range-weight-scope");
	var rangeHightValueScope = document.getElementById("range-scope-hight");
	var rangeWeightValueScope = document.getElementById("range-scope-weight");
	if (rangeHightScope, rangeWeightScope !== null) {
		// Hight
		noUiSlider.create(rangeHightScope, {
			start: [155, 175],
			animate: false,
			connect: true,
			range: {
				min: 150,
				max: 220
			}
		});
		rangeHightScope.noUiSlider.on('update', function (values, handle) {
			rangeHightValueScope.innerHTML = Math.round(values[0]) + ' - ' + Math.round(values[1]);
		});
		// Hight
		noUiSlider.create(rangeWeightScope, {
			start: [65, 85],
			animate: false,
			connect: true,
			range: {
				min: 50,
				max: 120
			}
		});
		rangeWeightScope.noUiSlider.on('update', function (values, handle) {
			rangeWeightValueScope.innerHTML = Math.round(values[0]) + ' - ' + Math.round(values[1]);
		});
	}
}

rangeInit();
