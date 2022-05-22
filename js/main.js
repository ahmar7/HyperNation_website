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
    openbar.classList.add("open")
    console.log("Runninh");
    navbar.classList.remove("show-nav")
    // navbar.classList.add("hide-nav")
}