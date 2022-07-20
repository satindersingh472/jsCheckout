let cookie_box = document.getElementById(`cookie_box`);
cookie_box[`style`][`height`] = `200px`
cookie_box[`style`][`width`] = `200px`;

let cookie_value = Cookies.get(`choosen_color`);
if(cookie_value === `purple` || cookie_value === `red` || cookie_value === `blue`){
    document.getElementById(`cookie_box`)[`style`][`backgroundColor`] = `${cookie_value}`;
} else {
    alert(`please choose any cookie to start!!! `);
}

function delete_cookies(details){
    Cookies.remove(`choosen_color`);
    location.href = `checkout.html`;
}
let delete_button = document.getElementById(`delete`);
delete_button.addEventListener(`click`,delete_cookies);