const openPix = document.querySelector("#pixPag");
const closePix = document.querySelector("#pixCloseModal");



const modalPix = document.querySelector("#modal");
const fadePix = document.querySelector("#fade");

const toggleModal = () => {

    [modalPix, fadePix].forEach((el) => el.classList.toggle("hidePix"));


};

[openPix, closePix, fadePix].forEach((el) => {

    el.addEventListener("click", () => toggleModal());
    
});

