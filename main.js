const playSound = (keyCode) => {
	// Funcion para ejecutar sonidos
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`div[data-key="${keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
};

const removeTransition = (e) => {
	// Funcion para resetar transiciones
	if (e.propertyName !== "transform") return;
	e.target.classList.remove("playing");
};

const keys = document.querySelectorAll(".key"); // Selecciono las teclas
keys.forEach((key) => {
	// Resetear la transicion cada vez que se ejecute
	key.addEventListener("transitionend", removeTransition);
});

keys.forEach((key) => {
	// Capturar las pulsaciones por ratón
	key.addEventListener("click", (e) => {
		const keyCodeClicked = key.getAttribute("data-key");
		playSound(keyCodeClicked);
	});
});

// Capturar las pulsaciones por teclado
window.addEventListener("keydown", (e) => {
	playSound(e.key);
});
