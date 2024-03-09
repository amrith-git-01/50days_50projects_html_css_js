const panels = document.querySelectorAll('.panel');

const removeActiveClass = function () {
    panels.forEach(function (panel) {
        panel.classList.remove('active');
    });
}
panels.forEach(function (panel) {
    panel.addEventListener('click', function () {
        removeActiveClass();
        panel.classList.add('active');
    })
});
