const links = {
    "linkedin": "https://www.linkedin.com/in/larissa-cravo-154b66306/",
    "github": "https://github.com/L4r1ss4Cr4v0/",
}

const originalText = []

function goLink(site){
    window.open(links[site], "_blank"); 
}
 
function flipCard(id_front, id_back, cardElement) {
    document.getElementById(id_front).classList.toggle('invisible');
    document.getElementById(id_back).classList.toggle('invisible');
    cardElement.classList.toggle('flipped');
}

function darkMode(){
    document.body.classList.toggle('darkMode');
    if (document.body.classList == 'darkMode') {
        document.getElementById("switch").classList.replace("bi-moon-stars","bi-brightness-high");
    }
    else{
        document.getElementById("switch").classList.replace("bi-brightness-high","bi-moon-stars");
    }
}






const txtCuriculo = document.getElementById('curriculo').innerText;
const curriculo = document.getElementById('curriculo');
const icon = curriculo.children[0]


window.addEventListener('resize', () => {
    if (window.innerWidth <= 800) {
        curriculo.innerText = "";
    } else {
        curriculo.innerText = txtCuriculo
    }
    curriculo.appendChild(icon);
});




// document.addEventListener('click', (e) => {
//     console.log(e)
// })




window.addEventListener('resize', () => {
    const itens = document.querySelectorAll('header ul li a');

    itens.forEach((i) => {
        originalText.push(i.textContent)
    })

    if (window.innerWidth <= 1200) {
        itens.forEach((item, index) => {
            const icons = document.querySelectorAll('header ul li a i');
            if (icons[index]) {
                const iconClone = icons[index].cloneNode(true);
                item.textContent = "";
                item.appendChild(iconClone);
            }
        });
    } else {
        itens.forEach((item, index) => {
            const icons = document.querySelectorAll('header ul li a i');
            if (icons[index]) {
                item.textContent = originalText[index];
                item.insertBefore(icons[index], item.firstChild); 
            }
        });
    }
});




$('.owl-carousel').owlCarousel({
    margin:40,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items: 2
        },
        1000:{
            items:2.3
        }
    }
})



