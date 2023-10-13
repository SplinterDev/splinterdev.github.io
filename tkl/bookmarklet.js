//javascript:
(function () {
  const scriptId = 'tkl-script';
  const existingScript = document.getElementById(scriptId);
  if (existingScript) {
    console.log('TKL script found, removing existing instance');
    existingScript.remove();
  }

  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'https://localhost:8000/index.min.js';
  script.id = scriptId;
  document.body.appendChild(script);
})();
// script.src = 'https://cdn.jsdelivr.net/gh/fjcmontenegro/fjcm@tkl/tkl/dist/index.min.js';
