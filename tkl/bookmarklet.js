//javascript:
(function () {
  if (window.showTKLModal) {
    return;
  }

  if (!document.getElementById('tkl-script')) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://localhost:8000/index.js';
    script.id = 'tkl-script';
    document.body.appendChild(script);
  } else {
    window.setShowTKLModal && window.setShowTKLModal();
  }
})();
// script.src = 'https://cdn.jsdelivr.net/gh/fjcmontenegro/fjcm@tkl/tkl/dist/index.js';
