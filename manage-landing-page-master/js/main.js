const links = document.querySelector('.links');
const links_hover = document.querySelector('.links-hover');
const links_ul = document.querySelector('.links ul');
const hamburger_menu = document.querySelector('#nav-icon1');
const email = document.querySelector('#email');
const submit = document.querySelector('#submit');
const errorMessage = document.querySelector('.error__message');
const medQuery1 = window.matchMedia("(max-width: 800px)");
const medQuery2 = window.matchMedia("(max-width: 560px)");
const medQuery3 = window.matchMedia("(min-width: 801px)");

const testEmail = (email) => {
    let re = /^[^\.\s].*@([a-zA-Z])+(\.(com|net|info|de|org))$/;
    return re.test(email);
}

const toggleDisplay = (element) => {
    return element.classList.toggle('none');
}



window.addEventListener('load', function() {
    if (medQuery2.matches) {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 1,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        })
    } else if (medQuery3.matches) {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 3,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        })
    } else if (medQuery1.matches) {
        new Glider(document.querySelector('.glider'), {
            slidesToShow: 2,
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        })
    }
})



links_hover.addEventListener('click', () => {
    links_ul.style.display = links_ul.style.display == 'flex' ? 'none' : 'flex';
})

hamburger_menu.addEventListener('click', () => {
    hamburger_menu.classList.toggle('open')
    links_ul.style.display = links_ul.style.display == 'flex' ? 'none' : 'flex';

})


submit.addEventListener('click', () => {
    if (!testEmail(email.value)) {
        errorMessage.innerHTML = 'Please insert a valid email'
    } else {

        errorMessage.innerHTML = 'subscription successful'
        setTimeout(() => {

            errorMessage.innerHTML = ''
            email.value = ''
        }, 2000)
    }
})