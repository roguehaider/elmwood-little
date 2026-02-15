/**
 * Variant options: click to update displayed price and active state.
 * Use data-price on each .variant-btn and optional data-prefix on .price-detail (e.g. "From ").
 */
(function () {
  function init() {
    document.querySelectorAll('.detail-info').forEach(function (detailInfo) {
      var priceEl = detailInfo.querySelector('.price-detail');
      var optionsContainer = detailInfo.querySelector('.variant-options');
      if (!priceEl || !optionsContainer) return;

      var prefix = priceEl.getAttribute('data-prefix') || '';

      optionsContainer.querySelectorAll('.variant-btn').forEach(function (btn) {
        var price = btn.getAttribute('data-price');
        if (price == null) return;

        btn.addEventListener('click', function () {
          optionsContainer.querySelectorAll('.variant-btn').forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          priceEl.textContent = prefix + '£' + price;
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
