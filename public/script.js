// all const object
const keyCoder = {
    heading: document.getElementById(`heading`),
    key: document.getElementById(`key`),
    location: document.getElementById(`location`),
    which: document.getElementById(`which`),
    code: document.getElementById(`code`),
    container: document.getElementById(`container`),
    welcome: document.getElementById(`btnDiv`),
    btn: document.getElementById(`showPage`)

};

// will display key coder if button is pressed
keyCoder.btn.addEventListener(`click`, () => {
        keyCoder.welcome.style.display = `none`;
        keyCoder.container.style.display = `flex`;
});

window.addEventListener(`keydown`, (event) => {
    // will display keycoder and hide button if keypressed
    keyCoder.welcome.style.display = `none`;
    keyCoder.container.style.display = `flex`;
    // will display each event
    keyCoder.heading.innerHTML = event.keyCode
    keyCoder.key.innerHTML = event.key
    keyCoder.location.innerHTML = event.location  
    keyCoder.which.innerHTML = event.keyCode
    keyCoder.code.innerHTML = event.code
});
