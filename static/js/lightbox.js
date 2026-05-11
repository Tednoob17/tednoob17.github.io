document.addEventListener("DOMContentLoaded", function () {
  // Create overlay once: inner container holds image + description
  const overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";
  const inner = document.createElement("div");
  inner.className = "lightbox-inner";
  const lbImg = document.createElement("img");
  lbImg.className = "lightbox-img";
  const lbDesc = document.createElement("div");
  lbDesc.className = "lightbox-desc";
  const prevBtn = document.createElement("button");
  prevBtn.className = "lightbox-prev";
  prevBtn.innerHTML = "\u2190";
  const nextBtn = document.createElement("button");
  nextBtn.className = "lightbox-next";
  nextBtn.innerHTML = "\u2192";
  inner.appendChild(lbImg);
  inner.appendChild(lbDesc);
  inner.appendChild(prevBtn);
  inner.appendChild(nextBtn);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  // Track all zoomable images and current index
  let allImages = [];
  let currentImageIndex = -1;

  // Close on click or Escape
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      overlay.classList.remove("active");
    }
    // Arrow key navigation
    if (overlay.classList.contains("active")) {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
        showImage(allImages[currentImageIndex]);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        currentImageIndex = (currentImageIndex + 1) % allImages.length;
        showImage(allImages[currentImageIndex]);
      }
    }
  });

  function extractAuthor(html) {
    // Look for pattern like @username or @username (Platform)
    const regex = /@([a-zA-Z0-9_.-]+)/;
    const match = html.match(regex);
    if (match) {
      return "@" + match[1];
    }
    return null;
  }

  function showImage(img) {
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";

    const descUrl = img.dataset && img.dataset.descUrl;
    if (descUrl) {
      fetch(descUrl)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("No description file");
          }
          return response.text();
        })
        .then(function (text) {
          const trimmed = text.trim();
          if (trimmed) {
            lbDesc.innerHTML = renderMarkdown(trimmed);
          } else {
            lbDesc.textContent = "Artwork by Tedsig42";
          }
          overlay.classList.add("with-desc");
          overlay.classList.add("active");
        })
        .catch(function () {
          lbDesc.textContent = "Artwork by Tedsig42";
          overlay.classList.add("with-desc");
          overlay.classList.add("active");
        });
      return;
    }

    const tile = img.closest('.art-tile');
    const sourceEl = tile && tile.querySelector('.art-desc-source');
    const descRaw = sourceEl ? sourceEl.textContent || "" : "";
    if (descRaw.trim()) {
      lbDesc.innerHTML = renderMarkdown(descRaw.trim());
    } else {
      lbDesc.textContent = "Artwork by Tedsig42";
    }
    overlay.classList.add("with-desc");
    overlay.classList.add("active");
  }

  // Prev/Next button handlers
  prevBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (allImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
    showImage(allImages[currentImageIndex]);
  });
  nextBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (allImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % allImages.length;
    showImage(allImages[currentImageIndex]);
  });

  // Attach to every content image
  document.querySelectorAll(".content__body img, article img").forEach(function (img) {
    // Skip images that are inside the lightbox overlay itself
    if (!img.closest(".lightbox-overlay")) {
      allImages.push(img);
      img.style.cursor = "zoom-in";
      img.addEventListener("click", function (e) {
        e.stopPropagation();
        currentImageIndex = allImages.indexOf(this);
        showImage(this);
      });
    }
  });
});

function renderMarkdown(text) {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n+/g, '</p><p>')
    .replace(/\n/g, '<br>');
}
