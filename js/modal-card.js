// Modal do cartão de crédito
const openModalButton = document.querySelector("#cardCredit");
const closeModalButton = document.querySelector("#close-modal");


//Modal do pix
const openPix = document.querySelector("#pixPag");
const closePix = document.querySelector("#pixCloseModal");


// Objeto modal
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");


// Objeto modal pix
const modalPix = document.querySelector("#modalPix");
const fadePix = document.querySelector("#fadePix");


// Abrir/fechar o modal
const toggleModal = () => {

    [modal, fade].forEach((el) => el.classList.toggle("hide"));


};


[openModalButton, closeModalButton, fade].forEach((el) => {

    el.addEventListener("click", () => toggleModal());
    
});

const toggleModalPix = () => {

    [modalPix, fadePix].forEach((pix) => pix.classList.toggle("hide"));


};

[openPix, closePix, fadePix].forEach((pix) => {

    pix.addEventListener("click", () => toggleModalPix());
    
});
