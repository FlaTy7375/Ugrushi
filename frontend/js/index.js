const menuButton = document.querySelector(".header-menu");
const navList = document.querySelector(".nav--list");

if (menuButton && navList) {
    menuButton.addEventListener("click", () => {
        if (navList.style.display == "" || navList.style.display == "none") {
            navList.style.display = "flex"
        } else {
            navList.style.display = "none"
        }
    })
}

//modal-socials

const socialsBtn = document.querySelector(".main--container--button");
const socialsBtn2 = document.querySelector(".location--button.light");
const socialsBtns = document.querySelectorAll(".card--button.light");
const fireBtn = document.querySelector(".nav--link.btn");
const fireBtnFooter = document.querySelector(".nav--link--footer.btn");
const rulesBtn = document.querySelector(".nav--link--footer.btn-rules");
const publicBtn = document.querySelector(".nav--link--footer.btn-public");
const modalBg = document.querySelector(".modal-show");
const modalFire = document.querySelector(".modal-fire");
const modalRules = document.querySelector(".modal-rules");
const modalPublic = document.querySelector(".modal-public");
const modalSocils = document.querySelector(".modal-socials");
const closeBtn = document.querySelector(".modal-socials--close");
const closeFireBtn = document.querySelector(".fire-button");
const closeRulesBtn = document.querySelector(".close-rules");
const closePublicBtn = document.querySelector(".public-close");

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

const openRulesModal = () => {
    if (modalBg && modalRules) {
        modalBg.style.display = "block";
        modalRules.style.display = "block";
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);
    }
};

const openPublicModal = () => {
    if (modalBg && modalPublic) {
        modalBg.style.display = "block";
        modalPublic.style.display = "block";
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

const closeRulesModal = () => {
    if (modalBg && modalRules) {
        modalBg.style.display = "none";
        modalRules.style.display = "none";
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscape);
    }
};

const closePublicModal = () => {
    if (modalBg && modalPublic) {
        modalBg.style.display = "none";
        modalPublic.style.display = "none";
        document.body.style.overflow = 'auto';
        document.removeEventListener('keydown', handleEscape);
    }
};

// Функция для закрытия по клавише ESC
const handleEscape = (event) => {
    if (event.key === 'Escape') {
        closeSocialsModal();
        closeFireModal();
        closeRulesModal();
        closePublicModal();
    }
};

// Функция для закрытия по клику вне модального окна
const handleOutsideClick = (event) => {
    if (event.target === modalBg) {
        closeSocialsModal();
        closeFireModal();
        closeRulesModal();
        closePublicModal();
    }
};

// Добавляем обработчики событий с проверкой существования элементов
if (socialsBtn) {
    socialsBtn.addEventListener("click", openSocialsModal);
}

if (fireBtn) {
    fireBtn.addEventListener("click", openFireModal);
}

if (rulesBtn) {
    rulesBtn.addEventListener("click", openRulesModal);
}

if (publicBtn) {
    publicBtn.addEventListener("click", openPublicModal);
}

if (fireBtnFooter) {
    fireBtnFooter.addEventListener("click", openFireModal);
}

if (socialsBtn2) {
    socialsBtn2.addEventListener("click", openSocialsModal);
}

if (socialsBtns.length > 0) {
    socialsBtns.forEach(btn => {
        btn.addEventListener("click", openSocialsModal);
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeSocialsModal);
}

if (closeFireBtn) {
    closeFireBtn.addEventListener("click", closeFireModal);
}

if (closeRulesBtn) {
    closeRulesBtn.addEventListener("click", closeRulesModal);
}

if (closePublicBtn) {
    closePublicBtn.addEventListener("click", closePublicModal);
}

// Закрытие по клику на фон
if (modalBg) {
    modalBg.addEventListener("click", handleOutsideClick);
}

// Подробнее в карточках номеров
const moreInfoButtons = document.querySelectorAll('.more--info');
if (moreInfoButtons.length > 0) {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('more--info')) {
            const button = e.target;
            const card = button.closest('.prices--card');
            
            if (card) {
                const priceHide = card.querySelector('.price-hide');
                
                if (priceHide) {
                    // Переключаем видимость контента
                    priceHide.classList.toggle('active');
                    
                    // Переключаем класс для стрелки
                    button.classList.toggle('active');
                    
                    // Меняем текст кнопки
                    button.textContent = priceHide.classList.contains('active') ? 'Скрыть' : 'Подробнее';
                }
            }
        }
    });
}

// Пожарная безопасность аккордеон
const fireButtons = document.querySelectorAll('.fire-container--btn');
if (fireButtons.length > 0) {
    document.addEventListener('DOMContentLoaded', function() {
        fireButtons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;

                button.classList.toggle('active');
                content.classList.toggle('show');
            });
        });
    });
}

