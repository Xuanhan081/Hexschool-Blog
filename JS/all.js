AOS.init({
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 2000 // values from 0 to 3000, with step 50ms
      })

// all.js

// 👇 定義在全域中
let currentIndex = 0;
const cardList = document.querySelector("#blogSwiper ul");
const cards = document.querySelectorAll(".card");
const cardsPerView = 3;

function slideLeft() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

function slideRight() {
    if (currentIndex < cards.length - cardsPerView) {
        currentIndex++;
        updateSlider();
    }
}

function getCardWidthWithGap() {
    const style = window.getComputedStyle(cards[0]);
    const gap = parseInt(style.marginRight) || 25;
    return cards[0].offsetWidth + gap;
}

function updateSlider() {
    const cardWidth = getCardWidthWithGap();
    cardList.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// toggle 功能
function toggleText(contentId, buttonId) {
    const content = document.getElementById(contentId);
    const button = document.getElementById(buttonId);

    if (content.classList.contains("collapsed")) {
        content.classList.remove("collapsed");
        content.classList.add("expanded");
        button.textContent = "收起內文";
    } else {
        content.classList.remove("expanded");
        content.classList.add("collapsed");
        button.textContent = "閱讀全文";
    }
}