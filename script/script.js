const heading = document.querySelector('.heading');
const headText = 'Please Meet Our Team';
let i = 0;

const typing = () => {
	if (i < headText.length) {
		heading.innerHTML += headText.charAt(i);
		i++;

		/* Concept of recursive function is at play below */
		setTimeout(typing, 150);
	}
};

typing();
