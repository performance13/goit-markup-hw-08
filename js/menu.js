(() => {
  const refs = {
    openMobileMenulBtn: document.querySelector('[data-menu-open]'),
    closeMobileMenuBtn: document.querySelector('[data-menu-close]'),
    mobileMenu: document.querySelector('[data-mobile-nav]'),
  };

  refs.openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle('is-hidden');
  }
})();
 