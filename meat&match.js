
darkmodecheckbox.addEventListener("change", function() {
    isDarkModeOn = !isDarkModeOn; 
});

if (window.location.hash) {
    const anchor = window.location.hash.substr(1);
    const content = document.querySelector(`#${anchor}`);
    if (content) {
        content.classList.add('show');
    }
}

button1.addEventListener('click', () => {
    content6.classList.remove('show');
    content5.classList.remove('show');
    content4.classList.remove('show');
    content3.classList.remove('show');
    content2.classList.remove('show');
    content1.classList.toggle('show');

});

button2.addEventListener('click', () => {
    content6.classList.remove('show');
    content5.classList.remove('show');
    content4.classList.remove('show');
    content3.classList.remove('show');
    content2.classList.toggle('show');
    content1.classList.remove('show');
});

button3.addEventListener('click', () => {
    content6.classList.remove('show');
    content5.classList.remove('show');
    content4.classList.remove('show');
    content3.classList.toggle('show');
    content2.classList.remove('show');
    content1.classList.remove('show');
});

button4.addEventListener('click', () => {
    content6.classList.remove('show');
    content5.classList.remove('show');
    content4.classList.toggle('show');
    content3.classList.remove('show');
    content2.classList.remove('show');
    content1.classList.remove('show');

});

button5.addEventListener('click', () => {
    content6.classList.remove('show');
    content5.classList.toggle('show');
    content4.classList.remove('show');
    content3.classList.remove('show');
    content2.classList.remove('show');
    content1.classList.remove('show');
});

button6.addEventListener('click', () => {
    content6.classList.toggle('show');
    content5.classList.remove('show');
    content4.classList.remove('show');
    content3.classList.remove('show');
    content2.classList.remove('show');
    content1.classList.remove('show');
});