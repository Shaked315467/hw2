// javascript.js

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('icon').addEventListener('click', function () {
        var ul = document.querySelector('nav ul');
        ul.classList.toggle('show');
    });
});
