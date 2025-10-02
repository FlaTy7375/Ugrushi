const menuButton = document.querySelector(".header-menu");
const navList = document.querySelector(".nav--list");

menuButton.addEventListener("click", () => {
    if (navList.style.display == "" || navList.style.display == "none") {
        navList.style.display = "flex"
    } else {
        navList.style.display = "none"
    }
})

//modal-socials

const socialsBtn = document.querySelector(".main--container--button");
const socialsBtn2 = document.querySelector(".location--button.light");
const socialsBtns = document.querySelectorAll(".card--button.light");
const fireBtn = document.querySelector(".nav--link.btn");
const modalBg = document.querySelector(".modal-show");
const modalFire = document.querySelector(".modal-fire");
const modalSocils = document.querySelector(".modal-socials");
const closeBtn = document.querySelector(".modal-socials--close");
const closeFireBtn = document.querySelector(".fire-button");

// Функции открытия
const openSocialsModal = () => {
    if (modalBg && modalSocils) {
        modalBg.style.display = "block";
        modalSocils.style.display = "flex";
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);
    }
};

const openFireModal = () => {
    if (modalBg && modalFire) {
        modalBg.style.display = "block";
        modalFire.style.display = "block";
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);
    }
};

// Функция закрытия
const closeSocialsModal = () => {
    if (modalBg && modalSocils) {
        modalBg.style.display = "none";
        modalSocils.style.display = "none";
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscape);
    }
};

const closeFireModal = () => {
    if (modalBg && modalFire) {
        modalBg.style.display = "none";
        modalFire.style.display = "none";
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscape);
    }
};

// Функция для закрытия по клавише ESC
const handleEscape = (event) => {
    if (event.key === 'Escape') {
        closeSocialsModal();
        closeFireModal();
    }
};

// Функция для закрытия по клику вне модального окна
const handleOutsideClick = (event) => {
    if (event.target === modalBg) {
        closeSocialsModal();
        closeFireModal();
    }
};

// Добавляем обработчики событий с проверкой существования элементов
if (socialsBtn) {
    socialsBtn.addEventListener("click", openSocialsModal);
}

if (fireBtn) {
    fireBtn.addEventListener("click", openFireModal);
}

if (socialsBtn2) {
    socialsBtn2.addEventListener("click", openSocialsModal);
}

socialsBtns.forEach(btn => {
    btn.addEventListener("click", openSocialsModal);
});

if (closeBtn) {
    closeBtn.addEventListener("click", closeSocialsModal);
}

if (closeFireBtn) {
    closeFireBtn.addEventListener("click", closeFireModal);
}

// Закрытие по клику на фон
if (modalBg) {
    modalBg.addEventListener("click", handleOutsideClick);
}