// История отеля
const storyButton = document.querySelector('.story-button');
const storyHide = document.querySelector('.story-hide');
if (storyButton && storyHide) {
    document.addEventListener('DOMContentLoaded', function() {
        storyButton.addEventListener('click', function() {
            const isOpen = storyHide.classList.contains('show');
            
            if (isOpen) {
                // Закрываем
                storyHide.classList.remove('show');
                storyButton.textContent = 'Подробнее';
                storyButton.classList.remove('active');
            } else {
                // Открываем
                storyHide.classList.add('show');
                storyButton.textContent = 'Скрыть';
                storyButton.classList.add('active');
            }
        });
    });
}

// Галерея отеля
const galleryModal = document.getElementById('gallery-modal');
const galleryModalImg = document.getElementById('modal-image');
const galleryCloseBtn = document.querySelector('.gallery-modal-close');
const galleryImages = document.querySelectorAll('.gallery--img');

if (galleryModal && galleryModalImg && galleryCloseBtn && galleryImages.length > 0) {
    document.addEventListener('DOMContentLoaded', function() {
        // Открытие модального окна при клике на изображение
        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                galleryModal.style.display = 'block';
                galleryModalImg.src = this.src;
                document.body.style.overflow = 'hidden'; // Блокируем скролл
            });
        });
        
        // Закрытие по крестику
        galleryCloseBtn.addEventListener('click', function() {
            closeGalleryModal();
        });
        
        // Закрытие по клику на свободную область
        galleryModal.addEventListener('click', function(e) {
            if (e.target === galleryModal) {
                closeGalleryModal();
            }
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && galleryModal.style.display === 'block') {
                closeGalleryModal();
            }
        });
        
        // Функция закрытия модального окна
        function closeGalleryModal() {
            galleryModal.style.display = 'none';
            document.body.style.overflow = ''; // Разблокируем скролл
        }
        
        // Предзагрузка изображений для лучшего UX
        galleryImages.forEach(img => {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        });
    });
}

// Галерея кафе
const cafeModal = document.getElementById('cafe-gallery-modal');
const cafeModalImg = document.getElementById('cafe-modal-image');
const cafeCloseBtn = document.querySelector('.cafe-gallery-modal-close');
const cafeImages = document.querySelectorAll('.story-image');

if (cafeModal && cafeModalImg && cafeCloseBtn && cafeImages.length > 0) {
    document.addEventListener('DOMContentLoaded', function() {
        // Открытие модального окна при клике на изображение
        cafeImages.forEach((img, index) => {
            img.addEventListener('click', function() {
                cafeModal.style.display = 'block';
                cafeModalImg.src = this.src;
                document.body.style.overflow = 'hidden';
            });
        });
        
        // Закрытие по крестику
        cafeCloseBtn.addEventListener('click', function() {
            closeCafeModal();
        });
        
        // Закрытие по клику на свободную область
        cafeModal.addEventListener('click', function(e) {
            if (e.target === cafeModal) {
                closeCafeModal();
            }
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && cafeModal.style.display === 'block') {
                closeCafeModal();
            }
        });
        
        // Функция закрытия модального окна
        function closeCafeModal() {
            cafeModal.style.display = 'none';
            document.body.style.overflow = '';
        }
        
        // Предзагрузка изображений для лучшего UX
        cafeImages.forEach(img => {
            const preloadImg = new Image();
            preloadImg.src = img.src;
        });
    });
}

