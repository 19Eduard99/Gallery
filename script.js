'use strict';

addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('#image-form');
    const inputSrc = document.querySelector('#image-url')
    const modal = document.querySelector('#modal');
    const gallery = document.querySelector('#gallery');
    const close = document.querySelector('.close');
    const modalImg = document.querySelector('.modal-content');
    console.log(modal)


    const deleteEl = (span,  delEl) => {
        span.addEventListener('click', (e) => {
            e.stopPropagation()
            delEl.remove()
        })
    }
    const addImg = () => {
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            const src = inputSrc.value;
            const gallery = document.querySelector('#gallery');
            const span = document.createElement('span')
            const img = document.createElement('img')
            const div = document.createElement('div');
            const errorDiv = document.createElement('div');
            errorDiv.classList.add('error-img')
            errorDiv.textContent = 'ERROR'
            div.classList.add('openDiv')
            span.classList.add('delete')
            div.style.position = 'relative'
            img.src = src;

            img.onload = function () {
                div.append(span)
                gallery.append(div)
                div.append(img)
                deleteEl(span, div)

            }
            img.onerror = function () {
                errorDiv.append(span)
                gallery.append(errorDiv)
                deleteEl(span, errorDiv)
            }
        })

    }
    const openImg = () => {
        gallery.addEventListener('click', (e) => {
            e.stopPropagation()
            if (e.target && e.target.closest('.openDiv')) {
                modal.style.display = 'block';
                modalImg.src = e.target.closest('.openDiv').querySelector('img').src;
            }
        });

        close.addEventListener('click', (e) => {
            e.stopPropagation()
            modal.style.display = 'none';
            modalImg.src = '';
        });
    };

    addImg()
    openImg()
})
