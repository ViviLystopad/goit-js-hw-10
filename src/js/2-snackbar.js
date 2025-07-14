import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    function createPromise(delay, state) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                state === 'fulfilled' ? resolve(delay) : reject(delay);
            }, delay);
        });
    }
    createPromise(delay, state).then((arg) => {
        iziToast.success({
            title: 'OK',
            message: `Fulfilled promise in ${arg}ms`,
            position: 'topRight',
            titleColor: '#fff',
            backgroundColor: '#59a10d',
            messageColor: '#fff',
        });
    }).catch((arg) => {
        iziToast.error({
            title: 'Error',
            message: `Rejected promise in ${arg}ms`,
            position: 'topRight',
            titleColor: '#fff',
            backgroundColor: '#ef4040',
            messageColor: '#fff',
        });
    });
    form.reset();
});