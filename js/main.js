let mblnav = () => {
    let navbar = document.getElementById("nav-mbl")
    let openbar = document.getElementById("open-bar")
    let closebar = document.getElementById("close-bar")
    openbar.classList.toggle("hide")
    navbar.classList.toggle("show-nav")
    closebar.classList.toggle("hide-x")
    // closebar.classList.remove("hide-x")
}
let closebar = () => {
    let navbar = document.getElementById("nav-mbl")
    let openbar = document.getElementById("open-bar")
    let closebar = document.getElementById("close-bar")
    openbar.classList.toggle("hide")
    closebar.classList.toggle("hide-x")
    navbar.classList.toggle("show-nav")
    // navbar.classList.add("hide-nav")
}

$(document).ready(function () {



    $('.items').slick({
        infinite: true,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3
    });






});
document.getElementById('myVideo').play()


