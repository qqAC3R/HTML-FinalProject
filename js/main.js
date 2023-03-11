const openButton = document.getElementById("menu_open_btn");
const openButton2 = document.getElementById("menu_open_btn2");
const closeButton = document.getElementById("menu_close_btn");
const mobileMenu  = document.getElementById("menu_mobile_id");

openButton.onclick = () => {
    if(!mobileMenu.classList.contains('active')) {
        mobileMenu.classList.add('active');
    }
}

openButton2.onclick = () => {
    if(!mobileMenu.classList.contains('active')) {
        mobileMenu.classList.add('active');
    }
}

closeButton.onclick = () => {
    if(mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
    }
}

