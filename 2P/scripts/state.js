document.addEventListener('DOMContentLoaded', () => {
    const modoOscuroCheckbox = document.getElementById('modoOscuro');

    if (localStorage.getItem('modoOscuro') === 'true') {
        document.body.classList.add('oscuro');
        modoOscuroCheckbox.checked = true;
    }

    modoOscuroCheckbox.addEventListener('change', () => {
        if (modoOscuroCheckbox.checked) {
            document.body.classList.add('oscuro');
            localStorage.setItem('modoOscuro', 'true');
        } else {
            document.body.classList.remove('oscuro');
            localStorage.setItem('modoOscuro', 'false');
        }
    });
});