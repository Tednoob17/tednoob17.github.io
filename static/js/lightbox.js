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

  function showImage(img) {
    lbImg.src = img.src;
    lbImg.alt = img.alt || "";

    // Try to find a nearby description element (.art-desc)
    let descHtml = "";
    const tile = img.closest('.art-tile');
    if (tile) {
      const descEl = tile.querySelector('.art-desc');
      if (descEl) descHtml = descEl.innerHTML;
    }

    if (descHtml) {
      lbDesc.innerHTML = descHtml;
      overlay.classList.add("with-desc");
      overlay.classList.add("active");
    } else {
      // try AJAX fetch from data-desc-url attribute
      lbDesc.innerHTML = "";
      const descUrl = img.dataset && img.dataset.descUrl;
      if (descUrl) {
        fetch(descUrl)
          .then(r => {
            if (!r.ok) throw new Error("No desc");
            return r.text();
          })
          .then(text => {
            // insert as text for now
            lbDesc.textContent = text.trim();
            overlay.classList.add("with-desc");
            overlay.classList.add("active");
          })
          .catch(() => {
            lbDesc.textContent = "Artwork by Tednoob17";
            overlay.classList.add("with-desc");
            overlay.classList.add("active");
          });
      } else {
        lbDesc.textContent = "Artwork by Tednoob17";
        overlay.classList.add("with-desc");
        overlay.classList.add("active");
      }
    }
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
