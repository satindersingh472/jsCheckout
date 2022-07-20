function choose_purple(details){
    Cookies.set(`choosen_color` ,`purple`);
    location.href = `checkout.html`;
}
function choose_red(details){
    Cookies.set(`choosen_color`, `red`);
    location.href = `checkout.html`;

}
function choose_blue(details){
    Cookies.set(`choosen_color`, `blue`);
    location.href = `checkout.html`;

}

let purple_button = document.getElementById(`purple`);
purple_button.addEventListener(`click`, choose_purple);
let red_button = document.getElementById(`red`);
red_button.addEventListener(`click`,choose_red);
let blue_button = document.getElementById(`blue`);
blue_button.addEventListener(`click`,choose_blue);