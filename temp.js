const toggleCheckbox = document.querySelector('.toggle-checkbox');
const mainBody = document.getElementById('main-body');

toggleCheckbox.addEventListener('change', function () {
    if (this.checked) {
        mainBody.classList.remove('day');
        mainBody.classList.add('night');
    } else {
        mainBody.classList.remove('night');
        mainBody.classList.add('day');
    }
});
