// BURGER MENU

let burger = document.querySelector('#menu-bar');
let menu = document.querySelector('.nav-bar')

burger.addEventListener('click', function(){
    burger.classList.toggle('fa-times')
    menu.classList.toggle('active')
})

window.addEventListener('scroll', function(){
    burger.classList.remove('fa-times')
    menu.classList.remove('active')
})




// SLIDE

let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let mainimg = document.querySelector('.mainimg')
let textappear = document.querySelector('.textappear')
let lien = document.querySelector('.link')
let index = 1



next.addEventListener('click', function(){
    index += 1;
    if(index > 4){
        index = 1
    }
    mainimg.src = `asset/img/projet/projet${index}.png`;
    if(index == 1){
        textappear.textContent = 'Mon premier projet personnel HTML CSS réalisé avec OpenClassroom'
        lien.href = 'https://openclassrooms-student-center.github.io/1603881-creez-votre-site-web-avec-html5-et-css3/'
    } else if(index == 2){
        textappear.textContent = 'Mon premier site web interactif réalisé avec HTML CSS ainsi que JavaScript'
        lien.href = 'https://site-e-commerce-js.vercel.app/'
    } else if(index == 3){
        textappear.textContent = "Reproduction d'une page Nike pour renforcer mes compétences en Javascript"
        lien.href = 'https://nike-shoes-e-commerce.vercel.app/'
    }
    else if(index == 4){
        textappear.textContent = "Site vitrine complet d'un spa avec formulaire de contact"
        lien.href = 'https://spa-vitrine.vercel.app/'
    }
})

prev.addEventListener('click', function(){
    index -= 1;
    if(index < 1){
        index = 4
    }
    mainimg.src = `asset/img/projet/projet${index}.png`;
    if(index == 1){
        textappear.textContent = 'Mon premier projet personnel HTML CSS réalisé avec OpenClassroom'
        lien.href = 'https://openclassrooms-student-center.github.io/1603881-creez-votre-site-web-avec-html5-et-css3/'
    } else if(index == 2){
        textappear.textContent = 'Mon premier site web interactif réalisé avec HTML CSS ainsi que JavaScript'
        lien.href = 'https://site-e-commerce-js.vercel.app/'
    } else if(index == 3){
        textappear.textContent = "Reproduction d'une page Nike pour renforcer mes compétences en Javascript"
        lien.href = 'https://nike-shoes-e-commerce.vercel.app/'
    } else if(index == 4){
        textappear.textContent = "Site vitrine complet d'un spa avec formulaire de contact"
        lien.href = 'https://spa-vitrine.vercel.app/'
    }
    
})

// YEAR FOOTER

let year = document.querySelector('.year')
let date = new Date()
let newyear = date.getFullYear()

year.textContent = newyear


