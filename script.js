var index = 0;
function changeColors() {
    let colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange','aqua','deeppink'];

    document.body.style.backgroundColor = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }
}