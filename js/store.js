//main site
const content = document.getElementsByClassName("content")
const modeicon = document.getElementsByClassName("modeswitchicon")
const sidenav = document.getElementsByClassName("sidenav")
const showcase = document.getElementsByClassName("showcase")
const arrow = document.getElementsByClassName("arrowicon")
const navbar = document.getElementsByClassName("navbar");
const cartnum = document.getElementsByClassName("cartnum");
const cartbtn = document.getElementsByClassName("cart");

//buy sties
const buyimgmain = document.getElementById("buyimgmain")

const pro = document.getElementById("pro")
const promax = document.getElementById("promax")
const purple = document.getElementById("purple")
const gold = document.getElementById("gold")
const silver = document.getElementById("silver")
const black = document.getElementById("black")

const ps5 = document.getElementById("ps5")
const digital = document.getElementById("digital")

const rtx = document.getElementById("rtx")
const ti = document.getElementById("ti")

const kit = document.getElementById("kit")
const headset = document.getElementById("headset")
const controller = document.getElementById("controller")
const base = document.getElementById("base")

const gb64 = document.getElementById("gb64")
const gb256 = document.getElementById("gb256")
const gb512 = document.getElementById("gb512")

const green = document.getElementById("turbo")
const goofy = document.getElementById("goofy")
const dior = document.getElementById("dioor")

//cart site
const cartitem = document.getElementsByClassName("cartitem")
const itemprice = document.getElementsByClassName("itemincartprice")
const subtotal = document.getElementsByClassName("subtotalnum")
const shipping = document.getElementsByClassName("shippingnum")
const tax = document.getElementsByClassName("taxnum")
const total = document.getElementsByClassName("totalnum")

//color scheme
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
//menu button
function menu(x){
    x.classList.toggle("change")
}
//side nav open
function openNav(){
    sidenav[0].classList.toggle("open")
    if (sidenav[0].classList.contains('open')){
        content[0].style.cssText = 'filter: blur(5px); transition: 0.5s;'
    }else{
        content[0].style.cssText = 'filter: blur(0px); transition: 0.5s;'
    }
}

//side nav close when clicked on the page
function closeNav(){
    sidenav[0].classList.remove("open")
    content[0].style.cssText = 'filter: blur(0px); transition: 0.5s;'
}

function hidearrow(x){
    arrow[x].style.cssText = 'color: blue;'
}
//arrow hover
function showarrow(x){
    arrow[x].style.cssText = 'color: white;'
}
//buy sites
function openbuysite(x){
    if(x.id == 'iphone14'){
        window.open("html/buy-iphone14.html", "_self")
    }else if(x.id == 'ps5'){
        window.open("html/buy-playstation5.html", "_self")
    }else if(x.id == 'rtx3090'){
        window.open("html/buy-rtx3090.html", "_self")
    }else if(x.id == 'index'){
        window.open("html/buy-index.html", "_self")
    }else if(x.id == 'deck'){
        window.open("html/buy-deck.html", "_self")
    }else if(x.id == 'jordan1'){
        window.open("html/buy-jordan1.html", "_self")
    }else if(x.id == 'cart'){
        window.open("html/cart.html", "_self")
    }
}
//open cart form buy sites
function opencartsite(x){
    window.open("cart.html", "_self")
}
//iphone config
function iphoneselect(x){
    if(x.id == 'pro'){
        pro.classList.add("selected")
        promax.classList.remove("selected")
        var size = ['pro']
    }else if (x.id == 'promax'){
        promax.classList.add("selected")
        pro.classList.remove("selected")
        var size = ['promax']
    }else if(x.id == 'purple'){
        purple.classList.add("selected")
        gold.classList.remove("selected")
        silver.classList.remove("selected")
        black.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_purple_buy.png"
        var color = ['purple']
    }else if(x.id == 'gold'){
        gold.classList.add("selected")
        purple.classList.remove("selected")
        silver.classList.remove("selected")
        black.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_gold_buy.png"
        var color = ['gold']
    }else if(x.id == 'silver'){
        silver.classList.add("selected")
        gold.classList.remove("selected")
        purple.classList.remove("selected")
        black.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_white_buy.png"
        var color = ['silver']
    }else if(x.id == 'black'){
        black.classList.add("selected")
        gold.classList.remove("selected")
        purple.classList.remove("selected")
        silver.classList.remove("selected")
        buyimgmain.src = "../pics/iphone14_black_buy.png"
        var color = ['black']
    }
}
//PS5 config
function ps5select(x){
    if(x.id == 'ps5'){
        ps5.classList.add("selected")
        digital.classList.remove("selected")
        buyimgmain.src = "../pics/ps5_buy.png"
    }else if(x.id == 'digital'){
        digital.classList.add("selected")
        ps5.classList.remove("selected")
        buyimgmain.src = "../pics/ps5_digital_buy.png"
    }
}
//rtx 3090 config
function rtx3090select(x){
    if(x.id == 'rtx'){
        rtx.classList.add("selected")
        ti.classList.remove("selected")
    }else if (x.id == 'ti'){
        ti.classList.add("selected")
        rtx.classList.remove("selected")
    }
}
//index config
function indexselect(x){
    if(x.id == 'kit'){
        kit.classList.add("selected")
        headset.classList.remove("selected")
        controller.classList.remove("selected")
        base.classList.remove("selected")
        buyimgmain.src = "../pics/index_kit_buy.png"
    }else if (x.id == 'headset'){
        headset.classList.toggle("selected")
        kit.classList.remove("selected")
        buyimgmain.src = "../pics/index_headset_buy.png"
    }else if (x.id == 'controller'){
        controller.classList.toggle("selected")
        kit.classList.remove("selected")
        buyimgmain.src = "../pics/index_controller_buy.png"
    }else if (x.id == 'base'){
        base.classList.toggle("selected")
        kit.classList.remove("selected")
        buyimgmain.src = "../pics/index_base_station_buy.png"
    }
}

