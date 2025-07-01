//初始化 Swiper
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
    // 小於 992px：顯示 2 個
    0: {
      slidesPerView: 1
    },
    680: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
}
  });
