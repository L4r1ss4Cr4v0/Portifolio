const links = {
    "linkedin": "https://www.linkedin.com/in/larissa-cravo-154b66306/",
    "github": "https://github.com/L4r1ss4Cr4v0/",
};
const originalText = [];
const txtCuriculo = document.getElementById('curriculo').innerText;
const curriculo = document.getElementById('curriculo');
const icon = curriculo.children[0];
const email = "larissacravoccamara@gmail.com"
const btngithub = ["ver github", "<i class='bi bi-github'></i>"];
const btnlinkedin = ["ver linkedin", "<i class='bi bi-linkedin'></i>"];

function goLink(site){
    window.open(links[site], "_blank"); 
};
 
function flipCard(id_front, id_back, cardElement) {
    document.getElementById(id_front).classList.toggle('invisible');
    document.getElementById(id_back).classList.toggle('invisible');
    cardElement.classList.toggle('flipped');
};

function darkMode(){
    document.body.classList.toggle('darkMode');
    if (document.body.classList == 'darkMode') {
        document.getElementById("switch").classList.replace("bi-moon-stars","bi-brightness-high");
    }
    else{
        document.getElementById("switch").classList.replace("bi-brightness-high","bi-moon-stars");
    }
};

function copyMail(){
    navigator.clipboard.writeText(email);
};

window.addEventListener('resize', () => {
    document.getElementById("github_btn").innerText = "";
    document.getElementById("linkedin_btn").innerText = "";
    if(window.innerWidth <= 1000){
        document.getElementById("barrasdeProgressoNova").classList.remove("invisible");
        document.getElementById("container-habilities").classList.add("invisible");
    }
    else{
        document.getElementById("barrasdeProgressoNova").classList.add("invisible");
        document.getElementById("container-habilities").classList.remove("invisible");
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth <= 800) {
        curriculo.innerText = "";
        document.getElementById("spanSaibaMais").classList.add("invisible");
        document.getElementById("linkedin_btn").innerHTML = btnlinkedin[1];
        document.getElementById("github_btn").innerHTML = btngithub[1];
    } 
    else {
        curriculo.innerText = txtCuriculo
        document.getElementById("spanSaibaMais").classList.remove("invisible");
        document.getElementById("github_btn").innerHTML = `${btngithub[0]} ${btngithub[1]}`;
        document.getElementById("linkedin_btn").innerHTML = `${btnlinkedin[0]} ${btnlinkedin[1]}`
    }
    curriculo.appendChild(icon);
});

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

$('.primeiro').owlCarousel({
    margin: 100,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items: 1
        },
        1000:{   
            items:2
        },
        1200:{
            items:2.3
        }
    }
})

$('.logos').owlCarousel({
    margin:40,
    nav:false,
    dots:false,
    autoplay: true,
    loop: true,
    autoPlaySpeed: 0.1,
    stopOnHover: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items: 2
        },
        1000:{
            items:3
        }
    }
})



