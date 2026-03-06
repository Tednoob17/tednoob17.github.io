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

  function isRelativeLink(link) {
    return !!link && !/^(?:[a-z]+:|\/\/|#|\/)/i.test(link);
  }

  function normalizeRepoPath(path) {
    return path.replace(/^\.\//, '').replace(/^\//, '').split('#')[0].split('?')[0];
  }

  function encodeRepoPath(path) {
    return path
      .split('/')
      .map(function(segment) {
        try {
          return encodeURIComponent(decodeURIComponent(segment));
        } catch {
          return encodeURIComponent(segment);
        }
      })
      .join('/');
  }

  function buildRawUrl(path) {
    return `https://raw.githubusercontent.com/Tednoob17/42/main/${encodeRepoPath(path)}`;
  }

  function buildMediaUrl(path) {
    return `https://media.githubusercontent.com/media/Tednoob17/42/main/${encodeRepoPath(path)}`;
  }

  function buildBlobUrl(path) {
    return `https://github.com/Tednoob17/42/blob/main/${encodeRepoPath(path)}`;
  }

  function buildTreeUrl(path) {
    return `https://github.com/Tednoob17/42/tree/main/${encodeRepoPath(path)}`;
  }

  function isDownloadablePath(path) {
    return /\.(pdf|iso|img|bin|zip|7z|rar|tar|gz|tgz|bz2|xz|zst|deb|rpm|apk|dmg|pkg|exe|msi)$/i.test(path);
  }

  async function urlExists(url) {
    try {
      const headResponse = await fetch(url, { method: 'HEAD', cache: 'no-store' });
      if (headResponse.ok) return true;
    } catch {
      // Ignore and fallback to a small range GET request.
    }

    try {
      const getResponse = await fetch(url, {
        method: 'GET',
        headers: { Range: 'bytes=0-32' },
        cache: 'no-store'
      });
      return getResponse.ok;
    } catch {
      return false;
    }
  }

  async function resolveDownloadLink(linkEl, repoPath) {
    const rawUrl = buildRawUrl(repoPath);
    const mediaUrl = buildMediaUrl(repoPath);

    if (await urlExists(rawUrl)) {
      linkEl.href = rawUrl;
      return;
    }

    if (await urlExists(mediaUrl)) {
      linkEl.href = mediaUrl;
      return;
    }

    // Fallback to GitHub UI instead of leaving a broken 404 link.
    linkEl.href = buildBlobUrl(repoPath);
  }

  fetch("https://api.github.com/repos/Tednoob17/42/readme", {
    headers: { Accept: "application/vnd.github.html+json" }
  })
  .then(r => r.text())
  .then(async html => {
    const container = document.getElementById("readme-content");
    container.innerHTML = html;

    // Convertir les images relatives en URLs absolues raw GitHub
    const images = container.querySelectorAll('img[src]');
    images.forEach(img => {
      const src = img.getAttribute('src');
      if (isRelativeLink(src)) {
        img.src = buildRawUrl(normalizeRepoPath(src));
      }

      img.style.cursor = 'pointer';
      img.addEventListener('click', function() {
        openLightbox(this.src);
      });
    });

    // Liens: raw si possible, sinon media pour LFS, puis fallback blob
    const links = container.querySelectorAll('a[href]');
    const pendingResolutions = [];

    links.forEach(link => {
      const href = link.getAttribute('href');
      if (!isRelativeLink(href)) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        return;
      }

      const repoPath = normalizeRepoPath(href);
      if (isDownloadablePath(repoPath)) {
        pendingResolutions.push(resolveDownloadLink(link, repoPath));
      } else if (repoPath.endsWith('/')) {
        link.href = buildTreeUrl(repoPath);
      } else {
        link.href = buildBlobUrl(repoPath);
      }

      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    });

    await Promise.all(pendingResolutions);
  })
  .catch(() => {
    document.getElementById("readme-content").innerHTML = "<p>Could not load README.</p>";
  });
</script>