let colorDisplay = document.querySelector('.color-display');
let copyHexButton = document.getElementById('copy-hex');
let hexCode = document.getElementById('hex-code');
let rgbCode = document.getElementById('rgb-code');
let darkModeButton = document.getElementById('dark-mode');

function generateColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    colorDisplay.style.backgroundColor = randomColor;

    document.getElementById('hex-code').textContent = randomColor;

    const r = parseInt(randomColor.slice(1, 3), 16);
    const g = parseInt(randomColor.slice(3, 5), 16);
    const b = parseInt(randomColor.slice(5, 7), 16);
    const rgbColor = `RGB(${r}, ${g}, ${b})`;

    document.getElementById('rgb-code').textContent = rgbColor;
}

function copyHexRgb(type) {
    if (type == 'hex') {
        navigator.clipboard.writeText(hexCode.textContent)
        alert('Hex copied to clipboard');
    } else if (type == 'rgb') {
        navigator.clipboard.writeText(rgbCode.textContent)
        alert('RGB copied to clipboard');
    }
}

function switchTheme(theme) {
    let body = document.body
    if (theme == 'dark') {
        body.style.background = 'black'
        body.style.color = 'white'
    } else if (theme == 'light') {
        body.style.background = 'white'
        body.style.color = 'black'
    }

}
