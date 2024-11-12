import Quill from 'quill';
import 'quill/dist/quill.snow.css';

// import 'quill/dist/quill.core.css';

const publisher = document.querySelector(".form-publisher");

if (publisher !== null) {
	const quill = new Quill('#editor', {
		theme: 'snow',
		placeholder: '⭐ Здесь вы можете добавить свою статью...'
	});
}