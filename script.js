const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.onclick = () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menu.innerHTML = "✕";
    }else{
        menu.innerHTML = "☰";
    }

}
AOS.init({
    duration: 1000,
    once: true
});

AOS.init({
    duration:1000,
    once:true
});
