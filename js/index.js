const swiper = new Swiper('.swiper', {

  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: 'True',
  },
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

$( function() {
  $( "#accordion" ).accordion({
    active: true,
    collapsible: true,
    heightStyle: 'content',
	  header: '.accordion-header',
  });
} );

document.querySelectorAll('#burger-button').forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.toggle('burger__menu--active')
  })
})

document.querySelectorAll('#search').forEach(function(el) {
  el.addEventListener('click', function() {
    document.querySelector('#search-menu').classList.toggle('search__menu--active')
  })
})
