const input = document.querySelector('#name-input');
const nameUser = document.querySelector('#name-output');

const helloName = (event) => {
    nameUser.textContent = event.currentTarget.value.trim();
    const hasSpaces = /\s/.test(nameUser.textContent);

    if (!nameUser.textContent || hasSpaces) {
        nameUser.textContent = 'Anonymous';
    }
}

input.addEventListener('input', helloName);