const links = {
    "linkedin": "https://www.youtube.com/?gl=BR",
    "github": "https://github.com/L4r1ss4Cr4v0/",
}

function goLink(site){
    window.open(links[site], "_blank"); 
}

// teste de função 
function flipCard(id_front, id_back){
    console.log("Aqui");
    document.getElementById('proj-um').classList.add('cardToFlip')
    document.getElementById(id_front).classList.add('invisible');
    document.getElementById(id_back).classList.remove('invisible');
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    dots:false,
    autoplay:3000,
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
