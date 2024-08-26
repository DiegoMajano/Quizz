const modeToggle = document.getElementById('mode-toggle');

function toggleMode() {
    if (modeToggle.checked) {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
}

modeToggle.addEventListener('change', toggleMode);

function setInitialMode() {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkScheme) {
        modeToggle.checked = true;
        document.body.setAttribute('data-theme', 'dark');
    } else {
        modeToggle.checked = false;
        document.body.setAttribute('data-theme', 'light');
    }
}

setInitialMode();