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




//ANIMTXT


let texte = "Aryles Ben Chabane - Développeur Web";
let mot = ["Curieux", "Créatif", "Passioné"]
let j = 0;
let newtext = mot[j]
let i = 0;
let containhtml = document.querySelector(".txtanim");

function ecrireTexte() {
    if (i < texte.length) {
        containhtml.innerHTML += texte.charAt(i);
        i++;
        setTimeout(ecrireTexte, 40);
    } else {
        setTimeout(effacerTexte, 3000);
    }
}

function effacerTexte() {
  let texteCourant = containhtml.innerHTML;
  let longueur = texteCourant.length;
  if (longueur > 0) {
    containhtml.innerHTML = texteCourant.substring(0, longueur - 1);
    setTimeout(effacerTexte, 40);
  } else {
    j = (j + 1) % mot.length; // Incrémentez j et assurez-vous qu'il reste dans les limites de la liste
    texte = mot[j]; 
    i = 0; // Réinitialisez i pour commencer l'écriture du nouveau mot
    setTimeout(ecrireTexte, 1000); 
}
}

ecrireTexte(); 







// SLIDE

// let prev = document.querySelector('#prev');
// let next = document.querySelector('#next');
// let mainimg = document.querySelector('.mainimg')
// let textappear = document.querySelector('.textappear')
// let lien = document.querySelector('.link')
// let index = 1



// next.addEventListener('click', function(){
//     index += 1;
//     if(index > 4){
//         index = 1
//     }
//     mainimg.src = `asset/img/projet/projet${index}.png`;
//     if(index == 1){
//         textappear.textContent = 'Mon premier projet personnel HTML CSS réalisé avec OpenClassroom'
//         lien.href = 'https://openclassrooms-student-center.github.io/1603881-creez-votre-site-web-avec-html5-et-css3/'
//     } else if(index == 2){
//         textappear.textContent = 'Mon premier site web interactif réalisé avec HTML CSS ainsi que JavaScript'
//         lien.href = 'https://site-e-commerce-js.vercel.app/'
//     } else if(index == 3){
//         textappear.textContent = "Reproduction d'une page Nike pour renforcer mes compétences en Javascript"
//         lien.href = 'https://nike-shoes-e-commerce.vercel.app/'
//     }
//     else if(index == 4){
//         textappear.textContent = "Site vitrine complet d'un spa avec formulaire de contact"
//         lien.href = 'https://spa-vitrine.vercel.app/'
//     }
// })

// prev.addEventListener('click', function(){
//     index -= 1;
//     if(index < 1){
//         index = 4
//     }
//     mainimg.src = `asset/img/projet/projet${index}.png`;
//     if(index == 1){
//         textappear.textContent = 'Mon premier projet personnel HTML CSS réalisé avec OpenClassroom'
//         lien.href = 'https://openclassrooms-student-center.github.io/1603881-creez-votre-site-web-avec-html5-et-css3/'
//     } else if(index == 2){
//         textappear.textContent = 'Mon premier site web interactif réalisé avec HTML CSS et JavaScript'
//         lien.href = 'https://site-e-commerce-js.vercel.app/'
//     } else if(index == 3){
//         textappear.textContent = "Reproduction d'une page Nike pour renforcer mes compétences en Javascript"
//         lien.href = 'https://nike-shoes-e-commerce.vercel.app/'
//     } else if(index == 4){
//         textappear.textContent = "Site vitrine complet d'un spa avec formulaire de contact"
//         lien.href = 'https://spa-vitrine.vercel.app/'
//     }
    
// })







// FORMULAIRE 

const form = document.querySelector('form');
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const objet = document.getElementById('objet')
const message = document.getElementById('message')

function sendEmail(){
    const bodyMessage = `Full Name : ${fullName.value} <br> Email : ${email.value} <br> Numéro de téléphone : ${phone.value} <br> Message : ${message.value} <br>`
    Email.send({
        SecureToken : "641fee65-f070-4ed4-8af7-89d73fade3ed",
        To : 'benchabanearyles@gmail.com',
        From : "benchabanearyles@gmail.com",
        Subject : objet.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Succès",
                text: "Message envoyé avec succès !",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll('.item')

    for (const item of items){
        if (item.value == ""){
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener("keyup", () => {
            if (item.value != ""){
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }
            else{
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !message.classList.contains("error")){
        sendEmail();
        form.reset();
         return false
    }
    
    
})

// YEAR FOOTER

let year = document.querySelector('.year')
let date = new Date()
let newyear = date.getFullYear()

year.textContent = newyear






// SCROLL REVEAL EFFECT

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.title-section', {delay:100, origin:'top'});
sr.reveal('.about img', {delay:650, origin:'left'});
sr.reveal('.about .box', {delay:450, origin:'right'});
sr.reveal('.competences .box-container .box .skills', {delay:200, origin:'top'});
sr.reveal('.realisation .container .box .img-container', {delay:400, origin:'top'});
sr.reveal('.contact .box-container .rs', {delay:200, origin:'left'});
sr.reveal('.contact .box-container .form', {delay:200, origin:'right'});
