const textDinamic = document.querySelector('.dinamicText')

const texts = ["Freelancer", "Innovation", "YOUR BETTER CHOICE"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        // ESCRIBIENDO
        textDinamic.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

            if (charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1200); // pausa al terminar de escribir
        }
    } else {
        // BORRANDO
        textDinamic.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        }
    }

    const speed = isDeleting ? 90 : 150;
    setTimeout(typeEffect, speed);
}

typeEffect();