//deck config
function deckselect(x){
    if(x.id == 'gb64'){
        gb64.classList.add("selected")
        gb256.classList.remove("selected")
        gb512.classList.remove("selected")
    }else if(x.id == 'gb256'){
        gb256.classList.add("selected")
        gb64.classList.remove("selected")
        gb512.classList.remove("selected")
    }else if(x.id == 'gb512'){
        gb512.classList.add("selected")
        gb64.classList.remove("selected")
        gb256.classList.remove("selected")
    }
}
//jordan config
function jordanselect(x){
    if (x.id == 'turbo'){
        green.classList.add("selected")
        goofy.classList.remove("selected")
        dior.classList.remove("selected")
        buyimgmain.src = "../pics/jordan_blue_buy.png"
    }else if (x.id == 'goofy'){
        goofy.classList.add("selected")
        green.classList.remove("selected")
        dior.classList.remove("selected")
        buyimgmain.src = "../pics/jordan_brown_buy.png"
    }else if (x.id == 'dioor'){
        dior.classList.add("selected")
        green.classList.remove("selected")
        goofy.classList.remove("selected")
        buyimgmain.src = "../pics/jordan_dior_buy.png"
    }
}

cookiessetup()
function cookiessetup(){
    var setCookie = function (name, value) {
        var date = new Date(),
            expires = 'expires=';
        date.setTime(date.getTime() + 1);
        expires += date.toGMTString();
        document.cookie = name + '=' + value + '; ' + 'SameSite=None; secure;' + expires + '; path=/;';
    }
    
    setCookie("itemsincart", "1")
}


function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }

function checkCookie() {
    let cart = getCookie("itemsincart");
    if (cart != "") {
        cartnum[0].innerHTML = '(' + cart + ')'
    } else {
        setCookie("itemsincart", 0, 30);
    }
}

function buynow() {
    let cart = getCookie("itemsincart")
    setCookie("itemsincart", parseInt(cart)+1, 30);
    checkCookie()
}

function cartcalc(){
    //calculating the price of the items in cart
    const items = []
    for (let index = 0; index < cartitem.length; index++) {
        items[index] = parseInt(itemprice[index].innerHTML.substring(1))
    }
    let price = 0
    for (let index = 0; index < cartitem.length; index++) {
        price += items[index];
    }
    //displaying the price of the items in car
    subtotal[0].innerHTML = `$${price}`

    //calculating and displaying the shipping price
    let shippingprice = 0
    if (price < 100){
        shipping[0].innerHTML = `$50`
        shippingprice = 50
    } else{
        shipping[0].innerHTML = `FREE`
        shippingprice = 0
    }

    //calculating and displaying the taxes
    var taxprice = price*0.27
    tax[0].innerHTML = `$${Math.round(taxprice * 100) / 100}`

    //calculating and displaying the total
    total[0].innerHTML = `$${price + shippingprice + taxprice}`
}

function multiplier(x){
    var amount = x.value;
    if(x.id == 'amountofitem1'){
        itemprice[0].innerHTML = `$${amount*itemprice[0].id}`
    }else if(x.id == 'amountofitem2'){
        itemprice[1].innerHTML = `$${amount*itemprice[1].id}`
    }else if(x.id == 'amountofitem3'){
        itemprice[2].innerHTML = `$${amount*itemprice[2].id}`
    }else if(x.id == 'amountofitem4'){
        itemprice[3].innerHTML = `$${amount*itemprice[3].id}`
    }
    cartcalc()
}