const radiusValueInputs = document.querySelectorAll('input');
const square = document.querySelector('.square');

radiusValueInputs.forEach((input) => {
    input.addEventListener('change', (event) => {
        switch (event.target.name) {
            case 'top-left-border':
                square.style.borderTopLeftRadius = input.value + 'px';
                break;
            case 'top-right-border':
                square.style.borderTopRightRadius = input.value + 'px';
                break;
            case 'bottom-left-border':
                square.style.borderBottomLeftRadius = input.value + 'px';
                break;
            case 'bottom-right-border':
                square.style.borderBottomRightRadius = input.value + 'px';
                break;
            default:
                break;
        }
    })
})