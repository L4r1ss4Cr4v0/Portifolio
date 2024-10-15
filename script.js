const links = {
    "linkedin": "https://www.linkedin.com/in/larissa-cravo-154b66306/",
    "github": "https://github.com/L4r1ss4Cr4v0/",
}

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