// Галерея для номеров отеля
function initRoomGalleries() {
    let currentRoom = null;
    let currentImageIndex = 0;

    // Инициализация галереи для конкретного номера
    function initRoomGallery(roomNumber) {
        const gallery = document.querySelector(`.prices--card:nth-child(${roomNumber}) .room-gallery`);
        if (!gallery) return;

        const images = gallery.querySelectorAll('.room-main-image');
        const prevBtn = gallery.querySelector('.room-nav-btn.prev');
        const nextBtn = gallery.querySelector('.room-nav-btn.next');
        
        if (images.length === 0 || !prevBtn || !nextBtn) return;

        let currentIndex = 0;

        function showImage(index) {
            // Скрываем все изображения
            images.forEach(img => {
                img.style.display = 'none';
                img.classList.remove('active');
            });
            
            // Показываем выбранное
            if (images[index]) {
                images[index].style.display = 'block';
                images[index].classList.add('active');
            }
            
            // Обновляем состояние кнопок
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === images.length - 1;
            
            currentIndex = index;
        }

        // Навигация кнопками
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                showImage(currentIndex - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < images.length - 1) {
                showImage(currentIndex + 1);
            }
        });

        // Открытие модального окна при клике на изображение
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentRoom = roomNumber;
                currentImageIndex = index;
                openRoomModal(roomNumber, index);
            });
        });

        // Показываем первое изображение
        showImage(0);
    }

    // Модальное окно для полноэкранного просмотра
    const roomModal = document.getElementById('room-modal');
    const roomModalImg = document.getElementById('room-modal-image');
    const roomModalClose = document.querySelector('.room-modal-close');
    const roomModalPrev = document.querySelector('.room-modal-prev');
    const roomModalNext = document.querySelector('.room-modal-next');
    const roomModalCaption = document.querySelector('.room-modal-caption');

    function openRoomModal(roomNumber, imageIndex) {
        if (!roomModal || !roomModalImg) return;
        
        currentRoom = roomNumber;
        currentImageIndex = imageIndex;
        
        // Получаем все изображения этого номера для определения общего количества
        const gallery = document.querySelector(`.prices--card:nth-child(${roomNumber}) .room-gallery`);
        const images = gallery ? gallery.querySelectorAll('.room-main-image') : [];
        const totalImages = images.length;
        
        // Обновляем изображение в модальном окне
        const activeImage = images[imageIndex];
        if (activeImage) {
            roomModalImg.src = activeImage.src;
            roomModalImg.alt = activeImage.alt;
        }
        
        if (roomModalCaption) {
            roomModalCaption.textContent = `Фото ${imageIndex + 1} из ${totalImages}`;
        }
        
        roomModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        updateModalNavigation();
    }

    function closeRoomModal() {
        if (!roomModal) return;
        roomModal.style.display = 'none';
        document.body.style.overflow = '';
    }

    function updateModalNavigation() {
        if (!roomModalPrev || !roomModalNext || !currentRoom) return;
        
        const gallery = document.querySelector(`.prices--card:nth-child(${currentRoom}) .room-gallery`);
        const images = gallery ? gallery.querySelectorAll('.room-main-image') : [];
        const totalImages = images.length;
        
        roomModalPrev.disabled = currentImageIndex === 0;
        roomModalNext.disabled = currentImageIndex === totalImages - 1;
    }

    function navigateModal(direction) {
        if (!currentRoom) return;
        
        const gallery = document.querySelector(`.prices--card:nth-child(${currentRoom}) .room-gallery`);
        const images = gallery ? gallery.querySelectorAll('.room-main-image') : [];
        const totalImages = images.length;
        
        if (direction === 'prev' && currentImageIndex > 0) {
            currentImageIndex--;
        } else if (direction === 'next' && currentImageIndex < totalImages - 1) {
            currentImageIndex++;
        }
        
        // Обновляем изображение в модальном окне
        const activeImage = images[currentImageIndex];
        if (activeImage && roomModalImg) {
            roomModalImg.src = activeImage.src;
            roomModalImg.alt = activeImage.alt;
        }
        
        if (roomModalCaption) {
            roomModalCaption.textContent = `Фото ${currentImageIndex + 1} из ${totalImages}`;
        }
        
        updateModalNavigation();
    }

    // Обработчики для модального окна
    if (roomModalClose) {
        roomModalClose.addEventListener('click', closeRoomModal);
    }

    if (roomModalPrev) {
        roomModalPrev.addEventListener('click', () => navigateModal('prev'));
    }

    if (roomModalNext) {
        roomModalNext.addEventListener('click', () => navigateModal('next'));
    }

    if (roomModal) {
        roomModal.addEventListener('click', (e) => {
            if (e.target === roomModal) {
                closeRoomModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (roomModal && roomModal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeRoomModal();
            } else if (e.key === 'ArrowLeft') {
                navigateModal('prev');
            } else if (e.key === 'ArrowRight') {
                navigateModal('next');
            }
        }
    });

    // Инициализируем все галереи
    for (let i = 1; i <= 6; i++) {
        initRoomGallery(i);
    }
}

// Запускаем инициализацию галерей когда DOM готов
document.addEventListener('DOMContentLoaded', function() {
    const pricesSection = document.querySelector('.prices');
    if (pricesSection) {
        initRoomGalleries();
    }
});

