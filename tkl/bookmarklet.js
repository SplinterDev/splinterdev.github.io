//javascript:
(function () {
  if (!document.getElementById('tkl-script')) {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://localhost:8000/index.min.js';
    script.id = 'tkl-script';
    document.body.appendChild(script);
  }
})();
// script.src = 'https://cdn.jsdelivr.net/gh/fjcmontenegro/fjcm@tkl/tkl/dist/index.min.js';
