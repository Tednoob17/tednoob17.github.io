---
title: "42"
---
<style>
  #readme-content table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
  }
  #readme-content table th,
  #readme-content table td {
    border: 1px solid #333;
    padding: 8px 12px;
    text-align: left;
    color: #000;
  }
  #readme-content table th {
    background-color: #ddd;
    font-weight: bold;
    color: #000;
  }
  #readme-content table tr:nth-child(even) {
    background-color: #fff;
  }
  #readme-content table tr:nth-child(odd) {
    background-color: #f0f0f0;
  }

  #lightbox {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  #lightbox.active {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #lightbox-img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }

  #lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }

  #lightbox-close:hover {
    color: #bbb;
  }

  #readme-content img {
    cursor: pointer;
    transition: opacity 0.2s;
  }

  #readme-content img:hover {
    opacity: 0.8;
  }
</style>

<div id="lightbox">
  <span id="lightbox-close">&times;</span>
  <img id="lightbox-img" src="">
</div>

<div id="readme-content">Loading...</div>

<script>
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
  }

  lightboxClose.onclick = closeLightbox;
  lightbox.onclick = function(e) {
    if (e.target === lightbox) closeLightbox();
  };

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  fetch("https://api.github.com/repos/Tednoob17/42/readme", {
    headers: { Accept: "application/vnd.github.html+json" }
  })
  .then(r => r.text())
  .then(html => {
    // Convertir les images relatives en URLs absolutes GitHub
    html = html.replace(/src="\.\/([^"]+)"/g, 'src="https://raw.githubusercontent.com/Tednoob17/42/main/$1"');
    html = html.replace(/src="([^"\/][^":]+)"/g, 'src="https://raw.githubusercontent.com/Tednoob17/42/main/$1"');
    document.getElementById("readme-content").innerHTML = html;

    // Ajouter le listener aux images pour la lightbox
    const images = document.querySelectorAll('#readme-content img');
    images.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        openLightbox(this.src);
      });
    });
  })
  .catch(() => {
    document.getElementById("readme-content").innerHTML = "<p>Could not load README.</p>";
  });
</script>