// Меню кафе
function initMenuGallery() {
    const menuMainImage = document.querySelector('.menu-main-image');
    const menuMainWrapper = document.querySelector('.menu--main-image-wrapper');
    const menuThumbnails = document.querySelectorAll('.menu-thumbnail');
    const menuPrevBtn = document.querySelector('.menu-prev-btn');
    const menuNextBtn = document.querySelector('.menu-next-btn');
    const menuModal = document.getElementById('menu-modal');
    const menuModalImg = document.getElementById('menu-modal-image');
    const menuModalClose = document.querySelector('.menu-modal-close');
    const menuModalPrev = document.querySelector('.menu-modal-prev');
    const menuModalNext = document.querySelector('.menu-modal-next');
    const menuCounter = document.querySelector('.menu--counter');
    
    if (!menuMainImage || menuThumbnails.length === 0) return;
    
    let currentIndex = 0;
    const menuImages = [
        'images/menu/cafe-menu-01.jpg',
        'images/menu/cafe-menu-02.jpg',
        'images/menu/cafe-menu-03.jpg',
        'images/menu/cafe-menu-04.jpg',
        'images/menu/cafe-menu-05.jpg',
        'images/menu/cafe-menu-06.jpg',
        'images/menu/cafe-menu-07.jpg',
        'images/menu/cafe-menu-08.jpg',
        'images/menu/cafe-menu-09.jpg',
        'images/menu/cafe-menu-10.jpg'
    ];
    
    function updateMainImage(index) {
        if (index >= 0 && index < menuImages.length) {
            currentIndex = index;
            menuMainImage.src = menuImages[index];
            
            // Обновляем счетчик
            if (menuCounter) {
                menuCounter.textContent = `${index + 1}/${menuImages.length}`;
            }
            
            // Обновляем активную миниатюру
            menuThumbnails.forEach((thumb, i) => {
                if (i === index) {
                    thumb.classList.add('active');
                } else {
                    thumb.classList.remove('active');
                }
            });
            
            // Обновляем состояние кнопок
            if (menuPrevBtn) {
                menuPrevBtn.disabled = index === 0;
            }
            if (menuNextBtn) {
                menuNextBtn.disabled = index === menuImages.length - 1;
            }
        }
    }
    
    // Клик на миниатюру
    menuThumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            updateMainImage(index);
        });
    });
    
    // Кнопка влево
    if (menuPrevBtn) {
        menuPrevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                updateMainImage(currentIndex - 1);
            }
        });
    }
    
    // Кнопка вправо
    if (menuNextBtn) {
        menuNextBtn.addEventListener('click', () => {
            if (currentIndex < menuImages.length - 1) {
                updateMainImage(currentIndex + 1);
            }
        });
    }
    
    // Функция обновления изображения в модальном окне
    function updateModalImage(index) {
        if (index >= 0 && index < menuImages.length && menuModalImg) {
            menuModalImg.src = menuImages[index];
            updateModalButtons(index);
        }
    }
    
    // Функция обновления состояния кнопок в модальном окне
    function updateModalButtons(index) {
        if (menuModalPrev) {
            menuModalPrev.disabled = index === 0;
        }
        if (menuModalNext) {
            menuModalNext.disabled = index === menuImages.length - 1;
        }
    }
    
    // Открытие модального окна при клике на главную картинку
    if (menuMainWrapper && menuModal && menuModalImg) {
        menuMainWrapper.addEventListener('click', () => {
            menuModal.style.display = 'block';
            updateModalImage(currentIndex);
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Навигация в модальном окне
    if (menuModalPrev) {
        menuModalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentIndex > 0) {
                currentIndex--;
                updateModalImage(currentIndex);
                updateMainImage(currentIndex);
            }
        });
    }
    
    if (menuModalNext) {
        menuModalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentIndex < menuImages.length - 1) {
                currentIndex++;
                updateModalImage(currentIndex);
                updateMainImage(currentIndex);
            }
        });
    }
    
    // Закрытие модального окна
    function closeMenuModal() {
        if (menuModal) {
            menuModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
    
    if (menuModalClose) {
        menuModalClose.addEventListener('click', closeMenuModal);
    }
    
    if (menuModal) {
        menuModal.addEventListener('click', (e) => {
            if (e.target === menuModal) {
                closeMenuModal();
            }
        });
    }
    
    // Закрытие по ESC и навигация стрелками
    document.addEventListener('keydown', (e) => {
        if (menuModal && menuModal.style.display === 'block') {
            if (e.key === 'Escape') {
                closeMenuModal();
            } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
                currentIndex--;
                updateModalImage(currentIndex);
                updateMainImage(currentIndex);
            } else if (e.key === 'ArrowRight' && currentIndex < menuImages.length - 1) {
                currentIndex++;
                updateModalImage(currentIndex);
                updateMainImage(currentIndex);
            }
        }
    });
    
    // Инициализация
    updateMainImage(0);
}

// Инициализация меню
document.addEventListener('DOMContentLoaded', function() {
    const menuSection = document.querySelector('.menu');
    if (menuSection) {
        initMenuGallery();
    }
});
