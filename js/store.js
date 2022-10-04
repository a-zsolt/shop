const modeicon = document.getElementsByClassName("modeswitchicon")
const sidenav = document.getElementsByClassName("sidenav")
const showcase = document.getElementsByClassName("showcase")
const arrow = document.getElementsByClassName("arrowicon")

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function dark() {
    if (prefersDarkScheme.matches) {
        document.body.classList.toggle("light-theme");
        icocheck()
    } else {
        document.body.classList.toggle("dark-theme");
        icocheck()
    }
}

function icocheck(){
    if (document.body.classList.contains('light-theme')){
        modeicon[0].innerHTML = `dark_mode`
    } else{
        modeicon[0].innerHTML = `light_mode`
    }
}

function menu(x){
    x.classList.toggle("change")
}

function openNav(){
    sidenav[0].classList.toggle("open")
}

function hidearrow(x){
    arrow[x].style.cssText = 'color: blue;'
}

function showarrow(x){
    arrow[x].style.cssText = 'color: white;'
}

function openbuyiphone(){
    window.open("html/buy-iphone14.html", "_self")
}